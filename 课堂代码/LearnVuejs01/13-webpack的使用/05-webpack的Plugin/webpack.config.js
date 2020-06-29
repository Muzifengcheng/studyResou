const path=require('path')
// 搞版权显示
const webpack=require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const UglifyjsWebpackPlugin=require('uglifyjs-webpack-plugin')
module.exports={
    entry:'./src/main.js',
    output:{
        //join一般做相对路径，resolve做绝对路径
        path:path.resolve(__dirname,'dist'),  /* 动态的获取路径，用到node语法 ,得获取上面的node的path包*/
        filename:'bundle.js',
        // publicPath:'dist/'
    },       /* ./dist/bundle.js 但一般不这样写 */

    module:{
        rules:[
            {
                //\.转义，$结尾，下面是正则表达式
                test:/\.css$/,
     //css.loader只负责将css文件进行加载，展示样式要 style.loader(npm install style-loader --save-dev)
     //style-loader负责将样式添加到DOM中
     //使用多个loader时，是从右向左读取，顺序不能反
                use:['style-loader','css-loader']
            },
            {
                test: /\.less$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "less-loader" // compiles Less to CSS
                }]
            },
            {
                test: /\.(png|jpg|gif|jpeg)$/,
                use: [
                  {
                    loader: 'url-loader',
                    options: {
                        //当加载的图片，小于limit时，会将图片编译成base64字符串格式
                        //当加载的图片，大于limit时，需要安装file-loader模块进行加载

                      limit: 13000,
                    name:'img/[name].[hash:8].[ext]'  /* img/name会把所有的当成name.png  */

                    },
                  }
                ]
              },
              {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: ['es2015']
                  }
                }
              },
              {
                test: /\.vue$/,
                use: ['vue-loader']
              }
            
        ]
    },
    resolve:{
      extensions:['.js','.css','.vue'],
      alias:{//别名
        'vue$':'vue/dist/vue.esm.js'

      }
    },
    plugins:[
      new webpack.BannerPlugin('最终版权归aaa所有'),
      new HtmlWebpackPlugin({
        template:'index.html'
      }),
      new UglifyjsWebpackPlugin()
    ],
    devServer:{
      contentBase:'./dist',
      inline:true,
    }
    
}