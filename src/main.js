// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import routes from './router/router'
import store from './store/'
import YDUI from 'vue-ydui'
import 'vue-ydui/dist/ydui.rem.css'

// 引入mockjs
import './api/mock.js'

// 引入WeChat-title
Vue.use(require('vue-wechat-title'))
// 使用YDUI
Vue.use(YDUI)

Vue.use(VueRouter)

const router = new VueRouter({
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      if (from.meta.keepAlive) {
        from.meta.savedPosition = document.body.scrollTop
      }
      return { x: 0, y: to.meta.savedPosition || 0 }
    }
  }
})

router.beforeEach((to, from, next) => {
  // to and from are Route Object,next() must be called to resolve the hook}
  store.commit('CHANGE_LOADING', true)
  next()
})

router.afterEach(route => {
  // these hooks do not get a next function and cannot affect the navigation}
  store.commit('CHANGE_LOADING', false)
})

FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  store
}).$mount('#app')
