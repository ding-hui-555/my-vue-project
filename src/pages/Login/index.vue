<template>
  <div class="login-page">
   <div class="bg">
      <h1>千锋管理系统</h1>
      <el-form
      :model="loginForm"     
      :rules="rules"
      ref="loginForm"
      label-width="100px"
      class="demo-loginForm"
    >
      <el-form-item label="用户名" prop="username" style="color:red">
        <el-input
          type="text"
          v-model="loginForm.username"
          autocomplete="off"
        ></el-input>
      </el-form-item>

      <el-form-item label="密码" prop="password">
        <el-input
          type="password"
          v-model="loginForm.password"
          autocomplete="off"
         @keydown.native.enter="submitForm('loginForm')"
        ></el-input>
      </el-form-item>

      <el-form-item label="验证码" prop="captcha">
        <el-input
          class="captcha"
          type="password"
          v-model="loginForm.captcha"
          autocomplete="off"
         @keydown.native.enter="submitForm('loginForm')"
        ></el-input>

        <span class="captcha-svg" v-html="captchaSvg" @click="refreshCaptcha">12333</span>
      </el-form-item>


      <el-form-item>
        <el-button type="success" @click="submitForm('loginForm')">提交</el-button>
      </el-form-item>

    </el-form>
   </div>
    <img src="./../../assets/1.png" alt="">
    <video src="../../assets/bg_video.d2d602a9.mp4" muted="muted" autoplay="autoplay" loop="loop" preload="auto" class="bg_video"></video>
  </div>
</template>

<script>


//登入逻辑的实现
/* 
1 收集用户输入的用户名密码传递给后端
2 登入通过之后，将后端返回的token存到本地
3 每次请求的时候，携带token到请求头authorization
4 展示token校验正确的数据
5 校验不通过，跳转到登入页
*/

import Vue from "vue"
import {login,getCaptcha,verifyCaptcha} from "@/api"
import {mapMutations} from "vuex"
// Vue.config.keyCodes.rng=13
export default {
  data() {
    /**
     * jsDoc
     * @param {Object} rule 就是一个表单验证对象
     * @param {String} value 就是输入值
     * @param {Function} callback 校验通过不传参  通过传参
     */
    var validateUsername = (rule, value, callback) => {
      // console.log(rule);
      // console.log(value);
      // var uPattern=/^[a-zA-Z0-9_-]{4,16}$/
      if(!value){
        callback("4-16位（字母，数字，下划线，减号）")
      }else{
        callback()
      }
    };

    var validatePassword = (rule, value, callback) => {
      // var uPattern=/^[a-zA-Z0-9_-]{4,16}$/
      if(!value){
        callback("请输入密码")
      }else{
        callback()
      }
    };
    //校验验证码
    var validateCaptcha = (rule, value, callback) => {
      if(value===""||value.length!==5){
        callback(new Error("请输入验证码"))
      }else{
        callback()
      }
    };

    return {
      captchaSvg:"",   //从服务器获取下来的验证码svg结构
      loginForm: {
        username: "",
        password: "",
        captcha:""
      },
      rules: {
        username: [{ validator: validateUsername, trigger: "blur" }],
        password: [{ validator: validatePassword, trigger: "blur" }],
        captcha: [{ validator: validateCaptcha, trigger: "blur" }]
      }
    };
  },
  mounted () {
    this.set_captcha()
  },
  methods: {
   //刷新验证码
    refreshCaptcha(){
       this.set_captcha()
    },
    //设置验证码
    set_captcha(){
      getCaptcha()
      .then(res=>{
        console.log(res);
        this.captchaSvg=res.data.img
      })
    },
    ...mapMutations(["SET_USERINFO"]),

    submitForm(formName) {
      console.log(this.$refs[formName]);
      this.$refs[formName].validate(async(valid) => {
        if (valid) {  //代表本地校验通过
        //先验证验证码是否正确如果正确再发送登入请求
        let verifyRes= await  verifyCaptcha(this.loginForm.captcha)
        console.log(verifyRes);
        if(!verifyRes.data.state){
          //验证码不正确
          this.$message.error("验证码输入不正确，请重新输入")
           return
        }
        //打开登录加载动画
        const loading=this.$loading({
          lock: true,
          text: '正在登入...',
          spinner: 'el-icon-loading',
          background: 'rgba(0, 0, 0, 0.7)'
        });
          // console.log(this.loginForm.username);
          // console.log(this.loginForm.password);
          let {username,password} =this.loginForm
          //发送登入请求
          // console.log(username,password);
          // debugger;
          login(username,password)
          .then(res=>{
            //服务器响应关闭loading动画
            loading.close()
            // console.log(res);
            if(res.data.state){
              //用户名密码正确
              this.$message.success("登入成功")
              localStorage.setItem("qf-token",res.data.token)
              localStorage.setItem("qf-userInfo",JSON.stringify(res.data.userInfo))
              //更改vuex中state[userInfo]的值
              this.SET_USERINFO(res.data.userInfo)
             this.$router.push("/Welcome")
            }else{
              //用户名或者密码错误
              // console.log(1);
              this.$message.error("用户名或者密码错误")
            }
          })
          .catch(err=>{
            console.log(err);
          })
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  }
};
</script>


<style scoped>
   .captcha-svg{
      background-color: #fff;
      display: inline-block;
      height: 44px;
      width: 130px;
      text-align: center;
      cursor: pointer;
   }

  .login-page{
     position: relative;
     height: 100%;
   }

    .login-page .bg{
     border-radius: 5%;  
     width: 400px;
     height: 500px;
     background-color: rgba(0,0,0,.2);
      position: absolute;
     top: 100px;
     right:200px;
   }

   .login-page .bg h1{
     font-weight: 700;
     color: #fff;
     position:absolute;
     top:100px;
     right:100px;
   }

/* 表单样式 */
   .login-page .bg .el-form{  
     width: 400px;
     position: absolute;
     top: 200px;
     right:20px;
     z-index: 2;
   }
   
  .login-page  video{
     position: absolute;;
     z-index:-1;
     left: 50%;
     top: 50%;
     margin-left: -960px;
     margin-top: -540px;
   }
  
   .login-page  img{
     width:350px;
     position: absolute;
     top: 200px;
     left: 200px;
   }

   
</style>

