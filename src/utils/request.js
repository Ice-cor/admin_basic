import axios from 'axios'
import { Message, MessageBox } from 'element-ui'
import store from '../store'

// 创建axios实例
const service = axios.create({
  baseURL: 'https://www.test.com/mock', // api的base_url
  timeout: 5000 // 请求超时时间
  // headers: {
  //   client_ip: '192.168.0.174'
  // }
})

// request拦截器
service.interceptors.request.use(
  config => {
    if (store.getters.token && config.method === 'post') {
      let dataObj = JSON.parse(config.data)
      dataObj.token = store.getters.token
      dataObj.operatorId = store.getters.info.operatorId
      config.data = JSON.stringify(dataObj)
      //每个请求加上token及operatorId
    }
    return config
  },
  error => {
    // Do something with request error
    console.log('request:' + error) // for debug
    Promise.reject(error)
  }
)

// respone拦截器
service.interceptors.response.use(
  response => {
    const data = response.data
    console.log(response, 'response')
    if (data.status != 0) {
      Message({
        message: data.des,
        type: 'error',
        duration: 5 * 1000
      })
      // -103:Token 过期了;
      if (data.status == '-103') {
        MessageBox.alert('登录已失效，请重新登录系统！', '提示', {
          showClose: false,
          center: true
        }).then(() => {
          store.dispatch('FedLogOut').then(() => {
            location.reload() // 为了重新实例化vue-router对象 避免bug
          })
        })
      }
      return Promise.reject('error')
    } else {
      return data
    }
  },
  error => {
    console.log('response:' + error) // for debug
    Message({
      message: '网络超时，请稍后再试',
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
