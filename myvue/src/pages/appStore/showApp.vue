<template>
  <div class="showAppBox">
    <h2 class="title">{{title}}</h2>
    <app-info :appArr="appArr"></app-info>
    <span class="more">
      <a href="#">{{more}}</a>
    </span>
  </div>
</template>
<script>
import appInfo from "./appInfo";
export default {
  components: { appInfo },
  props: ["appArr", "title", "more"]
};
</script>
<style lang="less">
.showAppBox {
  width: 100%;
  margin-top: 20px;
  .title {
    text-align: left;
    font-weight: normal;
    font-size: 20px;
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
