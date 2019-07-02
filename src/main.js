import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './icons'
import './mock'
import './plugins/element.js'
import api from '@/api'

import '@/styles/index.scss' //全局样式

import '@/permission' // permission control

Vue.config.productionTip = false

Vue.prototype.$api = api; // 将api挂载到vue的原型上

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
