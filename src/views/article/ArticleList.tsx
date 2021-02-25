import React from 'react';
import { List, Avatar } from 'antd';
import { Link } from 'react-router-dom';
import reduxSaga from '../../assets/images/redux-saga.png';
import avatar from '../../assets/images/avatar.jpeg';
import styles from './ArticleList.module.less';

console.log(avatar)
interface ArticleItem {
   title: string,
   id: string,
   description: string,
}

interface State {
  list: ArticleItem[],
}



class Article extends React.Component<State> {
  state = {
    list: [
      {
        title: 'redux-saga源码阅读解析分享',
        id: 'redux-saga',
        description: '对redux-thunk不熟悉，网络上偏向saga的更多，所以采用了redux-saga作为接合redux的异步解决方案，顺便阅读该项目源码，了解内部原理，需要前置知识redux&生成器函数基础，后续会出redux的源码解读，不定时间.'
      },
      {
        title: 'redux-saga源码阅读解析分享',
        id: 'redux-saga2',
        description: '对redux-thunk不熟悉，网络上偏向saga的更多，所以采用了redux-saga作为接合redux的异步解决方案，顺便阅读该项目源码，了解内部原理，需要前置知识redux&生成器函数基础，后续会出redux的源码解读，不定时间.'
      },
      {
        title: 'redux-saga源码阅读解析分享',
        id: 'redux-saga3',
        description: '对redux-thunk不熟悉，网络上偏向saga的更多，所以采用了redux-saga作为接合redux的异步解决方案，顺便阅读该项目源码，了解内部原理，需要前置知识redux&生成器函数基础，后续会出redux的源码解读，不定时间.'
      },
      {
        title: 'redux-saga源码阅读解析分享',
        id: 'redux-saga4',
        description: '对redux-thunk不熟悉，网络上偏向saga的更多，所以采用了redux-saga作为接合redux的异步解决方案，顺便阅读该项目源码，了解内部原理，需要前置知识redux&生成器函数基础，后续会出redux的源码解读，不定时间.'
      }
    ],
  };

  render() {
    
    return (
      <div className={styles.articleListContainer}>
        <div className={styles.articleList}>
        <List
          itemLayout="vertical"
          size="small"
          dataSource={this.state.list}
          renderItem={(item: ArticleItem) => (
            <List.Item
              key={item.id}
              // actions={[
              //   <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
              //   <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
              //   <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
              // ]}
              extra={
                <img
                  width={272}
                  alt="logo"
                  src={reduxSaga}
                />
              }
            >
              <List.Item.Meta
                avatar={<Avatar src={avatar} />}
                title={
                  <Link to={`/article/${item.id}`}>
                    {item.title}
                  </Link>
                }
                description={item.description}
              />
            </List.Item>
          )}
        />
        </div>
      </div>
    );
  }
}

export default Article;
