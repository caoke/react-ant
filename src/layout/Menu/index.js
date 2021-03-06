import React from 'react';
import { Layout, Menu, Icon } from 'antd'

import { Link } from "react-router-dom";

const {Sider } = Layout

export default class MenuContainer extends React.Component{

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
        <Sider
          breakpoint="lg"
          collapsedWidth="80"
          collapsible
          trigger={null}
          collapsed={this.props.collapsed}
        >
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
            <Menu.Item key="1">
              <Link to="/home">
                <Icon type="home" />
                <span className="nav-text">首页</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/list">
                <Icon type="database" />
                <span className="nav-text">列表</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="upload" />
              <span className="nav-text">nav 3</span>
            </Menu.Item>
            <Menu.Item key="4">
              <Icon type="user" />
              <span className="nav-text">nav 4</span>
            </Menu.Item>
          </Menu>
        </Sider>
    )
  }
}