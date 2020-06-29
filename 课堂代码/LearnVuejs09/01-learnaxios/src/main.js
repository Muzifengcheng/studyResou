import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
//axios是框架，不是插件（vuex),不要用vue.use
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
/*
//axios它是支持promise的，可以直接写.then()  默认发送get请求
axios({
  url: 'http://123.207.32.32:8000/home/multidata',
  // method:'post'  //老师这里不支持post请求

}).then(res => {
  console.log(res)
})
//你想发送多个并发请求，同事到达之后再去做相应处理的话，axios已经提供了对应的api
axios({
  // url:'http://123.207.32.32:8000/home/data?type=sell&page=3'  方式一
  url: 'http://123.207.32.32:8000/home/data',//?type=sell&page=3这个参数嫌长的话用这个
  //专门针对get请求的参数拼接
  params: {
    type: 'pop',
    page: 1
  }

}).then(res => {
  console.log(res);
})
*/
//设置axios全局配置    自己用实例可以设置自己的配置（ipad图片上有)
axios.defaults.baseURL='http://123.207.32.32:8000'
axios.defaults.timeout=5000
//2.axios发送并发请求
//Promise.all()不用了，这里的axios.all可以对多个网络请求进行合并
axios.all([axios({
  url: '/home/multidata',
}), axios({
  url: '/home/data',
  params: {
    type: 'sell',
    page: 5
  }

})]).then(results => {
console.log(results)
})

//5.封装request模块
import {request}  from "./network/request";
//方式一
/* request({
  url:'/home/multidate'
},res=>{
  console.log(res)
},err=>{
  console.log(err)
}) */
//别人应该这样用，方式二
 
/* request({
  baseConfig:{

  },
  success:function(res){

  },
  failure:function(err){

  }
}) */

//最佳方式
request({
  url:'/home/multidata'

}).then(res=>{
  console.log(res)
}).catch(err=>{
  console.log(err)
})