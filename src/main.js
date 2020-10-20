import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/assets/styles/base.css"
import "@/assets/styles/el-reset.css" 
import "@/assets/styles/iconfont1/iconfont.css"



//复制的
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);


//路由前置钩子（导航守卫）
// router.beforeEach((to,from,next)=>{
//   // next()  //页面显不显示取决于它放不放行
//   // console.log(to);
//   // console.log(from);
//   //用户登入之后，在localStorage中有token
//   let token=localStorage.getItem("qf-token")
//   if(token){
//   //如果是注册或者是登录页面，直接放行
//    next()
//   }else{  //没有token
//      if(to.path==="/login"){
//         next()
//      }else{  //访问的不是登入页，就要跳转到登入页
//         next({path:"/login"})
//      }
//   }
// })

//按需引入
// import {Carousel,carouselItem} from  "element-ui"
// //注册组件
// Vue.component("el-carousel",Carousel)
// Vue.component("el-carousel-item",carouselItem)



Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
