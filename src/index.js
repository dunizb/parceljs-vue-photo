import Vue from 'vue'
import VueRouter from 'vue-router'
// import fastclick from 'fastclick'
// import VueLazyload from 'vue-lazyload'

import createRouter from './config/router.js'
import App from './app.vue'

import gloable from './assets/styles/global.css'

Vue.use(VueRouter)


// Vue.use(VueLazyload, {
//   loading: require('./common/loading.gif')
// })

// fastclick.attach(document.body)

const router = createRouter()

new Vue({
  el: '#root',
  router,
  render: (h) => h(App)
});