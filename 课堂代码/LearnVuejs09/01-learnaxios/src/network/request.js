import axios from 'axios'

// 最佳方式2
export function request(config) {
    //1.创建axios实例
    const instance = axios.create({
        baseURL: 'http://123.207.32.32:8000',
        timeout: 5000
    })

    //2.axios的拦截器(装饰器) 请求之前要做什么事情就需要拦截，比如加一个loading条  axios.interceptors全局拦截
    instance.interceptors.request.use(config => {
        console.log(config);
        //1.比如config中的一些信息不符合服务器的要求
        //2.比如每次发生网络请求时，都希望在界面显示一个请求的图标
        //某些网络请求(比如登录的token)，必须携带一些特殊的信息
        return config
    }, err => {

    })//拦截请求
    instance.interceptors.response.use(res => {
        console.log(res)
        return res.data
    }, err => {
        console.log(err)
    })//拦截响应


    //3发送真正的网络请求
    return instance(config)

}

// 最佳方式
export function request(config) {
    return new Promise((resolve, reject) => {
        //1.创建axios实例
        const instance = axios.create({
            baseURL: 'http://123.207.32.32:8000',
            timeoinstanceut: 5000
        })
        //发送真正的网络请求
        instance(config)
            .then(res => {
                resolve(res)
            })
            .catch(err => {
                reject(err)
            })
    })
}
//方式二
export function request(config) {
    //1.创建axios实例
    const instance = axios.create({
        baseURL: 'http://123.207.32.32:8000',
        timeoinstanceut: 5000
    })
    //发送真正的网络请求
    instance(config.baseConfig)
        .then(res => {
            //  console.log(res);
            config.success(res)

        })
        .catch(err => {
            //  console.log(err);
            config.failure(err)
        })
}


/* export function request(config, success, failure) {
    //1.创建axios实例
    const instance = axios.create({
        baseURL: 'http://123.207.32.32:8000',
        timeout: 5000
    })
    //发送真正的网络请求
    instance(config)
        .then(res => {
        //  console.log(res);
            success(res)

        })
        .catch(err => {
          //  console.log(err);
            failure(err)
        })
}
 */