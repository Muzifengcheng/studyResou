export default {
    //以后改app组件代码都在这里改了，不好在于模板和js代码没有分离。引出了Vue文件
    template: `
    <div>
    <h2>{{ message }}</h2>
    <button @click="btnClick" > 按钮</button >
        <h2>{{ name }}</h2>
    </div>
    `,
data(){
    return {
        message: 'hello Webpack',
        name: 'codewhy'
    }
},
methods: {
    btnClick(){

    }
}
}