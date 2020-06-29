//使用commonjs模块化规范
const {add,mul} = require('./js/mathUtils.js')//.js可以省略
console.log(add(20,30));
console.log(mul(20,30));

// 导出的文件，到这里导入  ，使用ES6模块化规范
import {name,age,height} from "./js/info"

console.log(name)
console.log(age)
console.log(height)

//3.依赖css文件，将css文件也当成一个模块
require('./css/normal.css')
//4.依赖less文件
require('./css/special.less')
document.writeln('<h2>年后，一年</h>')
