/** 全局唯一数据中心 **/
import { createStore, applyMiddleware } from "redux";

import RootReducer from "./reducer";


// 创建所需的所有中间件
const middlewares = [];

const store = createStore(RootReducer, applyMiddleware(...middlewares));

export default store;