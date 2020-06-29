function add(num1,num2){
    return  num1+num2
}

function mul(num1,num2)
{
    return num1*num2
}

// 以模块化的思想去开发  commonjs的写法，你用ES6的import是一样的啊
module.exports = {
    add,
    mul
}
