<template>
  <div>
    <h2>我是首页</h2>
    <p>我是首页内容，哈哈哈哈</p>
    <router-link to="/home/news">新闻</router-link>
    <router-link to="/home/message">消息</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      message: "你好呀",
      path: '/home/news'
    };
  },
  // 任何的vue实例和组件都是有生命周期的，教过几个生命周期函数，如created,mouted,updated
  //一旦组件被创建出来之后，会回调这个生命周期函数
  created() {
    console.log("home created");
    // document.title='首页'
    //  this.$route.push('/home/news')
  },
  destroyed() {
    console.log("destroyed");
  },
  //当界面活跃的时候执行这个函数
  activated() {
     this.$router.push(this.path)
    console.log("activated");
    
  },
  beforeRouteLeave (to, from, next) {
    console.log(this.$route.path)
    this.path=this.$route.path;
    next()
    
  },
  /*
  deactivated() {
    console.log("deactivated");
    console.log('this.$route.path')//这里是获取活跃的路径，不好，这就不行了
    //离开之前获取他的path
    this.path=this.$route.path;

  },*/
  //组件创建后，之后将我们的template挂载在dom之后，就会来这里回调
  mouted() {
    console.log("mount");
  },
  //界面发生更新刷新之后，就会执行
  updated() {}
};
</script>

<style scoped>
</style>
