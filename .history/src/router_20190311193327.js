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
      component: () => import('./views/museum/index.vue')
    } 
  ]
})
