//1需求：取出所有小于100的数字
const nums=[10,20,111,222,444,40,50]
let newArrs=[]
for(let item of nums){
    if(item<100)
    newArrs.push(item)
}
//2需求：将所有小于100的数字进行转化：全部*2
let newArrs2=[]
for(let n of newArrs) //of拿的是内容，in拿的是下标
{
    newArrs2.push(n*2)

  
}
console.log(newArrs2)

//3将所有newArr2数字相加，得到最终的结果
let total =0
for(let n of newArrs2)
{
    total +=n
}

console.log(total);