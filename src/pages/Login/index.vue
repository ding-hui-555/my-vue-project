<template>
  <div class="login-page">
   <div class="bg">
      <h1>千锋管理系统</h1>
      <el-form
      :model="loginForm"     
      status-icon
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
        ></el-input>
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
    return {
      loginForm: {
        username: "",
        password: ""
      },
      rules: {
        username: [{ validator: validateUsername, trigger: "blur" }],
        password: [{ validator: validatePassword, trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm(formName) {
      console.log(this.$refs[formName]);
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
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

  .login-page{
     position: relative;
     height: 100%;
   }

    .login-page .bg{
     width: 400px;
     height: 500px;
     background-color: rgba(0,0,0,.3);
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

