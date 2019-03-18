import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/museum'
    },
    {
      path: '/museum',
      component: () => import('./views/museum/index.vue'),
      redirect: '/museum/home',
      children: [
        {
          path: 'home',
          component: () => import('./views/museum/MuseumHome.vue')
        }
      ]
    },
    {
      path: '/home',
      component: () => import('./views/home.vue')
    }
    {
      path: '/3d',
      component: () => import('./views/3d.vue')
    }
  ]
})
