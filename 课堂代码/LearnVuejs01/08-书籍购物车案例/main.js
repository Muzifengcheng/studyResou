const app = new Vue({
    el: '#app',
    data: {
        books: [
            {
                id: 1,
                name: '《算法导论》',
                date: '2006-9',
                price: 85.00,
                count: 1
            },
            {
                id: 2,
                name: '《UNIX编程艺术》',
                date: '2006-2',
                price: 59.00,
                count: 1
            },
            {
                id: 3,
                name: '《编程珠玑》',
                date: '2008-10',
                price: 39.00,
                count: 1
            },
            {
                id: 4,
                name: '《代码大全》',
                date: '2004-3',
                price: 128.00,
                count: 1
            },
        ]
    },
    methods: {
        // getFinalPrice(price) {
        //     return '¥' + price.toFixed(2)
        // }
        increment(index) {
            // console.log("incremnt", index)
            this.books[index].count++;
        },
        decrement(index) {
            // console.log("decrement", index)
            this.books[index].count--;
        },
        removeHandle(index){
            this.books.splice(index,1);

        }
    },
    computed: {
        totalPrice(){
            let totalPrice=0
            for(let i=0;i<this.books.length;i++){
                totalPrice +=this.books[i].price*this.books[i].count
            }
            return totalPrice
            //for (let i in/of this.books)
            //reduce 替换for循环
        //   2  for(let i in this.books)
        //     totalPrice +=this.books[i].price*this.books[i].count
        //     return totalPrice

/*         3.for(let item of this.books)它最方便，直接拿到book
        {
              totalPrice +=item.price*item.count
        }
        return totalPrice */

        // 讲一个高阶函数reduce用法
        return this.books.reduce(function(preValue,book){//第二个参数这里是对象，不是number(n)
            return preValue+book.price*book.count
              
        },0)
        // return this.books.reduce((preValue,n) =>preValue+book.price*book.count,0)
        }

    },

    filters: {
        //过滤的参数传到这里面来
        showPrice(price) {
            return '¥' + price.toFixed(2)
        }
    }
})
// 操作数组可以用到高阶函数
//编程模式：命令式编程/声明式编程
//编程范式：面向对象编程（第一公民）/函数式编程（第一公民：函数）
//三个高阶函数：filter/map/reduce ,可以避免使用三个复杂的for循环 (mark.js)
//1.filter中的回调函数有一个要求：必须返回一个Boolean值

//true:当返回true时，函数内部会自动将这次回调的n加入到新的数组中
//false:当返回false时，函数内部会过滤这次的n
const nums=[10,20,111,222,444,40,50]
//参数是回调函数，数组7个元素，执行7次
let newNums=[]//10,20,40,50
//以newNums接受过滤器新产生的数组。
let newNums=nums.filter(function(n){
    //  return true所有的n都会被返回,和原来的数组一样了
    return n<100
})
console.log(newNums)
//所有数组元素进行变化的话可以用map函数
//2.map函数的使用，回调函数执行n次，返回一个新的值和表达式给数组  
let new2Nums = newNums.map(function (n){
   // return 100//会返回四个100给新数组
    return n*2
})
console.log(new2Nums);//20  40  80 100
//map内也是回调函数，执行四次

//3.reduce函数的使用
//reduce作用对数组中的所有的内容进行汇总（相加，相乘。。。），至少传两个值
new2Nums.reduce(function(preValue,n){
    return 100
},0)//第一个回调函数，第二个参数一般给初始值：0
/* reduce函数也执行4次，
第一次：preValue:0(初始化为0) n :20
第二次：preValue:100 n:40
第三次：preValue:100 n:80
第四次：preValue:100 n:100 */

总结：这样reduce就可以得到汇总的值
将return  100 改为return preValue+n
let total =new2Nums.reduce(function(preValue,n){
    return preValue+n
},0)
第一次：preValue:0(初始化为0) n :20
第二次：preValue:20 n:40
第三次：preValue:60 n:80
第四次：preValue:140 n:100 
//240

//链式编程简单写法，也不推荐
const nums=[10,20,111,222,444,40,50]
let total=nums.filter(function(n){
    return n<100
}).map(function (n){
    return n*2
}).reduce(function(preValue,n){
   return preValue+n
,0})

//推荐这样写 用了ES6的箭头函数
const nums=[10,20,111,222,444,40,50]
let total = nums.filter(n => n <100).map(n=>n*2.reduce((pre,n)=>pre+n);
console.log(total)