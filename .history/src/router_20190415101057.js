import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: () => import('./views/home.vue')
    },
    {
      path: '/3d',
      component: () => import('./views/3d.vue')
    },
    {
      path: '/choose',
      component: () => import('./views/choose.vue')
    },
    {
      path: '/detail',
      component: () => import('./views/detail.vue')
    },
    {
      path: '/reliclist',
      component: () => import('./views/RelicList.vue')
    },
    {
      path: '/relic/relic-detils',
      component: () => import('./views/relic/relic-detils.vue')
    },
    {
      path: '/user',
      component: () => import('./views/userInfo.vue')
    },
    {
      path: '/relic/relicinfo',
      component: () => import('./views/relic/relicinfo.vue')
    },
    {
      path: '/DGMU1302',
      component: () => import('./views/DGMU1302.vue')
    },
    {
      path: '/DGMU1303',
      component: () => import('./views/DGMU1303.vue')
    },
    {
      path: '/museum/DGMU1308',
      component: () => import('./views/museum/DGMU1308.vue')
    },
    {
      path: '/museum/DGMU1309',
      component: () => import('./views/museum/DGMU1309.vue')
    },
    {
      path: '/login',
      component: () => import('./views/login.vue')
    },
    {
      path: '/regist',
      component: () => import('./views/regist.vue')
    }
  ]
})
