import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export let constantRouterMap = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/errorPage/404'),
    hidden: true
  },
  {
    path: '/',
    redirect: '/home',
    component: () => import('@/views/layout/Layout'),
    hidden: true,
    children: [
      {
        path: '/home',
        name: 'home',
        meta: {
          title: '首页'
        },
        component: () => import('@/views/home/index')
      },
      // {
      //   path: '/401',
      //   component: () => import('@/views/errorPage/401'),
      //   hidden: true
      // }
    ]
  }
]

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({
    y: 0
  }),
  routes: constantRouterMap
})
