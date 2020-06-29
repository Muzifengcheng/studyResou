<template>
  <tab-bar>
    <!-- 标签只能小写，注册组件是大写，驼峰用-代替 -->
    <tab-bar-item link="/home" activeColor="blue">
      <!-- 这里用到了具名插槽 -->
      <img slot="item-icon" src="~assets/img/tabbar/home.svg" alt />
      <img slot="item-icon-active" src="~assets/img/tabbar/home_active.svg" alt />

      <div slot="item-text">首页</div>
      <!--  <div class="tab-bar-item">
      <img src="../../assets/img/tabbar/home.svg" alt="">
      <div>首页</div>-->
    </tab-bar-item>
    <tab-bar-item link="/category" activeColor="blue">
      <img slot="item-icon" src="~assets/img/tabbar/category.svg" alt />
      <img slot="item-icon-active" src="~assets/img/tabbar/category_active.svg" alt />
      <div slot="item-text">分类</div>
    </tab-bar-item>
    <tab-bar-item link="/cart" activeColor="deepPink">
      <img slot="item-icon" src="~assets/img/tabbar/cart.svg" alt />
      <img slot="item-icon-active" src="~assets/img/tabbar/cart_active.svg" alt />
      <div slot="item-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item link="/profile" activeColor="deepGreen">
      <img slot="item-icon" src="~assets/img/tabbar/profile.svg" alt />
      <img slot="item-icon-active" src="~assets/img/tabbar/profile_active.svg" alt />
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </tab-bar>
  <!-- <router-view></router-view> -->
</template>

<script>
//这里用到了取别名
import TabBar from "components/tabbar/TabBar";
import TabBarItem from "components/tabbar/TabBarItem";
export default {
  name: "MainTabBar",
  components: {
    TabBar,
    TabBarItem   
  }
};
</script>

<style scoped>
</style>
