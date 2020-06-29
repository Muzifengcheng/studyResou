<template>
  <div id="app">
    <h2>-----------APP内容，moudles相关信息------</h2>
    <h2>{{$store.state.a.name}}</h2>
    <button @click="updateName"></button>

    <h2>{{message}}</h2>
    <h2>{{$store.state.counter}}</h2>
    <!-- <button @click="counter++">+</button>
    <button @click="counter--">-</button>-->
    <button @click="addition">+</button>
    <button @click="subtraction">-</button>
    <!-- <button @click="addFive">+5</button>这样又要多写方法啰嗦了
    <button @click="addTen">+10</button>-->
    <button @click="addCount(5)">+5</button>
    <button @click="addCount(10)">+10</button>
    <button @click="addStudent">添加学生</button>

    <h2>-----------APP内容，getters相关信息------</h2>
    <h2>{{$store.state.counter*$store.state.counter}}</h2>
    <h2>-----------Hello Vuex内容，getters相关信息------</h2>
    <h2>{{$store.getters.powerCounter}}</h2>

    <h2></h2>
    <!--  <hello-vuex :counter="counter"></hello-vuex>  把HelloVuex的组件中的东西渲染出来 -->
    <!-- <hellovuex/>里面不需要跟东西用单标签，里面有插槽要放东西的话你就要用双标签 -->
    <hello-vuex />
  </div>
</template>

<script>
import HelloVuex from "./components/HelloVuex";
import { INCREMENT } from "./store/mutation-types"; //之后可以把increment都改成INCREMENT
export default {
  name: "App",

  components: {
    HelloVuex
  },
  data() {
    return {
      message: "我是组件"
      // counter: 0,不用自己counter，想用vuex中的store的state的中counter
    };
  },
  methods: {
    addition() {
      this.$store.commit("increment"); //要先提交才能用Vuex中的方法this.$store.commit(INCREMENT)
    },
    subtraction() {
      this.$store.commit("decrement");
    },
    addCount(count) {
      //payload:负载
      //1.普通的提交封装，()里跟的是字符串
      //   this.$store.commit("incrementCount", count);
      //2.特殊的提交封装
      this.$store.commit({
        type: "incrementCount",
        //  count:count
        count //ES6可直接这样写
      });
    },
    addStudent() {
      const stu = { id: 114, name: "alen", age: 35 };
      this.$store.commit("addStudent", stu);
    },
    updateName(){
      this.$store.commit('updateName','list')
    }  
  }
};
</script>

<style>
</style>
