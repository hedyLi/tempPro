<template>
  <div class="login_box">
    <h1 class="account-login-title">登录沙发网</h1>
    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" class="demo-ruleForm">
      <el-form-item prop="userName">
        <el-input v-model="ruleForm.userName" placeholder="用户名"></el-input>
      </el-form-item>
      <el-form-item prop="pass">
        <el-input type="password" v-model="ruleForm.pass" autocomplete="off" placeholder="密码"></el-input>
      </el-form-item>
      <el-form-item>
        <el-row>
          <el-col :span="4">
            <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
          </el-col>
          <el-col :span="8" style="padding:2px;">
            <a href>
              <img src="../../assets/wechat_login.png">
            </a>
          </el-col>
          <el-col :span="6" :offset="2">
            <el-button>忘记密码</el-button>
          </el-col>
          <el-col :span="4">
            <el-button @click="toRegister()">去注册</el-button>
          </el-col>
        </el-row>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import ElementUI from "element-ui";
export default {
  data() {
    var validateUserName = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入用户名"));
      } else {
        callback();
      }
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        pass: "",
        userName: ""
      },
      rules: {
        pass: [{ validator: validatePass, trigger: "blur" }],
        userName: [{ validator: validateUserName, trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          //输入正确进入这页面
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    toRegister() {
      this.$router.push({ path: "/Register" });
    }
  }
};
</script>

<style lang='less' scoped>
@import "../../../node_modules/element-ui/lib/theme-chalk/index.css";
.login_box {
  margin: 20px auto;
  width: 500px;
  padding: 24px;
  border: 1px solid rgb(227, 227, 227);
  background-color: rgb(245, 245, 245);
  border-radius: 3px;
  .account-login-title {
    text-align: left;
    font-size: 30px;
    font-weight: normal;
    margin: 10px 0;
    color: rgb(51, 51, 51);
  }
  .el-form {
    padding: 10px 0px;
    line-height: 1.33;
  }
}
</style>
