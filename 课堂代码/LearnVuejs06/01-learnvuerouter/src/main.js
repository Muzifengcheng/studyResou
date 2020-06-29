import Vue from 'vue'
import App from './App'
import router from './router'
//导入是个目录，自动会找文件夹下的index文件，所以省略index.js
Vue.config.productionTip = false
//所有的组件都继承自vue类的原型Vue.prototype
Vue.prototype.test=function(){
  //意味着Vue多了一个test函数，所有的组件也会多了test方法，意味着可以在其他地方
  //test()方法

}
//Vue.prototype.$router='hahah'所有额组件的router都指向哈哈哈
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
console.log(router)
