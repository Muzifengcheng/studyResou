<template>
      <div id="tab-bar">
        <slot></slot><!-- 插槽里可以放很多的东西的 -->
        <!-- TabBar就管它自己的事，下面item就不要管，尽量精简 -->
     <!--  <div class="tab-bar-item">
        <img src="../../assets/img/tabbar/home.svg" alt="">
        <div>首页</div>
        </div>
      <div class="tab-bar-item">
        <img src="../../assets/img/tabbar/home.svg" alt="">
        <div>分类</div>
        </div>
      <div class="tab-bar-item">
        <img src="../../assets/img/tabbar/home.svg" alt="">

        <div>购物车</div>
        </div>
      <div class="tab-bar-item">
        <img src="../../assets/img/tabbar/home.svg" alt="">
        <div>我的</div>
        </div> -->
    </div>
</template>

<script>
  export default {
    name: "TabBar"
  }
</script>

<style scoped>
#tab-bar{
  display: flex;
  text-align: center;
  height: 49px;/* 一般的高度是这个 */
  /* line-height: 49px; */
  background: #DADADA;
  position: fixed;
  left:0;
  right: 0;
  bottom: 0;
  box-shadow: 0 -1px 1px rgba(70, 44, 44, 0.2);
}

</style>
