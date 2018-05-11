import Vue from 'vue'
import VueRouter from 'vue-router'

import createRouter from './config/router.js'
import App from './app.vue'

import './assets/styles/global.css'

Vue.use(VueRouter)

const router = createRouter()

new Vue({
  el: '#root',
  router,
  render: (h) => h(App)
});