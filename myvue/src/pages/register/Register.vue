<template>
  <div class="resgister_box">
    <h1 class="account-register-title">注册沙发网</h1>
    <el-form
      :model="ruleForm"
      status-icon
      :rules="rules"
      ref="ruleForm"
      class="demo-ruleForm"
    >
      <el-form-item prop="userName">
        <el-input v-model="ruleForm.userName" placeholder="用户名"></el-input>
      </el-form-item>
      <el-form-item prop="pass">
        <el-input type="password" v-model="ruleForm.pass" autocomplete="off" placeholder="密码"></el-input>
      </el-form-item>
      <el-form-item prop="checkPass">
        <el-input
          type="password"
          v-model="ruleForm.checkPass"
          autocomplete="off"
          placeholder="确认密码"
        ></el-input>
      </el-form-item>
      <el-form-item prop="email">
        <el-input v-model="ruleForm.email" placeholder="邮箱"></el-input>
      </el-form-item>
      <el-form-item>
        <el-row>
          <el-col :span="12">
            <el-button type="primary" @click="submitForm('ruleForm')">注册</el-button>
          </el-col>
          <el-col :span="6" :offset="6">
            <el-button @click="toLogin('ruleForm')">去登录</el-button>
          </el-col>
        </el-row>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import ElementUI from 'element-ui';
export default {
  data() {
    var checkUserName = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("用户名不能为空"));
      }
      callback();
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    var validateEmail = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入邮箱"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        pass: "",
        checkPass: "",
        userName: "",
        email: ""
      },
      rules: {
        pass: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
        userName: [{ validator: checkUserName, trigger: "blur" }],
        email: [{ validator: validateEmail, trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    toLogin(formName) {
      this.$router.push({path: '/Login'});
    }
  }
};
</script>

<style lang="less" scoped>
@import '../../../node_modules/element-ui/lib/theme-chalk/index.css';
.resgister_box {
  margin: 20px auto;
  padding: 24px;
  border: 1px solid rgb(227, 227, 227);
  border-radius: 3px;
  width: 745px;
  background-color: rgb(245, 245, 245);
  .account-register-title {
    text-align:left;
    font-weight: normal;
    margin-bottom: 15px;
    font-size: 30px;
    color:rgb(51, 51, 51)
  }
  .el-form {
    padding: 10px 0px;
    line-height: 1.33;
    .el-form-item{
        .el-col{
            .el-button{
                width:100%;
            }
        }
    }
  }
}
</style>


