<template>
  <div class="rankingBox">
    <h2 class="title">{{title}}</h2>
    <ul class="rank_content">
      <li v-for="(item,index) in RankArr" :key="index">
        <span class="num">{{index+1}}</span>
        <span class="name">{{item}}</span>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: ["RankArr", "title"]
};
</script>
<style lang="less">
.rankingBox {
  border: 1px solid #dddddd;
  text-align: left;
  margin-top: 20px;
  .title {
    padding: 10px 15px;
    font-weight: normal;
    line-height: 16px;
    font-size: 16px;
    background-color: #f5f5f5;
    border-bottom: 1px solid #dddddd;
  }
  .rank_content {
      margin: 15px 0;
    li {
      padding: 6px 0px;
      text-align: left;
      font-size: 12px;
      .num {
        display: block;
        float: left;
        width: 20px;
        height: 20px;
        line-height: 20px;
        text-align: center;
        background-color: #e6e6e6;
        margin-left: 16px;
      }
      .name{
          margin-left: 10px;
      }
    }
    li:nth-of-type(1) {
      .num {
        background: #ff0000;
        color: #fff;
      }
    }
    li:nth-of-type(2) {
      .num {
        background: #ff6600;
        color: #fff;
      }
    }
    li:nth-of-type(3) {
      .num {
        background: #ff9933;
        color: #fff;
      }
    }
  }
}
</style>
