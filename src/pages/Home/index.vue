<template>
  <div class="home-page">
    <el-container>


      <!-- 左侧边栏 -->
      <el-aside width="200px">
        <div class="logo">
          <img src="./../../assets/3.png" alt="">
          <p>千锋智慧</p>
        </div>
      <!-- 展开收起 -->
        <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
          <el-radio-button :label="false">展开</el-radio-button>
          <el-radio-button :label="true">收起</el-radio-button>
        </el-radio-group>


      <!-- 菜单 -->
        <el-menu
          default-active="1-4-1"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          :collapse="isCollapse"
        >
          
        <!-- 管理首页 -->
          <el-menu-item index="1">
            <em class="iconfont icon-cart"></em>
            <i>管理首页</i>
            <!-- <span slot="title"></span> -->
          </el-menu-item>

        <!-- 学员管理 -->
          <el-submenu index="2">
            <template slot="title">
              <em class="iconfont icon-yemian-copy-copy-copy-copy"></em>
              <i class="te">学员管理</i>
              <!-- <span slot="title"></span> -->
            </template>

            <el-menu-item-group>
              <el-menu-item index="2-1">
                <em class="iconfont icon-xin"></em>
                <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;学员管理项目</span></el-menu-item>
            </el-menu-item-group>

            <el-menu-item-group>
              <el-menu-item index="2-2">
                <em class="iconfont icon-fangdajing"></em>
                <span  style="margin:0px 15px 0px">学员资料</span></el-menu-item>
            </el-menu-item-group>

            <el-menu-item-group>
              <el-menu-item index="2-3">
                <em class="iconfont icon-gaojiaobei"></em>
                <span style="margin:0px 15px 0px">学员宿舍</span></el-menu-item>
            </el-menu-item-group>
            
          </el-submenu>

          <!-- 我的中心 -->
          <el-menu-item index="3">
            <em class="iconfont icon-mine-gray"></em>
            <i>考勤管理</i>
            <!-- <span slot="title"></span> -->
          </el-menu-item>

           <!-- 我的中心 -->
          <el-menu-item index="4">
            <em class="iconfont icon-star_full"></em>
            <i>数据统计</i>
            <!-- <span slot="title"></span> -->
          </el-menu-item>

           <!-- 我的中心 -->
          <el-menu-item index="5">
            <em class="iconfont icon-tongzhi"></em>
            <i>我的中心</i>
            <!-- <span slot="title"></span> -->
          </el-menu-item>

        </el-menu>
        <div class="bot"></div>
      </el-aside>

      <!-- 右总体区域 -->
      <el-container>
        <!-- 右上顶部栏 -->
        <el-header>
          <el-row type="flex" class="row-bg" justify="space-between">
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
         <router-view></router-view>
        </el-main>
      </el-container>


    </el-container>
  </div>
</template>

<style>
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
        margin-left: -200px;
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

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
  width: 205px !important;
  position: relative;
  border-right: 1px solid green;
  overflow-x: hidden;
}
.el-aside>ul{
  width: 204px;
  margin-top: -140px;
  height: 562px !important;
}
.el-aside .logo{
  position: absolute;
  top: 0;
  left: 0;
  width: 204px;
  height: 60px;
  background-color: #543de4;
}
.el-aside .logo p{
  position: absolute;
  top: -100px;
  left: 70px;
  color: #fff;
  font-size: 30px;
  font-weight: 700;
  font-family: SimSun;
}
.el-aside .logo img{
  position: absolute;
  width: 60px;
  left: 0px;
  top: 3px;
}
.el-aside .bot{
  width: 204px;
  height: 100px;
  position: absolute;
  bottom: 0px;
  left: 0;
  background-color:  #543de4;
}
/* .el-menu--vertical{
    position: static !important;
  } */
  li.el-menu-item:nth-of-type(1):hover{
    background-color: transparent !important;
  }
  
.el-aside>ul>li:nth-of-type(2)>div>i{
  color: #4e5bf8;
  font-style: normal;
}
.el-aside>ul>li:nth-of-type(1)>em{
   font-size: 20px !important;
   color:#4e5bf8 !important;
   margin-right: 3px;
}
.el-aside>ul>li:nth-of-type(1)>em:hover{
   color:#e47833 !important;
}

.el-aside>ul>li>div>em{
   font-size: 20px !important;
   color:#4e5bf8 !important;
   margin-right: 3px;
}
.el-aside>ul>li>div>em:hover{
   color:#e47833 !important;
}
.el-aside>ul>li:nth-of-type(3)>em{
   font-size: 20px !important;
   color:#4e5bf8 !important;
   margin-right: 3px;
}
.el-aside>ul>li:nth-of-type(3)>em:hover{
   color:#e47833 !important;
}
.el-aside>ul>li:nth-of-type(4)>em{
   font-size: 20px !important;
   color:#4e5bf8 !important;
   margin-right: 3px;
}
.el-aside>ul>li:nth-of-type(4)>em:hover{
   color:#e47833 !important;
}
.el-aside>ul>li:nth-of-type(5)>em{
   font-size: 20px !important;
   color:#4e5bf8 !important;
   margin-right: 3px;
}
.el-aside>ul>li:nth-of-type(5)>em:hover{
   color:#e47833 !important;
}

.el-aside>ul>li>i{
  color: #4e5bf8;
  font-style: normal;
}
.el-aside>ul>li>i:hover{
  color: #e47833;
}
.el-aside>ul>li>div>i.te:hover{
  color: #e47833;
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
.el-menu-item-group{
  position: relative;
  margin: 0;
  padding: 0;
  height: 45px;
   /* background-color:#4e5bf8; */
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
}
</style>


<script>
import {mapState} from "vuex"
import {getLoginLog} from "@/api"
export default {
  data() {
    return {
      isCollapse: true
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
    }
  },
  computed: {
    ...mapState(["userInfo"])
  },
  mounted(){
    getLoginLog()
    .then(res=>{
      console.log(res);
    })
  }
};
</script>



