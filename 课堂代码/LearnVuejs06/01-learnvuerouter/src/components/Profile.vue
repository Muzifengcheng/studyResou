<template>
  <div>
        <h2>我是Profile组件</h2>
     <h2>{{$route.query}}</h2> 
     <h2>{{$route.query.name}}</h2> 
     <!-- $router路由实例，$route活跃的路由 -->
     <h2>{{$route.query.height}}</h2> 

  </div>
</template>

<script>
export default {
    name:"Profile",
};
</script>

<style>
</style>