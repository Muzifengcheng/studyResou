<template>
  <div id="app">
    <tab-bar>
      <!-- 标签只能小写，注册组件是大写，驼峰用-代替 -->
      <tab-bar-item>
        <!-- 这里用到了具名插槽 -->
        <img slot="item-icon" src="./assets/img/tabbar/home.svg" alt />
        <div slot="item-text">首页</div>
        <!--  <div class="tab-bar-item">
        <img src="../../assets/img/tabbar/home.svg" alt="">
        <div>首页</div>-->
      </tab-bar-item>
      <tab-bar-item>
        <img slot="item-icon" src="./assets/img/tabbar/category.svg" alt />
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item>
        <img slot="item-icon" src="./assets/img/tabbar/cart.svg" alt />
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item>
        <img slot="item-icon" src="./assets/img/tabbar/profile.svg" alt />
        <div slot="item-text">我的</div>
      </tab-bar-item>
           <tab-bar-item>
        <img slot="item-icon" src="./assets/img/tabbar/05TABbar-fill.svg" alt />
        <div slot="item-text">测试</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from "./components/tabbar/TabBar";
import TabBarItem from "./components/tabbar/TarBarItem";
export default {
  name: "App",
  components: {
    TabBar,
    TabBarItem
  }
};
</script>
<style>
/* 因为你在style不是js文件引用 ，要加@*/
@import "./assets/css/base.css";
</style>
