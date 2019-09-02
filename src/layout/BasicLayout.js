import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

/**本页需要的普通组件 */
import { Layout } from 'antd';
import Menu from './Menu'
import Header from './Header'
import Footer from './Footer'
import "./BasicLayout.scss";

// ==================
// 本页面所需action
// ==================
import {
  toggle
} from "../store/action/app-action";


const { Content } = Layout;


class AppContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {}
  }

  render(h) {
    const { toggle, collapsed } = this.props
    return(
      <Layout>
        <Menu
          collapsed={collapsed}
        ></Menu>
        <Layout>
          <Header
            collapsed={collapsed}
            onToggle={toggle}
          ></Header>
          <Content style={{ margin: '24px 16px 0' }}>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>content</div>
          </Content>
          <Footer></Footer>
        </Layout>
      </Layout>
    )
    
  }
}

function mapStateToProps(state){
  return state.app
}
function mapDispatchToProps(dispatch){
  return bindActionCreators({ toggle },dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(AppContainer)