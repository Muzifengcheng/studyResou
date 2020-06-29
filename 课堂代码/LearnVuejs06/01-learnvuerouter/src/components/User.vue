<template>
  <div>
      <h2>我是用户界面</h2>
      <p>我是用户的相关信息，嘿嘿嘿</p>
      <h2>{{userId}}</h2>
      <h2>{{$route.params.abc}}</h2>
  </div>
</template>

<script>
export default {
    name:'User',
computed: {
    userId(){
        //拿到当前活跃（显示，使用的组件）的路由
        return this.$route.params.abc
    }
},
   created() {
      console.log('created');
      document.title='用户'//改掉网页标题
    },
}
</script>

<style>

</style>