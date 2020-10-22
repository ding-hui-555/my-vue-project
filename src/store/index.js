import Vue from "vue";
import Vuex from "vuex";
import {getMenuList} from "@/api"

//引入allRoutes和递归函数 动态路由
import allRoutes from "../router/allRoutes"
import recursionRoutes from "../utils/recursionRoutes"
import dynamicRoutes from "../router/dynamicRoutes"
import router from "../router";
Vue.use(Vuex);

//刷新页面会丢失用户信息，所以要从localStorage中取
//vuex中的东西刷新就没有了怎么办？存一份到本地存储即可
let userInfo=localStorage.getItem("qf-userInfo") ||"{}"
userInfo=JSON.parse(userInfo)

export default new Vuex.Store({
  state: {
    userInfo,
    menuList:[],  //定义用户侧边栏菜单和sideMenu值一样
    crumbs:[]
  },
  mutations: {
    //更改userInfo
    SET_USERINFO(state,payload){
       state.userInfo=payload
    },
    SET_MENULIST(state,payload){
     state.menuList=payload
    //  console.log(state.menuList);
     
     //1将menuList赋值给dynamicRoutes的children
     let target=dynamicRoutes.find(item=>item.path==="/")
     target.children=[...state.menuList]
    //  console.log(dynamicRoutes);
     //2动态添加路由配置到router中,这样dynamicRoutes才能生效
     //动态的将路由添加到routes中  核心方法 router.addRoutes(符合路由配置规则的数组)
     router.addRoutes(dynamicRoutes)
    },
    //设置面包屑
    SET_CRUMBS(state,payload){
      state.crumbs=payload
    } 
  },
  actions: {
    
   async FETCH_MENULIST({commit}){
      
      //1发送请求获取用户菜单数据
    let userMenu= await getMenuList()
    // console.log(userMenu);
    // console.log(userMenu.data.menuList,111);   //userMenu.data.menuList是一个数组
    //2通过allRoutes和请求回来的用户菜单数据进行对比，
    let sideMenu=recursionRoutes(allRoutes,userMenu.data.menuList)
    // console.log(sideMenu,222);
    //3将结果提交给mutations
    commit("SET_MENULIST",sideMenu)
    }
  },
  modules: {}
});
