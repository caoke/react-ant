import React, { Component } from 'react';
import { Layout, Icon } from 'antd'


const {Header} = Layout

export default class HeaderContainer extends Component{
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <Header style={{ background: '#fff', padding: 0 }}>
        <Icon
          className="trigger"
          type={this.props.collapsed ? 'menu-unfold' : 'menu-fold'}
          onClick={this.props.onToggle}
        />
      </Header>
    )
  }
}


