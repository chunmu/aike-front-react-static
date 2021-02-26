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

const BASE_URL = process.env.REACT_APP_BASE_URL

const history = createBrowserHistory();
function App() {
  return (
    <div className={styles.App}>
      <Router history={history}>
        <Route exact path={`${BASE_URL}/`} component={Empty}>
        </Route>
        <Route exact path={`${BASE_URL}/main`} component={Main}>
        </Route>
        <Route exact path={`${BASE_URL}/article`} component={ArticleList}>
        </Route>
        <Route exact path={`${BASE_URL}/article/:id`} component={Article}>
        </Route>
        <Route exact path={`${BASE_URL}/year2021`}>
          <Year2021></Year2021>
        </Route>
      </Router>
    </div>
  );
}

export default App;
