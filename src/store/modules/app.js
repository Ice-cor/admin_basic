import Cookies from 'js-cookie'
import { getRoleList, getMangerMenu } from '@/api'

const app = {
  state: {
    sidebar: {
      // opened: !+Cookies.get('sidebarStatus'),
      opened: true,
      withoutAnimation: false
    },
    device: 'desktop',
    // 是否要缓存页面，默认不缓存
    cachePage: true,
    // 已经打开的页面
    openedPageList: [],
    // 缓存的页面
    cachedPageName: [],
    // 角色列表
    roleList: [],
    // 菜单列表
    menusList: [],
    //chart数据
    chartData: {}
  },
  mutations: {
    TOGGLE_SIDEBAR: state => {
      /*if (state.sidebar.opened) {
        Cookies.set('sidebarStatus', 1)
      } else {
        Cookies.set('sidebarStatus', 0)
      }*/
      state.sidebar.opened = !state.sidebar.opened
      state.sidebar.withoutAnimation = false
    },
    CLOSE_SIDEBAR: (state, withoutAnimation) => {
      // Cookies.set('sidebarStatus', 1)
      state.sidebar.opened = false
      state.sidebar.withoutAnimation = withoutAnimation
    },
    TOGGLE_DEVICE: (state, device) => {
      state.device = device
    },
    ADD_TAG: (state, data) => {
      // console.log(state.cachedPageName, 'state.cachedPageName')
      if (state.openedPageList.some(v => v.path === data.path)) {
        // console.log(state.openedPageList, 'pathpath')
        return
      }
      if (state.cachedPageName.includes(data.name)) {
        console.error(
          `${
            data.name
          } 组件出现命名重复，请检查组件中的name字段。当前组件所在的路由地址为：${
            data.path
          }`
        )
        return
      }
      state.openedPageList.push(data)
      if (state.cachePage) {
        state.cachedPageName.push(data.name)
      }
    },
    REMOVE_TAG: (state, data) => {
      if (data) {
        for (let [i, v] of state.openedPageList.entries()) {
          if (v.path === data.path) {
            state.openedPageList.splice(i, 1)
          }
        }
        if (state.cachePage) {
          let index = state.cachedPageName.indexOf(data.name)
          if (index >= 0) {
            state.cachedPageName.splice(index, 1)
          }
        }
      } else {
        state.openedPageList = []
        state.cachedPageName = []
      }
    },
    refreshPage: (state, data) => {
      if (state.cachePage) {
        // console.log(data, 'data')
        let index = state.cachedPageName.indexOf(data.name)
        if (index >= 0) {
          state.cachedPageName.splice(index, 1)
        }
      }
    },
    SET_ROLE_LIST: (state, data) => {
      state.roleList = data
      sessionStorage.setItem('roleList', JSON.stringify(data))
    },
    SET_MENUS_LIST: (state, data) => {
      state.menusList = data
      sessionStorage.setItem('menusList', JSON.stringify(data))
    },
    removeRoleList: (state, data) => {
      state.roleList = []
      sessionStorage.removeItem('roleList')
    },
    setChartData: (state, data) => {
      state.chartData = data
    }
  },
  actions: {
    ToggleSideBar: ({ commit }) => {
      commit('TOGGLE_SIDEBAR')
    },
    CloseSideBar({ commit }, { withoutAnimation }) {
      commit('CLOSE_SIDEBAR', withoutAnimation)
    },
    ToggleDevice({ commit }, device) {
      commit('TOGGLE_DEVICE', device)
    },
    addTagNav({ commit }, data) {
      commit('ADD_TAG', data)
    },
    removeTagNav({ commit }, data) {
      commit('REMOVE_TAG', data)
    },
    refreshPage({ commit }, data) {
      // commit('refreshPage', data)
      commit('REMOVE_TAG', data)
      commit('ADD_TAG', data)
    },
    roleList({ commit }, data) {
      return new Promise((resolve, reject) => {
        // 获取角色下拉列表
        if (this.getters.roleList.length === 0) {
          getRoleList()
            .then(res => {
              const data = res.data
              commit('SET_ROLE_LIST', data)
              resolve(data)
            })
            .catch(error => {
              reject(error)
            })
        } else {
          const data = this.getters.roleList
          resolve(data)
        }
      })
    },
    menusList({ commit }, data) {
      return new Promise((resolve, reject) => {
        const operatorId = this.getters.info.operatorId
        const token = this.getters.token
        // console.log(operatorId)
        if (this.getters.menusList.length === 0) {
          getMangerMenu(operatorId, token)
            .then(res => {
              const data = res.permissionList
              // console.log(res,'res')
              commit('SET_MENUS_LIST', data)
              resolve(data)
            })
            .catch(error => {
              reject(error)
            })
        } else {
          const data = this.getters.menusList
          resolve(data)
        }
      })
    },
    setChartData({ commit }, data) {
      commit('setChartData', data)
    }
  }
}

export default app
