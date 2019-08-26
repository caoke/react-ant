import React, { Component } from 'react';

/**本页需要的普通组件 */
import { Layout,Icon } from 'antd';
import Menu from '../component/Menu'
import "./BasicLayout.scss";


const { Header, Content, Footer} = Layout;
export default class AppContainer extends Component {

  state = {
    collapsed: false,
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  render(h) {
    return(
      <Layout>
        <Menu
          collapsed={this.state.collapsed}
        ></Menu>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }} > 
            <Icon
                className="trigger"
                type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                onClick={this.toggle}
              />
          </Header>
          <Content style={{ margin: '24px 16px 0' }}>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>content</div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
    )
    
  }
} 