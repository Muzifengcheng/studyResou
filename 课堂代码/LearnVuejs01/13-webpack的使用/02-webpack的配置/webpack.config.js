const path=require('path')
module.exports={
    entry:'./src/main.js',
    output:{
        //join一般做相对路径，resolve做绝对路径
        path:path.resolve(__dirname,'dist'),  /* 动态的获取路径，用到node语法 ,得获取上面的node的path包*/
        filename:'bundle.js'
    },       /* ./dist/bundle.js 但一般不这样写 */
}