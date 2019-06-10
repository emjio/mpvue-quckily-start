import Vue from 'vue'
import App from './App'
import store from './store'
import api from './fecth/api'
Vue.config.productionTip = false
App.mpType = 'app'
Vue.prototype.$store = store
Vue.prototype.$api = api

const app = new Vue({
  ...App,
  store
})
app.$mount()
