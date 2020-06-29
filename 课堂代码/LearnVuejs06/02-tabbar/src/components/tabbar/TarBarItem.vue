<template>
  <div class="tab-bar-item">
    <!-- 怎么动态地往你组件插入图标，文字，不要写死啊，所以搞2个插槽，text和icon嘛 -->
    <slot name="item-icon"></slot>
    <slot name="item-text"></slot>

    <!-- <img src="../../assets/img/tabbar/home.svg" alt />
    <div>首页</div>-->
  </div>
</template>

<script>
export default {
  name: "TarBarItem"
};
</script>

<style scoped>
.tab-bar-item {
  /* 会均等分布 */
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}
.tab-bar-item img {
  width: 24px;
  height: 24px;
  margin-top: 3px;
  vertical-align: middle; /* 去掉margin-top:3px导致下面多3px */
  margin-bottom: 2px;
}
</style>