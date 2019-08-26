import React from 'react'
import { Router, Route, Switch } from "react-router-dom";
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import { createHashHistory as createHistory } from "history"; // 锚点模式的history

/**本页面需要的路由 */
import BasicLayout from '../layout/BasicLayout.js';
// import About from '../pages/about'

const history = createHistory();

export default class RouterContainer extends React.Component {


  onEnter(Component, props) {
    return <Component {...props}></Component>
  }

  render() {
    return(
      <Router history={history}>
        <Route render={props => {
          return(
            <Switch>
              <Route path="/" render={props => this.onEnter(BasicLayout, props)}></Route>
            </Switch>
          )
        }}></Route>
      </Router>
    );
  }
  
}
