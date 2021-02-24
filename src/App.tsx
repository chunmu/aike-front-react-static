import React from 'react';
import { Router, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Main from './Main';
import Year2021 from './views/year2021/Year2021';
import './App.css';


const history = createBrowserHistory();
function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Route exact path="/">
          <Main></Main>
        </Route>
        <Route exact path="/year2021">
          <Year2021></Year2021>
        </Route>
      </Router>
    </div>
  );
}

export default App;
