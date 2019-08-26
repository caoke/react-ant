import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

const RootReducer = combineReducers({
  // 注意一定要加上routing: routerReducer 这是用于redux和react-router的连接
  routing: routerReducer,
});

export default RootReducer;