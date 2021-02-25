import React from 'react';
import { Router, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Main from './views/main/Main';
import Empty from './Empty';
import Year2021 from './views/year2021/Year2021';
import Article from './views/article/Article';
import ArticleList from './views/article/ArticleList';
import 'antd/dist/antd.css';
import styles from  './App.module.less';

const history = createBrowserHistory();
function App() {
  return (
    <div className={styles.App}>
      <Router history={history}>
        <Route exact path="/aike-front-react-static" component={Empty}>
        </Route>
        <Route exact path="/aike-front-react-static/main" component={Main}>
        </Route>
        <Route exact path="/aike-front-react-static/article" component={ArticleList}>
        </Route>
        <Route exact path="/aike-front-react-static/article/:id" component={Article}>
        </Route>
        <Route exact path="/aike-front-react-static/year2021">
          <Year2021></Year2021>
        </Route>
      </Router>
    </div>
  );
}

export default App;
