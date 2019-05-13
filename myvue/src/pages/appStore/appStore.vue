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
        <el-breadcrumb-item to="/">首页</el-breadcrumb-item>
        <el-breadcrumb-item to="/AppStore">应用市场</el-breadcrumb-item>
      </el-breadcrumb>
      <span class="allStore">全部应用>></span>
    </div>
    <!-- 用电视全部安装  -->
    <div class="app-index-header">
      <!-- 全部安装left -->
      <div class="index-header-left">
        <img src="../../assets/appStore/index_header/tvStore.png" class="left_headerImg">
        <div class="header-left-market">
          <img src="../../assets/appStore/index_header/shafaLogo.ico" alt>
          <h1>沙发管家</h1>
          <dl class="dl-horizontal">
            <dt>最新版本：</dt>
            <dd>v4.8.9</dd>
          </dl>
          <dl class="dl-horizontal">
            <dt>更新时间：</dt>
            <dd>2019-8-1</dd>
          </dl>
          <dl class="dl-horizontal">
            <dt>讨论反馈：</dt>
            <dd>
              <a href="#">QQ群</a>
            </dd>
          </dl>
          <dl class="dl-horizontal">
            <dt>手机版：</dt>
            <dd>
              <a href="#">点击下载</a>
            </dd>
          </dl>
          <el-row>
            <el-col :span="24">
              <el-button type="success">下载安装</el-button>
            </el-col>
          </el-row>
        </div>
      </div>
      <!-- left_end -->
      <!-- 全部安装 right -->
      <div class="index-header-right">
        <ul>
          <li v-for="(item,index) in header_rightlist" :key="index">
            <div class="content">
              <div class="content_default">
                <img :src="require('../../assets/appStore/index_header/'+item.imgSrc)" alt>
                <h4>{{item.title}}</h4>
              </div>
            </div>
            <div class="content_hide">
              <h4 class="title">{{item.title}}</h4>
              <p class="desc">{{item.desc}}</p>
              <p class="start">
                评分:
                <el-rate
                  v-model="item.start"
                  disabled
                  text-color="#ff9900"
                  score-template="{value}"
                ></el-rate>
              </p>
              <button class="detail">详情</button>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <!-- end -->
    <div class="app-index-events">
      <a href="#">
        <img src="../../assets/appStore/event_banner/banner01.jpg">
      </a>
      <a href="#">
        <img src="../../assets/appStore/event_banner/banner02.png">
      </a>
      <a href="#">
        <img src="../../assets/appStore/event_banner/banner03.jpg">
      </a>
      <div class="event-right">
        <img src="../../assets/appStore/event_banner/qrcode.jpg">
        <ul>
          <li>扫描关注沙发管家微信</li>
          <li>
            QQ群:
            <img src="../../assets/appStore/event_banner/group.png" class="groupLogo">
          </li>
          <li>
            微博:
            <img src="../../assets/appStore/event_banner/sina.png" class="sinaLogo">
          </li>
        </ul>
      </div>
    </div>
    <!-- tab标签页+排行 start -->
    <div class="appTypeBox">
      <el-row :gutter="25">
        <el-col :span="18">
          <apptab :appArr="AppArray1" more="查看全部影视点播类应用>>"></apptab>
          <apptab :appArr="AppArray2" more="查看全部新闻阅读类应用>>"></apptab>
          <apptab :appArr="AppArray1" more="查看全部影视点播类应用>>"></apptab>
          <show-App :appArr="allAppArr" title="安卓电视最新应用" more="查看全部最新应用>>"></show-App>
        </el-col>
        <el-col :span="6">
          <app-ranking :RankArr="movieRank" title="本周影视下载排行"></app-ranking>
          <app-ranking :RankArr="appRank" title="本周软件下载排行"></app-ranking>
          <app-ranking :RankArr="movieRank" title="本周影视下载排行"></app-ranking>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import ElementUI from "element-ui";
import apptab from "./appTabs";
import appRanking from "./ranking";
import showApp from "./showApp";
export default {
  components: { apptab, appRanking, showApp },
  data() {
    return {
      header_rightlist: [],
      AppArray1: [],
      AppArray2: [],
      movieRank: [],
      appRank: [],
      allAppArr: []
    };
  },
  methods: {},
  mounted:function() {
    this.axios
      .get("/api/appStore/Alldata",)
      .then(res => {
        this.header_rightlist=res.data.headerList;
        this.AppArray1=res.data.AppArray1;
        this.AppArray2=res.data.AppArray2;
        this.appRank=res.data.appRank;
        this.movieRank=res.data.movieRank;
        this.allAppArr=res.data.allAppArr;
      });
  }
};
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
    span {
      a {
        font-size: 15px;
        color: black;
      }
    }
  }
}

.store_position {
  width: 1200px;
  margin: 10px auto;
  font-size: 12px;
  overflow: hidden;
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

.app-index-header {
  width: 1200px;
  margin: 0 auto;
  box-sizing: border-box;
  display: flex;
  text-align: center;
  .index-header-left {
    background-color: #4bb7fa;
    width: 344px;
    height: 416px;
    position: relative;
    padding: 20px 10px;
    .left_headerImg {
      position: absolute;
      top: 20px;
      left: 0;
    }
    .header-left-market {
      margin: 65px 0 0;
      text-align: center;
      h1 {
        color: white;
        font-weight: normal;
      }
      .dl-horizontal {
        display: flex;
        line-height: 25px;
        color: #fff;
        width: 65%;
        margin-left: 60px;
        a {
          color: #eafa24;
        }
        &:nth-of-type(1) {
          padding-top: 10px;
          margin-top: 15px;
          border-top: 2px solid #298dcc;
        }
        &:nth-of-type(4) {
          padding-left: 15px;
        }
      }
      .el-col {
        margin-top: 10px;
        .el-button {
          width: 80%;
        }
      }
    }
  }
  // header_left end

  .index-header-right {
    width: 840px;
    ul {
      border-right: 1px solid #dddddd;
      border-top: 1px solid #dddddd;
      overflow: hidden;
      display: flex;
      flex-wrap: wrap;
      li {
        box-sizing: border-box;
        border-left: 1px solid #dddddd;
        border-bottom: 1px solid #dddddd;
        width: 209px;
        height: 228px;
        padding: 40px;
        position: relative;
        .content_default {
          img {
            width: 110px;
            height: 110px;
          }
          h4 {
            font-weight: normal;
            padding-top: 20px;
            font-size: 14px;
          }
        }
        .content_hide {
          position: absolute;
          display: none;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          background: #fafafa;
          z-index: 3;
          box-sizing: border-box;
          padding: 20px;
          .title {
            font-size: 16px;
            font-weight: normal;
            border-bottom: none;
            text-align: left;
            height: 35px;
            line-height: 35px;
          }
          .desc {
            font-size: 12px;
            text-align: left;
            height: 32px;
            text-overflow: -o-ellipsis-lastline;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            line-clamp: 2;
            -webkit-box-orient: vertical;
          }
          .start {
            height: 35px;
            line-height: 50px;
            font-size: 15px;
            text-align: left;
            .el-rate {
              display: inline-block;
            }
          }
          .detail {
            text-align: center;
            border: #36bb6e 1px solid;
            background: #2ecc71;
            color: #fff;
            width: 60px;
            height: 30px;
            line-height: 30px;
            margin-top: 30px;
          }
        }
        &:hover {
          .content_hide {
            animation: showapphide 0.5s linear;
            display: block;
          }
        }
      }
    }
  }
  // 动画
  @keyframes showapphide {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
}
// header_right end

// index_event start
.app-index-events {
  width: 1200px;
  margin: 20px auto;
  display: flex;
  justify-content: space-between;
  a {
    img {
      width: 280px;
      height: 125px;
    }
  }
  .event-right {
    box-sizing: border-box;
    width: 280px;
    display: flex;
    border: 1px solid gainsboro;
    padding: 8px 5px;
    img {
      width: 110px;
      height: 110px;
    }
    li {
      font-size: 13px;
      text-align: left;
      line-height: 32px;
      padding-left: 10px;
      img {
        vertical-align: middle;
      }
      .groupLogo {
        height: 22px;
        width: 90px;
      }
      .sinaLogo {
        height: 22px;
        width: 62px;
      }
    }
  }
}
// index_event end

// appTypeBox start
.appTypeBox {
  width: 1200px;
  margin: 0 auto;
}
</style>


