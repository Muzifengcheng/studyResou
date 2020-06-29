import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

/* import Home from '../components/Home'
import About from '../components/About'
import User from '../components/User' */
//若用懒加载的方式
const Home = () => import('../components/Home')
const HomeNews = () => import('../components/HomeNews')
const HomeMessage = () => import('../components/HomeMessage')

const About = () => import('../components/About')
const User = () => import('../components/User')
const Profile = () => import('../components/Profile')


Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      //redirect重定向，或上面'',下面'/home'
      redirect: '/home'//我们设置默认路由，默认显示首页，不用让用户点击首页再显示
    },
    {
      // path: '/',
      // name: 'HelloWorld',
      // component: HelloWorld
      //完整的url，协议头：//host/query，，，我路径上只有出现/home就显示component
      path: '/home',
      // component:() => import('../components/Home') 这样懒加载也行
      component: Home,
      meta: {
        title: '首页'
      },
      children: [
        //为了实现keep alive,组件的状态保留下来，先注释掉
  /*       { 
          path: '',
          redirect: 'news'
        }, */
        {
          path: 'news',//这里一定不加/,会自动加上的
          component: HomeNews
        },
        {
          path: 'message',
          component: HomeMessage
        },
      ]
    },
    {
      path: '/about',
      component: About,
      meta: {
        title: '关于'
      },
      //路由独享的守卫
      beforeEnter: (to, from, next) => {
        // console.log('about beforeEnter')
        next()
      }
    },
    {
      path: '/user/:abc',
      component: User,
      meta: {
        title: '用户'
      },
    },
    {
      path: '/profile',
      component: Profile,
      meta: {
        title: '档案'
      },
    }
  ],
  //模式，就是让url中#消失，好看点
  mode: 'history',
  //哪个button的激活，将类名改为active
  linkActiveClass: 'active'
})
router.beforeEach((to, from, next) => {
  //从from跳转到to//利用beforeEach钩子函数完成标题的更改具有普适性，不用每个页面加create的
  document.title = to.matched[0].meta.title;
  console.log(to);
  // console.log('++++++')
  // to and from are both route objects. must call `next`.
  next()
})
//后置钩子
router.afterEach((to, from) => {
   console.log("-------")
})
export default router


// export default new Router({

// })


//配置路由相关信息


//1.通过Vue.use(插件)，安装插件，任何插件都是这个步骤
/*当前没有Vue，所以要导入，
Vue.use(Router)//传入这个Router插件
//2.创建Router对象，类似于Vue
const router=new Router({
  这里还传入一些options
  //配置路由和组件之间的映射关系
  routes：[

  ]

})
//这也可以,Es6增强写法，路由字典写外面
const routes =[

]
const router= new Router({
  routes
})

//3.将router对象传入到Vue实例中，此时router对象才会有效果
所以要导出export，在Vue实例哪里导入import

*/