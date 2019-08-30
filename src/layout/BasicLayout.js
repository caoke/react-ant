import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

/**本页需要的普通组件 */
import { Layout } from 'antd';
import Menu from '../component/Menu'
import Header from '../component/Header'
import "./BasicLayout.scss";


// ==================
// 本页面所需action
// ==================

import {
  toggle
} from "../store/action/app-action";


const { Content, Footer} = Layout;


class AppContainer extends Component {

  constructor(props) {
    super(props)
    // this.state = {
    //   collapsed: false
    // }
  }

  onToggle = () => {
    // this.setState({
    //   collapsed: !this.state.collapsed
    // })
    this.props.actions.toggle()
  }

  render(h) {
    const { toggle } = this.props
    return(
      <Layout>
        <Menu
          collapsed={this.props.collapsed}
        ></Menu>
        <Layout>
          <Header
            collapsed={this.props.collapsed}
            onToggle={toggle}
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

function mapStateToProps(state){
  return state.app
}
function mapDispatchToProps(dispatch, ownProps){
  return bindActionCreators({ toggle },dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(AppContainer)