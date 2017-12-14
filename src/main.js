// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import routes from './router/router'
import 'vue-ydui/dist/ydui.base.css'

// 引入mockjs
import './api/mock.js'
Vue.use(require('vue-wechat-title'))
Vue.use(VueRouter)

// const routes = [{
//   path: '/',
//   component: Home
// }]

const router = new VueRouter({
  routes
})

FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router
}).$mount('#app')
