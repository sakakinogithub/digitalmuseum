import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/styles/icon.css'
import i18n from './lang'
import './assets/styles/global.scss'
import './assets/styles/transition.scss'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import './mock'
import Mint from 'mint-ui'

Vue.config.productionTip = false

new Vue({
  Mint,
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
