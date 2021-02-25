
### 背景
对redux-thunk不熟悉，网络上偏向saga的更多，所以采用了redux-saga作为接合redux的异步解决方案，顺便阅读该项目源码，了解内部原理，需要前置知识redux&生成器函数基础，后续会出redux的源码解读，不定时间


#### 基础知识，生成器函数

生成器函数格式一般为
```javascript
function* gen() {
  yield 'xxx'
  yield 888
  yield { name: 'aike' }
  yield new Promise(resolve => {
    resolve('1')
  })
  yield () => {}
}
```
执行
```javascript
const iterator = gen()
iterator.next() // { done: false, value: 'xxx'}
iterator.next() // { done: false, value: '888'}
iterator.next() // { done: false, value: { name: 'aike' }}
iterator.next() // { done: false, value: Promise}
iterator.next() // { done: false, value: func}
iterator.next() // { done: true} done=true,表示当前迭代器执行完毕
```
#### 核心原理一句话

redux-saga是redux的中间件，通过迭代器函数进入待机转态，通过dispatch的action匹配预置好的处理程序callback来做区别处理

#### task&iterator的区别

一个task不等于一个迭代器的周期范围，

#### effect

不好翻译，类似于副作用，一个因子单位，可以是任何形式，不过在这边规定了几种格式，带有扩展功能，例如put effect一般是
```javascript 
{
  [IO]: true, // 个人感觉只是各种effect的统一标识  其实可以通过['PUT', 'TAKE'...].includes(effect.type)来代替
  combinator: false,
  type: 'PUT',
  payload, // {chanel, action} action={type, payload}
}
```
#### [io]标志

出现的地方有两个,定义以及生成的地方，在生成各种内置effect的时候都会设置[IO] = true

```javascript
const makeEffect = (type, payload) => ({
  [IO]: true,
  combinator: false,
  type,
  payload,
})
```
使用的地方

```javascript
    if (is.promise(effect)) {
      resolvePromise(effect, currCb)
    } else if (is.iterator(effect)) {
      proc(env, effect, task.context, effectId, meta, /* isRoot */ false, currCb)
      // 判断IO 其实可以['PUT', 'TAKE', 'FORK'...].includes(effect.type)  不过这样也好 统一在makeEffect中设置
    } else if (effect && effect[IO]) {
      const effectRunner = effectRunnerMap[effect.type]
      effectRunner(env, effect.payload, currCb, executingContext)
    } else {
      currCb(effect)
    }

```

#### [SAGA_ACTION]标志

标记挂载位置wrapSagaDispatch
```javascript
export const wrapSagaDispatch = dispatch => action => {
  // 包装该dispatch， 来自env env.dispatch
  return dispatch(Object.defineProperty(action, SAGA_ACTION, { value: true }))
}
```
标记是否有saga派发的action，比如put('xxxxx')
触发位置举例

```javascript 
function runPutEffect(env, { channel, action, resolve }, cb) {
  /**
   Schedule the put in case another saga is holding a lock.
   The put will be executed atomically. ie nested puts will execute after
   this put has terminated.
   **/
  asap(() => {
    let result
    try {
      // env.dispatch 触发saga action
      result = (channel ? channel.put : env.dispatch)(action)
    } catch (error) {
      cb(error, true)
      return
    }

    if (resolve && is.promise(result)) {
      resolvePromise(result, cb)
    } else {
      cb(result)
    }
  })
  // Put effects are non cancellables
}
```
作用在于区分原生redux action和saga action，因为saga action还有其他匹配任务 比如响应saga的take操作

#### 关于任务调度

之前看saga源码有一个scheduler的调度程序，没搞懂它的用处，现在搞懂了分享给大家,假设有如下一组代码

```javascript
function* rootSaga() {
  yield fork(genA) // LINE-1
  yield fork(genB) // LINE-2
}

function* genA() {
  yield put({ type: 'A' })
  yield take('B')
}

function* genB() {
  yield take('A')
  yield put({ type: 'B' })
}

```

在有saga的情况下，可以正常运行，也就是take-A接收到put-A,take-B接收到put-B,能够执行take注册的callback方法,至于callback这个，后续讲解take effect,只需要put会寻找take在channel中注册的callback去执行，那么take就不能在put的后面执行，所以这边任务调度起了作用


如果没有saga，这段代码会先执行put-A,take-A还没注册，继续注册take-B,genB中的put-B起作用，被take-B响应，但是丢失了action A

用了schduler之后的处理流程如下

fork genA时，迭代器执行到put操作，调取runPutEffect

```javascript
  // asap尽可能快的执行这个函数(任务)
  asap(() => {
    let result
    try {
      result = (channel ? channel.put : env.dispatch)(action)
    } catch (error) {
      cb(error, true)
      return
    }

    if (resolve && is.promise(result)) {
      resolvePromise(result, cb)
    } else {
      // 父任务的callback 此时asap还在执行中
      cb(result)
    }
  })
```

这里有个重点，task确实是一棵树形挂载，不过从根节点结构成这棵树是线性执行的，也就是说
1. fork(genA)，检测到fork类型effect，调取immediately立即执行当前任务,且任务锁semaphore += 1 === 1,简写成imediately(task1),task1是不会立即结束的，继续执行task1中的proc方法调用

2. 获取到putEffect,调取asap执行put处理，不过当前在task1中，semaphore = 1,所以asap不会立即执行，避免了take还没注册就执行put的操作

3. 执行完上述proc: proc1后，会调取一开始fork(genA)带入的cb，也就是主任务的callback,所以此时的fork(genA)是没有结束的，紧接着开始了fork(genB)

4. 继续开启了新的proc: proc2处理fork(genB),按顺序处理put-B,semaphore = 3,挂起put执行，继续确保所有put类型Effect最后flush处理,

5. 注册takeB,结束proc2,此时已经处理完各种类型的effect，flush所有任务，执行各类callback，继续执行，结束proc1,结束saga结构解析


### 实例讲解

示例代码

```javascript
// store.js
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from '../../../packages/redux-saga/dist/redux-saga.umd.js'
const sagaMiddleware = createSagaMiddleware()
const store = createStore(reducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(rootSaga) // 启动saga，分解生成器函数 构建saga树，预置处理程序
```

#### 公共处理的逻辑部分

修改的重点是```channel.put(action)```,往主任务中的channel中推入action，尝试匹配在saga队列中注册的action,如果匹配则执行预置callback,比如take('target-action')的用法

```javascript
	// redux中间件经典样例
    return next => action => {
      if (sagaMonitor && sagaMonitor.actionDispatched) {
        sagaMonitor.actionDispatched(action)
      }
      const result = next(action) // hit reducers
      channel.put(action) // 会在redux中透传action，也会触发redux-saga中的action处理
      return result
    }
```
#### put

```javascript
// saga
import { put } from 'redux-saga/effects'
// 根节点saga
export default function* rootSaga () {
  yield put({ type: 'INCREMENT' })
}

```

##### 经过sagaMiddleware改写

此时拿到的根saga rootSaga在runSaga中执行
```javascript
const iterator = saga(...args)  // 生成根节点生成器

// 根task生成
const task = proc(env, iterator, context, effectId, getMetaInfo(saga), /* isRoot */ true, undefined)
```

##### proc执行

```javascript 
// 生成主任务 每个proc都有主任务，主任务之间又有子父级关系
const mainTask = { meta, cancel: cancelMain, status: RUNNING }
const task = newTask(env, mainTask, parentContext, parentEffectId, meta, isRoot, cont)
```
上下文处理

```javascript

  // 用于新开任务作为继承关系
  const executingContext = {
    task,
    digestEffect,
  }
```
执行next() ```next()```,执行根节点```iterator.next()```,

##### 获取put effect

执行```result = iterator.next(arg)```，此时获取到的effect为result.value
```javascript 
// effect

effect = {
  @@redux-saga/IO: true,
  combinator: false,
  payload: {
    context: null,
    action: {
      type: 'INCREMENT'
      @@redux-saga/SAGA_ACTION: true
    },
    type: 'PUT'
  }
}

// result
result = {
  done: false,
  value: effect
}
```

##### done=false,所以执行digestEffect 分解effect

定义currCb，currCb的执行顺带触发cb执行，也就是task的next

```javascript

    finalRunEffect = runEffect => runEffect // 这个可以当做没做啥

    function currCb(res, isErr) {
      if (effectSettled) {
        return
      }

      effectSettled = true // 先打标记effect的处理为完成
      cb.cancel = noop // defensive measure
      if (env.sagaMonitor) {
        if (isErr) {
          env.sagaMonitor.effectRejected(effectId, res)
        } else {
          env.sagaMonitor.effectResolved(effectId, res)
        }
      }

      if (isErr) {
        sagaError.setCrashedEffect(effect)
      }

      cb(res, isErr) // 响应task的next
    }
```


##### 执行runEffect

当前put的effect不是迭代器，匹配的分解器是runPutEffect

```javascript
function runPutEffect(env, { channel, action, resolve }, cb) {
  asap(() => {
    let result
    try {
      // 没有channel，调用的env.dispatch,触发redux的dispatch效果
      // 所以 可以说put()和redux的dispatch效果类似
      result = (channel ? channel.put : env.dispatch)(action)
    } catch (error) {
      cb(error, true)
      return
    }

    if (resolve && is.promise(result)) {
      resolvePromise(result, cb)
    } else {
      cb(result)
    }
  })
}
```

##### env.dispatch之后，经过saga中间件

channel收集action,尝试匹配take注册的callback，如果有 调出执行
```javascript
    return next => action => {
      if (sagaMonitor && sagaMonitor.actionDispatched) {
        sagaMonitor.actionDispatched(action)
      }
      const result = next(action) // hit reducers
      channel.put(action) // channel收集action,
      return result
    }
    
    // 尝试匹配
    put(input) {

      if (closed) {
        return
      }

      if (isEnd(input)) {
        close()
        return
      }

      const takers = (currentTakers = nextTakers)

      for (let i = 0, len = takers.length; i < len; i++) {
        const taker = takers[i]
        // 根据正则匹配到的callback接力处理
        if (taker[MATCH](input)) {
          taker.cancel()
          taker(input)
        }
      }
    },

```


#### take effect

这个比较简单 核心逻辑就是往channel匹配已经注册的action，且找出对应的handler处理响应,主流程与前面put类似，执行到runEffexct时，执行runTakeEffect

```javascript
function runTakeEffect(env, { channel = env.channel, pattern, maybe }, cb) {
  // 设置callback
  const takeCb = input => {
    if (input instanceof Error) {
      cb(input, true)
      return
    }
    if (isEnd(input) && !maybe) {
      cb(TERMINATE)
      return
    }
    cb(input)
  }
  try {
    channel.take(takeCb, is.notUndef(pattern) ? matcher(pattern) : null)
  } catch (err) {
    cb(err, true)
    return
  }
  cb.cancel = takeCb.cancel
}

    // channel队列中push进已配置好的taker  等待put触发
    take(cb, matcher = matchers.wildcard) {
      if (process.env.NODE_ENV !== 'production') {
        checkForbiddenStates()
      }
      if (closed) {
        cb(END)
        return
      }
      cb[MATCH] = matcher
      ensureCanMutateNextTakers()
      nextTakers.push(cb)

      cb.cancel = once(() => {
        ensureCanMutateNextTakers()
        remove(nextTakers, cb)
      })
    },
```

### todo
 1. takeEvery
 2. fork
 3. ...
 
### 结尾

写了有点累有点模糊，如果有人评论需要更完整 更有条理的解析，我就整理