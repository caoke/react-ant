import React, { Component } from 'react';
import { Layout, Icon } from 'antd'


const {Header} = Layout

export default class HeaderContainer extends Component{
  constructor(props) {
    super(props);
    this.state = {}
  }

  /** 点击左侧按钮时触发 **/
  toggle = () => {
    this.props.onToggle(); // 父组件的函数
  };

  render() {
    return (
      <Header style={{ background: '#fff', padding: 0 }}>
        <Icon
          className="trigger"
          type={this.props.collapsed ? 'menu-unfold' : 'menu-fold'}
          onClick={this.toggle}
        />
      </Header>
    )
  }
}


