import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/museum',
      component: () => import('./views/museum/index.vue'),
      redirect: '/museum/home',
      children: [
        {
          path: 'home',
          component: () => import('./views/home.vue')
        },
      ]
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
      path: '/relic',
      component: () => import('./views/relic/relic-detils.vue')
    },
    {
      path: '/user',
      component: () => import('./views/userInfo.vue')
    },
    {
      path: '/relicinfo',
      component: () => import('./views/relic/relicinfo.vue')
    }
  ]
})
