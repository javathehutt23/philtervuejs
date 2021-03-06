import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/styles.css'
import ApiRequest from './classes/ApiRequest'
import axios from 'axios'

Vue.prototype.$http = axios
Vue.prototype.$request = ApiRequest

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
