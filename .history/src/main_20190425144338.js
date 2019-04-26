import Vue from 'vue'
import MintUI from 'mint-ui'
import Vuesax from 'vuesax'
import 'vuesax/dist/vuesax.css'
import 'mint-ui/lib/style.css'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/styles/icon.css'
import i18n from './lang'
import './assets/styles/global.scss'
import './assets/styles/transition.scss'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import './lib/mui/css/mui.min.css'
import VuePreview from 'vue-preview'
import animated from 'animate.css'

Vue.use(animated)
Vue.use(Vuesax)
Vue.use(VuePreview)
Vue.use(MintUI)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
