import React, { Component } from 'react';
import { connect } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";
import { bindActionCreators } from "redux";
import Loadable from "react-loadable"; // 代码分隔

/**本页需要的普通组件 */
import { Layout } from 'antd';
import Menu from './Menu'
import Header from './Header'
import Footer from './Footer'
import Loading from '../component/Loading'
import "./BasicLayout.scss";

// ==================
// 本页面所需action
// ==================
import {
  toggle
} from "../store/action/app-action";

// ==================
// 路由
// ==================
const [Home, List] = [
  () => import(`../pages/Home`),
  () => import('../pages/List')
].map(item => {
  return Loadable({
    loader: item,
    loading: Loading
  });
});

const { Content } = Layout;

// redux通信方案二
// function mapStateToProps(state){
//   return state.app
// }
// function mapDispatchToProps(dispatch){
//   return bindActionCreators({ toggle },dispatch)
// }
// @connect(mapStateToProps, mapDispatchToProps) //还可以添加其他装饰器,装饰器会由里之外的顺序执行

// redux通信方案三
@connect(
  state => ({
    collapsed: state.app.collapsed
  }),
  dispatch => ({
    actions: bindActionCreators({ toggle }, dispatch)
  })
)
class AppContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render(h) {
    const { collapsed, actions } = this.props
    return(
      <Layout>
        <Menu
          collapsed={collapsed}
        ></Menu>
        <Layout>
          <Header
            collapsed={collapsed}
            onToggle={actions.toggle}
          ></Header>
          <Content style={{ margin: '24px 16px 0' }}>
            {/* <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>content</div> */}
            <Switch>
              <Redirect exact from="/" to="/about" />
              <Route exact path="/home" component={Home} />
              <Route exact path="/list" component={List} />
            </Switch>
          </Content>
          <Footer></Footer>
        </Layout>
      </Layout>
    )
    
  }
}

// redux通信方法一
// function mapStateToProps(state){
//   return state.app
// }
// function mapDispatchToProps(dispatch){
//   return bindActionCreators({ toggle },dispatch)
// }
// export default connect(mapStateToProps,mapDispatchToProps)(AppContainer)

export default AppContainer
