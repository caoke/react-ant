import React, { Component } from 'react';
import ImgLogo from '../../assets/image/logo.svg'

import "./index.scss"

export default class HomePageContainer extends Component{
  render() {
    return(
      <div className="page home">
        <div className="box">
          <img src={ImgLogo}/>
          <div className="title">
            React-antd
          </div>
          <div className="info">
            标准React+Redux分层结构，react16、router4、antd3、webpack4、ES6+
          </div>
        </div>
      </div>
    )
  }
}