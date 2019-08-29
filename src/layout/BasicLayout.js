import React, { Component } from 'react';
import { connect } from "react-redux";

/**本页需要的普通组件 */
import { Layout } from 'antd';
import Menu from '../component/Menu'
import Header from '../component/Header'
import "./BasicLayout.scss";




const { Content, Footer} = Layout;



// @connect(
//   state => ({
//     userinfo: state.app.userinfo
//   })
// )

export default class AppContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      collapsed: false
    }
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    })
  }

  render(h) {
    return(
      <Layout>
        <Menu
          collapsed={this.state.collapsed}
        ></Menu>
        <Layout>
          <Header
            collapsed={this.state.collapsed}
            onToggle={this.toggle}
          ></Header>
          <Content style={{ margin: '24px 16px 0' }}>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>content</div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
    )
    
  }
}
