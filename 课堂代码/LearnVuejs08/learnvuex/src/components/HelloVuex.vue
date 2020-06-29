<template>
  <div>
    <!-- <h2>{{counter}}</h2> -->
    <h2>{{$store.state.counter}}</h2>
    <h2>{{$store.getters.powerCounter}}</h2>
  </div>
</template>

<script>
export default {
  name: "HelloVuex"
  //     props:{
  //     counter:Number,
  //   },用vuex就可以公用状态了，不需要这样写
};
</script>

<style>
</style>