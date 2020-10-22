import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../pages/Login";
//解决路由导航到统一路径重复报错的问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}


Vue.use(VueRouter);
// allRoutes是一个符合路由规范的数组
import allRoutes from "./allRoutes"
const routes = [
  {
    path: "/login",
    name: "login",
    component: Login
  },
  // {
  //   path: "/",
  //   name: "home",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "home" */ "../pages/Home"),
  //   children:[]
  // },
  
];

const router = new VueRouter({
  routes
});

export default router;
