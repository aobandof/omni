import Vue from 'vue'
import App from './App'

import VueResource from 'vue-resource'
Vue.use(VueResource)
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import Sku from './components/Sku'
import User from './components/User'

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      component: User
    },
    {
      path: '/sku',
      component: Sku
    }
  ]
})


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
