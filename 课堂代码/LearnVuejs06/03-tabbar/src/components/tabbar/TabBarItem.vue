<template>
  <div class="tab-bar-item" @click="itemClick">
    <!-- 怎么动态地往你组件插入图标，文字，不要写死啊，所以搞2个插槽，text和icon嘛 -->
    <!-- 加个div防止slot被替换掉 -->
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>

    <div :class="{active:isActive}" :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    //动态的路径link/path
    link: String,
    activeColor:{
      type:String,
      default:'red'
    }
  },
  data() {
    return {
      // isActive:true
    };
  },
  computed: {
    isActive() {
      //当前活跃的路由
      // return  this.$route.path==(this.path)
      //判断当前活跃的路由path(默认/home)和当前的item的path是否等于，等于-1，是在里面没有这个path
      // if (this.$router.path != this.link && this.$router.push(this.link))
      console.log("进去了");

      return this.$route.path.indexOf(this.link) !== -1; //老师的方法

      // return this.$route.path.includes(this.link) == 1
    },
      activeStyle(){
    return this.isActive ? {color:this.activeColor} : {}
  }
  },
  methods: {
    itemClick() {
      console.log("itemClick");
      if (!this.isActive)//网友的方法 ,就是这个意思  this.$route.path !== this.link
       this.$router.push(this.link); //这里可不能写死路径啊  .catch(() => {});
      //  this.isActive=!this.isActive
    }
  },

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

/* .active {
  想自己动态决定颜色，不用知道源码怎么写，知道如何用 
  color: blue; 
}  */
</style>