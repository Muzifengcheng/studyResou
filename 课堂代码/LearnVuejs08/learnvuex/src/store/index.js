import Vue from 'vue'
import Vuex from 'vuex'
import {
    INSCREMENT
} from './mutation-types'
//1.安装插件
Vue.use(Vuex)

//2.创建对象
const moduleA = {
    state: {
        name:'zhangshan'
    },
    mutations: {
        updateName(state,payload){
            state.name=payload
        }
    },
    actions: {},
    getters: {}
}
const store = new Vuex.Store({

    //这里面一般放这些属性,固定的
    state: {
        counter: 1000,
        students: [
            { id: 110, name: 'zhao', age: 18 },
            { id: 111, name: 'qian', age: 24 },
            { id: 112, name: 'sun', age: 30 },
            { id: 113, name: 'li', age: 10 },

        ]
    },
    mutations: {
        //方法
        increment(state) {//()默认里面会传一个state参数，用类型常量时increment改为[INCREMENT]
            state.counter++
        },
        decrement(state) {
            state.counter--
        },
        incrementCount(state, count) {
            state.counter += count
        },
        addStudent(state, stu) {
            state.students.push(stu)
        }
    },
    actions: {

    },
    getters: {
        //类似computed的用法
        powerCounter(state) {
            return state.counter * state.counter
        }
    },
    modules: {
        //模块  Vue使用单一状态树，那么也意味很多状态都会交给Vuex来管理
        //当应用变得非常复杂，store对象就可能变得臃肿，所以Vuex允许将store切割成模块(Module),每个模块
        //拥有自己的state,mutation，action，getters

         a:moduleA,
/*         a: {
            state:{},
            mutations:{},
            actions:{},
            getters:{}

        }, */
        b: {

        }

    }
})
//3.导出store独享
export default store