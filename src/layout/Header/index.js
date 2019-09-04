import React, { Component } from 'react';
import { Layout, Icon, Breadcrumb  } from 'antd'

import './index.scss'

const { Header } = Layout

export default class HeaderContainer extends Component{
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <Header className="header-container" style={{ background: '#fff', padding: 0 }}>
        <Icon
          className="trigger"
          type={this.props.collapsed ? 'menu-unfold' : 'menu-fold'}
          onClick={this.props.onToggle}
        />

        <Breadcrumb>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>
            <a href="">Application Center</a>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <a href="">Application List</a>
          </Breadcrumb.Item>
          <Breadcrumb.Item>An Application</Breadcrumb.Item>
        </Breadcrumb>
      </Header>
    )
  }
}


