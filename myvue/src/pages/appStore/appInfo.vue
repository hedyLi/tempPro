<template>
  <div class="appInfoBox">
    <div class="appType_Content" v-for="(item,index) in appArr" :key="index">
      <img :src="require('../../assets/appStore/'+item.imgSrc)">
      <div class="content_left">
        <h4>{{item.title}}</h4>
        <el-rate v-model="item.start" disabled text-color="#ff9900" score-template="{value}"></el-rate>
        <span class="download">{{item.download | calcNum}}</span>
        <el-tag
          type="info"
          v-show="item.tags.length!=0"
          v-for="(tag,tindex) in item.tags"
          :key="tindex"
        >{{tag}}</el-tag>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["appArr"],
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

<style lang="less">
.appInfoBox{
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
</style>