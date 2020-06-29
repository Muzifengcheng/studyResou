<template>
  <div id="app">
    <main-tab-bar></main-tab-bar>
    <router-view></router-view>
  </div>
</template>

<script>
//./components的路径被我用了别名
import MainTabBar from "components/mainTabBar/MainTabBar";
export default {
  name: "App",
  components: {
    MainTabBar
  }
};
</script>
<style>
/* 因为你在style不是js文件引用 ，要加@*/
@import "./assets/css/base.css";
</style>
