<template>
  <div class="header">
    <div class="container">
      <el-row :gutter="24">
        <el-col :span="12">
          <div class="grid-content1">
            <img src="../assets/logo.jpg" class="logo">
          </div>
        </el-col>
        <el-col :span="12">
          <div class="grid-content2">
            <form action>
              <input type="text" placeholder="搜索电视应用">
              <a href="#" class="search">
                <i class="fa fa-search"></i>
              </a>
            </form>
            <span v-show="!isLogin" class="showUser">
              <!-- 欢迎您：{{userID}}
              <el-button type="text">注销</el-button>-->
              <el-dropdown trigger="click">
                <span class="el-dropdown-link">
                  我的沙发网
                  <i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item icon="el-icon-user-solid">{{userID}}</el-dropdown-item>
                  <el-dropdown-item icon="el-icon-sell" divided>直播源云管理</el-dropdown-item>
                  <el-dropdown-item icon="el-icon-download">下载过的应用</el-dropdown-item>
                  <el-dropdown-item icon="el-icon-phone">我的设备</el-dropdown-item>
                  <el-dropdown-item icon="el-icon-switch-button" divided ><span v-on:click="logout">退出</span></el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </span>
            <span v-show="isLogin">
              <router-link to="/Login" class="login">登录</router-link>&nbsp;
              <a href>|</a>&nbsp;
              <router-link to="/Register" class="regiest">注册</router-link>
            </span>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="row">
      <ul class="nav">
        <li class="active">
          <router-link to="/">沙发网</router-link>
        </li>
        <li>
          <router-link to="/AppStore">应用市场</router-link>
          <ul class="subnav">
            <li>
              <a href="#">影视点播</a>
            </li>
            <li>
              <a href="#">电视直播</a>
            </li>
            <li>
              <a href="#">软件应用</a>
            </li>
            <li>
              <a href="#">电视游戏</a>
            </li>
            <li>
              <a href="#">最热</a>
            </li>
            <li>
              <a href="#">专题</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">客户端下载</a>
          <ul class="subnav">
            <li>
              <a href="#">沙发管家</a>
            </li>
            <li>
              <a href="#">沙发桌面</a>
            </li>
            <li>
              <a href="#">沙发电视精灵</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">安装教程</a>
        </li>
        <li>
          <router-link to="/product">产品库</router-link>
          <ul class="subnav">
            <li>
              <router-link to="/product/tv">智能电视</router-link>
            </li>
            <li>
              <router-link to="/product/box">电视盒子</router-link>
            </li>
            <li>
              <router-link to="/product/projector">投影仪</router-link>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">开发者平台</a>
        </li>
        <li>
          <router-link to="/about">关于我们</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    isLogin() {
      return this.$store.state.token != null? false : true;
    },
    userID() {
      return this.$store.state.userID;
    }
  },
  methods:{
	  logout(){
		  let params={token:this.$store.state.token,userID:this.userID}
		  this.$store.commit('logout',params)
	  }
  }
};
</script>

<style>
.container .logo {
  width: 180px;
}
.container .grid-content1 {
  text-align: left;
}
.container .grid-content2 {
  display: flex;
  justify-content: flex-end;
  line-height: 50px;
}
.container .showUser {
  font-size: 13px;
}
.grid-content2 input {
  height: 30px;
  width: 180px;
  text-indent: 10px;
  /*color: #eee;*/
  box-shadow: inset 0 0 1px rgba(0, 0, 0, 0.075);
  border: 1px solid rgba(0, 0, 0, 0.075);
  /*outline: none;*/
  font-size: 14px;
}
.grid-content2 .search {
  display: inline-block;
  line-height: 32px;
  width: 50px;
  margin-right: 50px;
  background: rgb(255, 153, 51);
  color: #fff;
}
.grid-content2 a {
  color: rgb(51, 51, 51);
  text-decoration: none;
  font-size: 14px;
}
.row {
  background-color: rgb(51, 51, 51);
  line-height: 50px;
}
.nav {
  width: 1200px;
  display: flex;
  margin: 0 auto;
}
.nav a {
  color: #fff;
  text-decoration: none;
  font-size: 18px;
}
.nav > li {
  padding: 0 30px;
  position: relative;
}
.nav > li.active {
  background: rgb(0, 0, 0);
}
.nav > li.active a {
  color: rgb(255, 128, 0);
}

.subnav {
  position: absolute;
  left: 0;
  top: 50px;
  background: rgb(238, 238, 238);
  width: 100%;
  display: none;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.175);
  border: 1px solid rgb(180, 180, 180);
  /*border-top: none;*/
  z-index: 5;
}
.subnav li {
  line-height: 30px;
  text-align: left;
  padding-left: 25px;
  box-sizing: border-box;
}
.subnav li a {
  font-size: 13px;
  color: rgb(61, 61, 61);
}
.nav > li:hover {
  background: rgb(0, 0, 0);
}
.nav > li:hover > a {
  color: rgb(255, 128, 0);
}
.nav > li:hover .subnav {
  display: block;
}
.subnav > li:hover {
  background-color: rgb(250, 250, 250);
}
</style>