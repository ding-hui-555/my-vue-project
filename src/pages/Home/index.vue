<template>
  <div class="home-page">
    <el-container>


       <!-- 侧边菜单栏 -->
      <el-aside width="200">
        <el-menu :default-active="$route.path"
                 class="el-menu-vertical-demo"
                 :router="true"
                 :collapse="isCollapse">
          <qf-sub-menu :sideMenu="menuList"></qf-sub-menu>
        </el-menu>
        <!-- <div class="te"></div> -->
      </el-aside>



      <!-- 右总体区域 -->
      <el-container>
        <!-- 右上顶部栏 -->
        <el-header>
          <el-row type="flex" class="row-bg" justify="space-between">

            
                <i class="iconfont icon-shouqi"
                   @click="isCollapse=!isCollapse"></i>
              

            <el-col :span="6"
              ><div class="grid-content bg-purple"></div
            ></el-col>
            <el-col :span="6"
              ><div class="grid-content bg-purple-light">千锋管理系统</div
            ></el-col>
            <el-col :span="6"
              ><div class="grid-content bg-purple">
                <img src="./../../assets/2.jpg" alt="">
                欢迎您：
                <!-- {{userInfo.nickname}} -->
                <b class="nickname">{{userInfo.nickname}} </b>  
                 <span class="quit" @click="quit">退出</span></div
            ></el-col>
          </el-row>
        </el-header>
        <!-- 右下主体区域 -->
        <el-main>
          <el-breadcrumb separator-class="el-icon-arrow-right">
         <el-breadcrumb-item :to="{ path: '/Welcome' }">首页</el-breadcrumb-item>
         <el-breadcrumb-item :to="{path:crumb.path}" v-for="(crumb,index) in crumbs"  :key="index">
           {{crumb.meta.name}}
         </el-breadcrumb-item>
       </el-breadcrumb>
         <router-view></router-view>
        </el-main> 
      </el-container>
  

    </el-container>
  </div>
</template>

<style>


/* 左下蓝色的框 */
/* .te{
  position: absolute;
  bottom: 0px;
  left: 0px;
  background-color: #000;
  min-width: 100px;
  height: 100px;
} */

.icon-shouqi {
    color: pink;
    font-size:25px;
    cursor: pointer;
    margin-top: -7px;
    margin-left: 10px;
  }

/* 右上顶栏的布局 */

.quit{
  cursor: pointer;
}
.el-header>div,.el-header{
    height: 60px;
    background:linear-gradient(90deg,#4c63fc,#5443e8) !important;
  }
  .el-header>div>div:nth-of-type(1)>div{
     background-color:transparent;
        color: #fff;
        line-height: 40px;
  }
  .el-header>div>div:nth-of-type(2)>div{
        background-color:transparent;
        color: #fff;
        line-height: 40px;
        margin-left: -300px;
  }
  .el-header>div>div:nth-of-type(3)>div{
        background-color:transparent;
        color: #fff;
        line-height: 40px;
        position: relative;
  }
  .el-header>div>div:nth-of-type(3)>div img{
      /* margin-top: 10px; */
      width: 40px;
      height: 40px;
      border-radius: 50%;
      position: absolute;;
      top: 0px;
      left: 20px;
  }
  .el-header>div>div:nth-of-type(3)>div span{
        color: red;
        line-height: 40px;
  }


.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}




.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}

/* 侧边栏展开收起 */
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}

/* 顶部上面状态栏 */
.el-row {
  margin-bottom: 20px;
  /* &:last-child {
      margin-bottom: 0;
    } */
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
/* .el-menu-item-group{
  position: relative;
  margin: 0;
  padding: 0;
  height: 45px;
}
.el-menu-item-group em{
   font-size: 20px !important;
   color:#4e5bf8 !important;
   margin-right: 3px;
   position: absolute;
   left: 30px;
   top: -20px;
}
.el-menu-item-group em:hover{
   color: #e47833  !important;
}
.el-menu-item-group span{
    color: #4e5bf8;
    position:absolute;
    top: -20px;
    right: 60px;
}
.el-menu-item-group span:hover{
   color: #e47833;
} */
</style>

<script>
import {mapState} from "vuex"
// import {getLoginLog} from "@/api"
export default {
  data() {
    return {
      isCollapse: false
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    quit(){
      //退出登录
      //1 清除token和userInfo
      //2 跳转到登录页
      localStorage.removeItem("qf-token")
      localStorage.removeItem("qf-userInfo")
      this.$router.push("/login")
      //刷新页面
      window.location.reload()
    }
  },
  computed: {
    ...mapState(["userInfo","menuList","crumbs"])
  },
  mounted(){
    // getLoginLog()
    // .then(res=>{
    //   // console.log(res);
    // })

  }
};
</script>



