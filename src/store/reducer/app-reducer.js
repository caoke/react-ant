const initState = {
  collapsed: false
}

const actDefault = state => state;

const toggle = (state, {}) => {
  return {
    collapsed: !state.collapsed
  }
}

const reducerFn = (state = initState, action) => {
  switch (action.type) {
    case "APP.toggle": // 折叠菜单
      return toggle(state, action);
    default:
      return actDefault(state, action);
  }
};

export default reducerFn;