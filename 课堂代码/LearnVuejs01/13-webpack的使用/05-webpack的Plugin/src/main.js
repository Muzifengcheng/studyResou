//使用commonjs模块化规范
const { add, mul } = require('./js/mathUtils.js')//.js可以省略
console.log(add(20, 30));
console.log(mul(20, 30));

// 导出的文件，到这里导入  ，使用ES6模块化规范
import { name, age, height } from "./js/info"

console.log(name)
console.log(age)
console.log(height)

//3.依赖css文件，将css文件也当成一个模块
require('./css/normal.css')
//4.依赖less文件
require('./css/special.less')
document.writeln('<h2>年后，一年</h>')

//5.使用Vue进行开发
import Vue from 'vue'
// import App from './vue/app'
import App from './vue/App.vue'

new Vue({//const app=  真实开发不用这个app,老师为了演示而已
    el: '#app',
    template: '<App/>',
    //这里template到时会替换div id=app哪里
    /*     template:'   恶心，开发也不用这样用 去main.js  const app={}
        <div>
        <h2>{{message}}</h2>
        <h2>{{name}}</h2>
        </div>
        ', */
    // data: {

    // },
    // methods: {

    // }
    components: {
        App
    }
})
