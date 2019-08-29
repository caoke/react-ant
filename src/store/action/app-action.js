/**
  一些公共的action可以写在这里，比如用户登录、退出登录、权限查询等
  其他的action可以按模块不同，创建不同的js文件
**/

/** 折叠菜单 **/
export const toggle = () => async dispatch => {
  dispatch({
    type: "APP.toggle",
    payload: null
  });
};