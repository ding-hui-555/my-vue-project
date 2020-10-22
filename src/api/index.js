import axios,{CancelToken} from "./config"

export const login=(username,password)=>axios({
    url:"/users/login",
    method:"post",
    data:{
        username,
        password
    }
})


//获取登入日志
/**
 * 
 * @param {Object} _this  一个组件实例
 */
export const getLoginLog=(_this)=>axios.get("/getloginlog",{
     CancelToken:new CancelToken(function(c){
         //c就是一个方法，可以中断请求
         _this.cancel=c  //相当于给组件实例添加一个cancel属性
     })
})


//获取用户菜单
export const  getMenuList=()=>axios.get("/permission/getMenuList")
