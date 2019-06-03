function keepStorage(state, key) {
  if (!state[key]) {
    state[key] =
      JSON.parse(sessionStorage.getItem(key)) !== null
        ? JSON.parse(sessionStorage.getItem(key))
        : ''
  } else if (Array.isArray(state[key]) && state[key].length === 0) {
    state[key] =
      JSON.parse(sessionStorage.getItem(key)) !== null
        ? JSON.parse(sessionStorage.getItem(key))
        : []
  } else if (Object.keys(state[key]).length === 0) {
    state[key] =
      JSON.parse(sessionStorage.getItem(key)) !== null
        ? JSON.parse(sessionStorage.getItem(key))
        : {}
  } else if (key == 'routers' && state[key].length === 5) {
    state[key] = JSON.parse(sessionStorage.getItem(key))
  }
  return state[key]
}

const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  chartData: state => state.app.chartData,
  roleList: state => keepStorage(state.app, 'roleList'),
  menusList: state => keepStorage(state.app, 'menusList'),
  token: state => keepStorage(state.user, 'token'),
  info: state => keepStorage(state.user, 'info'),
  avatar: state => state.user.avatar,
  routers: state => state.user.routers,
  addRouters: state => state.user.addRouters
}

export default getters
