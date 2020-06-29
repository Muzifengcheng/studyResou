import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,//Vue.prototype.$store=store,所用组件都可以用了
  render: h => h(App)
})
