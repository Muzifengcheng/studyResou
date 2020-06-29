<template>
  <div id="app">
    <!-- <button>首页</button>
    <button>关于</button>-->
    <!-- <router-link to="/home" tag="button" replace active-class="active">首页</router-link> -->
    <!-- tag=button;li.... -->
    <!-- <router-link to="/home" tag="button" replace>首页</router-link> -->

    <!-- 该标签会根据当前的路径，动态地渲染出不同的组件 -->
    <!-- <router-link to="/about" tag="button" replace>关于</router-link> -->
    <!-- 作为一个占位符的，组件到底绚烂在哪个位置 -->
    <!-- <button @click="homeClick">首页</button>
    <button @click="aboutClick">关于</button>-->

    <router-link to="/home">首页</router-link>
    <!--可以写成这样 :to="{path:'/profile'}，这为了传参"> -->
    <router-link to="/about">关于</router-link>
    <router-link :to="'user/'+userid">用户</router-link>
    <!-- 真实的开发zhangshan是动态获取的 -->
    <!-- <router-link :to="{path:'/profile',query:{name:'why',age:18,height:1.55}}">档案</router-link> -->
    <!-- 如果不用route-link，只用档案button，点击按钮，如何获取信息，还在当前页面展示信息 -->
    <button @click="userClick">用户</button>
    <button @click="profileClick">档案</button>
    <keep-alive exclude="Profile,User">
    <router-view/> //除掉profile其他都有keep-alive效果
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      userid: "zhangshan",
      imgUrl: "http://www.baidu.com/logo.png"
    };
  },
  methods: {
    homeClick() {
      //通过代码的方式来修改路由 vue-router
      //history.pushState()可以，但绕过路由修改路径了,$router属性内置的源码中有的
      this.$router.push("home"); //'/home'最好不要这样写this.$router.replace('home'),没有返回
      // this.$router.push('/home').catch(err=>{})解决点击按钮2次报错问题
      //this.$router.push('/home').catch(err=>{console.log('错误信息'),err})
      console.log("homeClick");
    },
    aboutClick() {
      this.$router.push("about");
      console.log("aboutClick");
    },
    userClick() {
      this.$router.push('/user/'+this.userid);
    },
    profileClick() {
      this.$router.push({
        path:'/profile',
        query:{
          name:'kobe',
          age:18,
          height:1.88
        }
      }).catch(err=>{})
    }
  }
};
</script>

<style>
/* .router-link-active{
  color:pink
} */
.active {
  color: red;
}
</style>
