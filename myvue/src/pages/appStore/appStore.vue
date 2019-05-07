<template>
  <div class="AppBox">
    <div class="sub-nav-element">
      <div class="sub_content">
        <span>
          <router-link to>应用市场</router-link>
        </span>
        <el-divider direction="vertical"></el-divider>
        <span>
          <router-link to>影视视频</router-link>
        </span>
        <el-divider direction="vertical"></el-divider>
        <span>
          <router-link to>软件应用</router-link>
        </span>
        <el-divider direction="vertical"></el-divider>
        <span>
          <router-link to>电视游戏</router-link>
        </span>
        <el-divider direction="vertical"></el-divider>
        <span>
          <router-link to>最热</router-link>
        </span>
        <el-divider direction="vertical"></el-divider>
        <span>
          <router-link to>最新</router-link>
        </span>
        <el-divider direction="vertical"></el-divider>
        <span>
          <router-link to>专题</router-link>
        </span>
        <el-divider direction="vertical"></el-divider>
        <span>
          <router-link to>一周热门</router-link>
        </span>
        <el-divider direction="vertical"></el-divider>
        <span>
          <router-link to>新秀榜</router-link>
        </span>
      </div>
    </div>
    <div class="store_position">
      <span class="ptxt">您的位置：&nbsp;</span>
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item>首页</el-breadcrumb-item>
        <el-breadcrumb-item>应用市场</el-breadcrumb-item>
      </el-breadcrumb>
      <span class="allStore">全部应用>></span>
    </div>
  </div>
</template>

<script>
import ElementUI from "element-ui";
export default {};
</script>

<style lang="less" scoped>
@import "../../../node_modules/element-ui/lib/theme-chalk/index.css";
.AppBox {
  width: 100%;
  /*height: 50px;*/
  margin: 0 auto;
  padding: 15px 0;
  overflow: hidden;
}
.sub-nav-element {
  height: 30px;
  border-bottom: 1px solid #ddd;
  background-color: #fff;
  .sub_content {
    width: 1200px;
    text-align: left;
    margin: 0 auto;
    span{
      a{
        font-size: 15px;
        color:black;
      }
    }
  }
}

.store_position {
  width: 1200px;
  margin: 10px auto;
  font-size: 12px;
  .ptxt {
    float: left;
  }
  .allStore {
    float: right;
    color: #ff8000;
  }
  .el-breadcrumb {
    float: left;
    font-size: 12px;
    line-height: 18px;
  }
}
</style>


