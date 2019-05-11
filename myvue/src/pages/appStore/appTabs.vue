<template>
  <div class="appType">
    <el-tabs type="card">
      <el-tab-pane v-for="(pitem,pindex) in appArr" :label="pitem.type" :key="pindex">
        <div class="appType_Content" v-for="(citem,cindex) in pitem.arr" :key="cindex">
          <img :src="require('../../assets/appStore/'+citem.imgSrc)">
          <div class="content_left">
            <h4>{{citem.title}}</h4>
            <el-rate v-model="citem.start" disabled text-color="#ff9900" score-template="{value}"></el-rate>
            <span class="download">{{citem.download | calcNum}}</span>

            <el-tag
              type="info"
              v-show="citem.tags.length!=0"
              v-for="(tag,tindex) in citem.tags"
              :key="tindex"
            >{{tag}}</el-tag>
          </div>
        </div>
      </el-tab-pane>
    </el-tabs>
    <span class="more">
      <a href="#">{{more}}</a>
    </span>
  </div>
</template>
<script>
import ElementUI from "element-ui";
export default {
  props: ["appArr", "more"],
  filters: {
    calcNum: function(val) {
      if (val >= 1000000) {
        return "100万+次下载";
      } else {
        return val + "次下载";
      }
    }
  }
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
  .appType_Content {
    height: 92px;
    width: 260px;
    display: flex;
    margin-top: 15px;
    border: 1px solid #dddddd;
    box-sizing: border-box;
    text-align: left;
    padding: 10px;
    img {
      height: 70px;
      width: 70px;
    }
    .content_left {
      width: 100%;
      margin-left: 10px;
      h4 {
        font-weight: normal;
      }
      .el-rate {
        padding-top: 5px;
        display: inline;
        .el-rate__icon {
          font-size: 15px;
          margin-right: 0;
        }
      }
      .download {
        font-size: 10px;
        color: #999999;
      }
      .el-tag {
        height: 25px;
        border: 0;
        font-size: 10px;
        color: black;
        line-height: 25px;
        margin-top: 5px;
        margin-right: 5px;
      }
    }
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