import Vue from 'vue'
import VueRouter from 'vue-router'

import createRouter from './config/router.js'
import App from './app.vue'

import gloable from './assets/styles/global.css'

Vue.use(VueRouter)

const router = createRouter()

new Vue({
  router,
  render: (h) => h(App)
}).$mount('#root');