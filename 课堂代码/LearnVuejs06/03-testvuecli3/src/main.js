import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')  //和了el:'#app'区别不大，一个意思，还是会执行.$mount('#app')
