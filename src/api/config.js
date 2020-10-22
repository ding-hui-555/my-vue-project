import axios from "axios";
import router from "../router"

import ElementUI from 'element-ui';
import NProgress from "nprogress"

axios.defaults.baseURL=process.env.NODE_ENV==="development"?"/api":"http://www.chst.vip"
axios.defaults.withCredentials=true  //允许请求携带认证

//中断请求属性
export let CancelToken=axios.CancelToken



//创建请求拦截器，可以给每个请求都携带想要的传递内容
axios.interceptors.request.use(config=>{
    // config指的是每一个请求对象
    // console.log(config);
    //登入注册都不需要携带token
    if(config.url=="/users/login"){
        return config
    }else{
        let token=localStorage.getItem("qf-token")
        //config值是每一个请求对象
        config.headers["authorization"]=token
        //放行 return config
        return config
    }
})

//响应拦截
axios.interceptors.response.use(config=>{
    
    // console.log(config);
    let {data}=config
    if(data.code=="1004"||data.code=="10022"){
        //在当前后台api中1004代表token校验失败，10022表示session到期失效，提示错误并且让页面跳转到登录页
    //    alert("登录信息失效，请重新登录")
    //    console.log(ElementUI);
       ElementUI.Message.error("登录信息失效，请重新登入")
       localStorage.removeItem("qf-token")
       router.push("/login") //页面跳转到登录页
        //刷新页面
      window.location.reload()
    }
    return config
})


axios.create({
    timeout:4000,
})  //时间超过4秒



export default axios
