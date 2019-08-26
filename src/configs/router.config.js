import React from 'react'
// import { Router, Route, Link } from 'react-router'
import { Router, Route, Switch } from "react-router-dom";
import { createHashHistory as createHistory } from "history"; // 锚点模式的history

import App from '../pages/app'
import About from '../pages/about'

const history = createHistory();

export default() => (
  <Router history={history}>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/about" component={About} />
    </Switch>
  </Router>
)
