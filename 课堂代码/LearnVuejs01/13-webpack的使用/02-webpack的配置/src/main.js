//使用commonjs模块化规范
const {add,mul} = require('./mathUtils.js')//.js可以省略
console.log(add(20,30));
console.log(mul(20,30));

// 导出的文件，到这里导入  ，使用ES6模块化规范
import {name,age,height} from "./info"

console.log(name)
console.log(age)
console.log(height)