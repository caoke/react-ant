// store/index.js
/** 全局唯一数据中心 **/
import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk"; // 管理异步action的插件，为了使action中能够使用异步请求

import RootReducer from "./reducer";


// 创建所需的所有中间件
const middlewares = [];
// 加入需要的中间件
middlewares.push(ReduxThunk);

const store = createStore(RootReducer, applyMiddleware(...middlewares));

export default store;