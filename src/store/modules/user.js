// import { login, outLogin, getInfo, getMenus } from '@/api'
import api from '@/api'
// import { getToken, setToken, removeToken } from '@/utils/auth'
import { constantRouterMap, asyncRouterMap } from '@/router'
import axios from 'axios'

const { outLogin,login,getMenus } = api.system

function hasPermission(roles, route) {
  if (route.meta && route.meta.role) {
    return roles.some(role => route.meta.role.indexOf(role) >= 0)
  } else {
    return true
  }
}

function filterAsyncRouter(asyncRouterMap, roles) {
  const accessedRouters = asyncRouterMap.filter(route => {
    if (hasPermission(roles, route)) {
      if (route.children && route.children.length) {
        route.children = filterAsyncRouter(route.children, roles)
      }
      return true
    }
    return false
  })
  return accessedRouters
}

const user = {
  state: {
    token: '',
    info: {},
    avatar: '',
    routers: constantRouterMap,
    addRouters: []
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
      sessionStorage.setItem('token', JSON.stringify(token))
    },
    SET_INFO: (state, data) => {
      state.info = data
      sessionStorage.setItem('info', JSON.stringify(data))
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar
    },
    SET_ROUTERS: (state, routers) => {
      state.addRouters = routers
      sessionStorage.setItem('addRouters', JSON.stringify(routers))
      // console.log(constantRouterMap)
      state.routers = constantRouterMap.concat(routers)
      sessionStorage.setItem('routers', JSON.stringify(state.routers))
    }
  },

  actions: {
    // 登录
    Login({ commit }, userInfo) {
      const username = userInfo.username.trim()
      return new Promise((resolve, reject) => {
        login(username, userInfo.password).then(res => {
            const data = res
            if (data.status == 0 && data.token) {
              commit('SET_TOKEN', data.token)
              commit('SET_INFO', data.operatorInfo)
            }
            setTimeout(() => {
              resolve()
            }, 1000)
            //模拟接口数据返回延迟
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    //获取管理员信息
    // GetoOperatorInfo({ commit, state }) {
    //   return new Promise((resolve, reject) => {
    //     getInfo().then(res => {
    //       const data = res.operatorInfo
    //       commit('SET_INFO', data)
    //       resolve(data)
    //     }).catch(error => {
    //       reject(error)
    //     })
    //   })
    // },
    // 获取用户信息
    GetInfo({ commit, state }) {
      return new Promise((resolve, reject) => {
        getInfo()
          .then(res => {
            const data = res.operatorInfo
            commit('SET_INFO', data)
            resolve(data)
          })
          .catch(error => {
            reject(error)
          })
      })
    },

    // 获取菜单
    GenerateRoutes({ commit }, data) {
      return new Promise(resolve => {
        const hiddenWhite = [] //不在菜单栏显示
        const operatorId = this.getters.info.operatorId
        const token = this.getters.token

        getMenus(operatorId,token).then(res => {
            const data = res.operatorInfo.menus
            let menus = data.map(item => {
              return {
                path: `/${item.name}`,
                name: item.name,
                component: resolve =>
                  require(['@/views/layout/Layout'], resolve),
                redirect: `/${item.name}/${
                  item.items && item.items.length > 0 ? item.items[0].name : ''
                }`,
                meta: { title: item.text, icon: item.icon },
                children: item.items.map(obj => {
                  return {
                    path: obj.name,
                    name: obj.name,
                    hidden: hiddenWhite.includes(obj.name),
                    meta: { title: obj.text },
                    component: resolve =>
                      require([`@/views/${item.name}/${obj.name}`], resolve)
                  }
                })
              }
            })
            menus.push({ path: '*', redirect: '/404', hidden: true })
            commit('SET_ROUTERS', menus)
            resolve(menus)
          })
      })
    },

    // 登出
    LogOut({ commit }) {
      return new Promise((resolve, reject) => {
        outLogin()
          .then(() => {
            commit('SET_TOKEN', '')
            commit('SET_INFO', {})
            commit('SET_ROUTERS', [])
            sessionStorage.clear()
            // removeToken()
            resolve()
          })
          .catch(error => {
            reject(error)
          })
      })
    },

    // 前端 登出
    FedLogOut({ commit }) {
      return new Promise(resolve => {
        commit('SET_TOKEN', '')
        commit('SET_INFO', {})
        commit('SET_ROUTERS', [])
        sessionStorage.clear()
        resolve()
      })
    }
  }
}

export default user
