import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './icons'
// import './mock'
import './plugins/element.js'
import * as filters from './utils/filters'

import '@/styles/index.scss' //全局样式

import '@/permission' // permission control

// 注册过滤器
Object.keys(filters).forEach(key => Vue.filter(key, filters[key]))

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
