import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'
//网上处理点两次路由报错的问题，下面代码在Vue.use(Router)就行了
/* const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this.location).catch(err => err)
} 跳不了了*/

//1.安装插件
Vue.use(Router)

/*
export default new Router({
  routes: [
    {
      path: '/',
      // name: 'HelloWorld',
      // component: HelloWorld
    }
  ]
})*/
//懒加载式导入
const Home = () => import('../views/home/Home')
const Category = () => import('../views/category/Category')
const Cart = () => import('../views/cart/Cart')
const Profile = () => import('../views/profile/Profile')


//2.创建路由对象
const router = new Router({
  routes: [
    {
      path: '',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/category',
      component: Category
    },
    {
      path: '/cart',
      component: Cart
    },
    {
      path: '/profile',
      component: Profile
    },

  ],
  mode: 'history'
})
//3.导出router
export default router