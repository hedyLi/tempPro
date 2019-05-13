<template>
  <div class="appType">
    <el-tabs type="card">
      <el-tab-pane v-for="(pitem,pindex) in appArr" :label="pitem.type" :key="pindex">
    <app-info :appArr="pitem.arr"></app-info>
      </el-tab-pane>
    </el-tabs>
    <span class="more">
      <a href="#">{{more}}</a>
    </span>
  </div>
</template>
<script>
import ElementUI from "element-ui";
import appInfo from "./appInfo";
export default {
  components:{appInfo},
  props: ["appArr", "more"]
  
};
</script>
<style lang="less" >
@import "../../../node_modules/element-ui/lib/theme-chalk/index.css";
.appType {
  width: 100%;
  margin-top: 15px;
  .el-tabs .el-tab-pane {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .more {
    display: block;
    text-align: right;
    margin-top: 10px;
    font-size: 13px;
    color: #666666;
  }
}
</style>