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
          <li v-for="(item,index) in header_rightlist">
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
          <show-App :appArr='allAppArr' title='安卓电视最新应用' more='查看全部最新应用>>'></show-App>
        </el-col>
        <el-col :span="6">
          <app-ranking :RankArr='movieRank' title='本周影视下载排行'></app-ranking>
          <app-ranking :RankArr='appRank' title='本周软件下载排行'></app-ranking>
          <app-ranking :RankArr='movieRank' title='本周影视下载排行'></app-ranking>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import ElementUI from "element-ui";
import apptab from "./appTabs";
import appRanking from './ranking';
import showApp from './showApp'
export default {
  components: { apptab,appRanking,showApp },
  data() {
    return {
      header_rightlist: [
        {
          title: "优酷TV版",
          imgSrc: "right01.ico",
          desc: "全新优酷TV版，让你轻松看CIBN高清影视！",
          start: 4
        },
        {
          title: "爱奇艺TV",
          imgSrc: "right02.ico",
          desc:
            "银河奇异果由银河互联网电视公司播控和运营，集成了中国最大视频网站爱奇艺所有高清正版视频内容（爱奇艺黄金会员不能观看奇异果",
          start: 4
        },
        {
          title: "爱奇艺儿童版",
          imgSrc: "right03.ico",
          desc:
            "奇异果儿童版精选爱奇艺儿童视频内容，涵盖了早教、英语、动画、儿歌、故事、电影等类型，是专为儿童量身设计的电视端视频观看软",
          start: 4
        },
        {
          title: "BesTV优视猫",
          imgSrc: "right04.ico",
          desc: "全新视频应用，更多观看选择",
          start: 4
        },
        {
          title: "沙发助手",
          imgSrc: "right05.ico",
          desc: "超强一键智能优化，一秒全面提速！",
          start: 5
        },
        {
          title: "泰捷视频",
          imgSrc: "right06.ico",
          desc: "《奔跑吧兄弟3》,《杀破狼2》,《班淑传奇》一键观看！",
          start: 4
        },
        {
          title: "腾讯视频TV版",
          imgSrc: "right07.ico",
          desc:
            "腾讯视频TV端是南方新媒体携手腾讯视频专为客厅大屏用户量身打造的互联网电视应用，为用户提供丰富正版内容、高清流畅体验、个",
          start: 4
        },
        {
          title: "唱吧Chang Ba",
          imgSrc: "right08.ico",
          desc:
            "唱吧KTV 4亿麦霸的选择，百万曲库，没有你找不到的，只有你不会唱的。创新低延迟麦克风，一步连接电视K歌打造专业音效和完",
          start: 4
        }
      ],
      AppArray1: [
        {
          type: "影视点评",
          arr: [
            {
              title: "腾讯视频TV版",
              download: 1000001,
              start: 4,
              imgSrc: "tabs_movies/selection01.ico",
              tags: ["我只喜欢你"]
            },
            {
              title: "CIBN高清影视",
              download: 1000001,
              start: 4,
              imgSrc: "tabs_movies/selection02.ico",
              tags: ["妈妈咪呀", "最强大脑"]
            },
            {
              title: "爱奇艺TV",
              download: 1000001,
              start: 4,
              imgSrc: "tabs_movies/selection03.ico",
              tags: ["橙红时代", "延禧攻略"]
            },
            {
              title: "蜜蜂视频",
              download: 1000001,
              start: 4,
              imgSrc: "tabs_movies/selection04.ico",
              tags: ["国民大生活", "美味奇缘"]
            },
            {
              title: "4K花园",
              download: 313280,
              start: 3,
              imgSrc: "tabs_movies/selection05.ico",
              tags: []
            },
            {
              title: "京通电视管家",
              download: 1671,
              start: 1,
              imgSrc: "tabs_movies/selection06.ico",
              tags: []
            }
          ]
        },
        {
          type: "电视直播",
          arr: [
            {
              title: "斗鱼电视版",
              download: 1000001,
              start: 4,
              imgSrc: "tabs_movies/live01.ico",
              tags: ["美女直播", "户外直播"]
            },
            {
              title: "虎牙TV版",
              download: 1000001,
              start: 5,
              imgSrc: "tabs_movies/live02.ico",
              tags: ["蓝光高清", "游戏直播"]
            },
            {
              title: "小鹰直播",
              download: 1000001,
              start: 4,
              imgSrc: "tabs_movies/live03.ico",
              tags: []
            },
            {
              title: "创新直播",
              download: 57303,
              start: 4,
              imgSrc: "tabs_movies/live04.ico",
              tags: []
            },
            {
              title: "咪咕直播",
              download: 488659,
              start: 4,
              imgSrc: "tabs_movies/live05.ico",
              tags: []
            },
            {
              title: "星火直播",
              download: 371898,
              start: 4,
              imgSrc: "tabs_movies/live06.ico",
              tags: []
            }
          ]
        },
        {
          type: "特色视频",
          arr: [
            {
              title: "梨园行",
              download: 24181,
              start: 3,
              imgSrc: "tabs_movies/feature01.ico",
              tags: ["戏曲", "国风"]
            },
            {
              title: "视开全景",
              download: 109235,
              start: 2,
              imgSrc: "tabs_movies/feature02.ico",
              tags: []
            },
            {
              title: "梨视频",
              download: 2663,
              start: 4,
              imgSrc: "tabs_movies/feature03.ico",
              tags: []
            },
            {
              title: "狗狗TV",
              download: 100612,
              start: 4,
              imgSrc: "tabs_movies/feature04.ico",
              tags: []
            },
            {
              title: "CIBN禅机",
              download: 31003,
              start: 3,
              imgSrc: "tabs_movies/feature05.ico",
              tags: []
            },
            {
              title: "火影乐享",
              download: 4953,
              start: 1,
              imgSrc: "tabs_movies/feature06.ico",
              tags: []
            }
          ]
        }
      ],
      AppArray2: [
        {
          type: "儿童教育",
          arr: [
            {
              title: "同步小学课堂",
              download: 3695,
              start: 3,
              imgSrc: "tabs_lives/child01.ico",
              tags: ['课程辅导']
            },
            { title: "小小优趣", download: 4413, start: 4, imgSrc: "tabs_lives/child02.ico", tags: ['0-3岁','4-6岁'] },
            { title: "格灵课堂", download: 9214, start: 3, imgSrc: "tabs_lives/child03.ico", tags: ['课程辅导'] },
            { title: "叫叫识字", download: 86681, start: 4, imgSrc: "tabs_lives/child04.ico", tags: ['0-3岁','儿童早教'] },
            { title: "乐学教育", download: 660414, start: 4, imgSrc: "tabs_lives/child05.ico", tags: ['课程辅导'] },
            { title: "贝瓦儿歌", download: 1000001, start: 4, imgSrc: "tabs_lives/child06.ico", tags: ['儿童早教','4-6岁'] }
          ]
        },
        {
          type: "美食健康",
          arr: [
            { title: "轻加", download: 2932, start: 3, imgSrc: "tabs_lives/health01.ico", tags: [] },
            { title: "天天健身", download: 1000001, start: 3, imgSrc: "tabs_lives/health02.ico", tags: [] },
            { title: "瑜伽TV", download: 513433, start: 3, imgSrc: "tabs_lives/health03.ico", tags: [] },
            { title: "小腰街舞", download: 10803, start: 3, imgSrc: "tabs_lives/health04.ico", tags: [] },
            { title: "一首瑜伽", download: 3721, start: 3, imgSrc: "tabs_lives/health05.ico", tags: [] },
            { title: "即刻运动", download: 1000001, start: 3, imgSrc: "tabs_lives/health06.ico", tags: ['健身运动'] }
          ]
        },
        {
          type: "影视播放",
          arr: [
            { title: "咪咕爱唱", download: 1000001, start: 4, imgSrc: "tabs_lives/video01.ico", tags: [] },
            { title: "唱吧", download: 6251, start: 4, imgSrc: "tabs_lives/video02.ico", tags: [] },
            { title: "HIFI音乐", download: 45595, start: 4, imgSrc: "tabs_lives/video03.ico", tags: [] },
            { title: "金麦客专业K歌", download: 8852, start: 3, imgSrc: "tabs_lives/video04.ico", tags: [] },
            { title: "云视听音乐", download: 301, start: 3, imgSrc: "tabs_lives/video05.ico", tags: [] },
            { title: "酷狗音乐", download: 209058, start: 5, imgSrc: "tabs_lives/video06.ico", tags: [] }
          ]
        },
        {
          type: "使用工具",
          arr: [
            { title: "华广智屏", download: 13, start: 1, imgSrc: "tabs_lives/tool01.ico", tags: [] },
            { title: "橙子投屏", download: 1595, start: 2, imgSrc: "tabs_lives/tool02.ico", tags: [] },
            { title: "多动屏", download: 9389, start: 3, imgSrc: "tabs_lives/tool03.ico", tags: [] },
            { title: "一键上屏", download: 5789, start: 2, imgSrc: "tabs_lives/tool04.ico", tags: [] },
            { title: "TeamBoard", download: 2773, start: 3, imgSrc: "tabs_lives/tool05.ico", tags: [] },
            { title: "谈吧", download: 215, start: 2, imgSrc: "tabs_lives/tool06.ico", tags: [] }
          ]
        },
        {
          type: "便捷生活",
          arr: [
            { title: "云视听爱游", download: 24, start: 3, imgSrc: "tabs_lives/lives01.ico", tags: [] },
            { title: "和家相册", download: 6819, start: 3, imgSrc: "tabs_lives/lives02.ico", tags: [] },
            { title: "电视淘宝", download: 553199, start: 4, imgSrc: "tabs_lives/lives03.ico", tags: [] },
            { title: "芝士课堂", download: 64, start: 1, imgSrc: "tabs_lives/lives04.ico", tags: [] },
            { title: "购物家", download: 254, start: 3, imgSrc: "tabs_lives/lives05.ico", tags: [] },
            { title: "品漫会", download: 130, start: 3, imgSrc: "tabs_lives/lives06.ico", tags: [] }
          ]
        },
        {
          type: "新闻阅读",
          arr: [
            { title: "漫漫漫画", download: 38021, start: 3, imgSrc: "tabs_lives/read01.ico", tags: [] },
            { title: "蜻蜓FM", download: 30748, start: 4, imgSrc: "tabs_lives/read02.ico", tags: [] },
            { title: "今今乐道", download: 1760, start: 3, imgSrc: "tabs_lives/read03.ico", tags: [] },
            { title: "头版头条", download: 994549, start: 4, imgSrc: "tabs_lives/read04.ico", tags: [] },
            { title: "中华军事", download: 88677, start: 5, imgSrc: "tabs_lives/read05.ico", tags: [] },
            { title: "有趣岛漫画", download: 59449, start: 3, imgSrc: "tabs_lives/read06.ico", tags: [] }
          ]
        }
      ],
      movieRank:['腾讯视频TV版','爱奇艺TV','优酷TV','电视猫视频','芒果TV','HDP直播','电视家3.0','哔哩哔哩TV版','电视家2.0','虎牙TV版'],
      appRank:['电视必备','沙发桌面','QQ影音TV版','乐视投屏','UC浏览器TV版','电视家浏览器','酷狗音乐','沙发助手','百度电视助手','全民K歌'],
      allAppArr:[{ title: "华广智屏", download: 13, start: 1, imgSrc: "tabs_lives/tool01.ico", tags: [] },
            { title: "橙子投屏", download: 1595, start: 2, imgSrc: "tabs_lives/tool02.ico", tags: [] },
            { title: "多动屏", download: 9389, start: 3, imgSrc: "tabs_lives/tool03.ico", tags: [] },
            { title: "一键上屏", download: 5789, start: 2, imgSrc: "tabs_lives/tool04.ico", tags: [] },
            { title: "TeamBoard", download: 2773, start: 3, imgSrc: "tabs_lives/tool05.ico", tags: [] },
            { title: "谈吧", download: 215, start: 2, imgSrc: "tabs_lives/tool06.ico", tags: [] },
            { title: "漫漫漫画", download: 38021, start: 3, imgSrc: "tabs_lives/read01.ico", tags: [] },
            { title: "小小优趣", download: 4413, start: 4, imgSrc: "tabs_lives/child02.ico", tags: ['0-3岁','4-6岁'] },
            { title: "格灵课堂", download: 9214, start: 3, imgSrc: "tabs_lives/child03.ico", tags: ['课程辅导'] },
            { title: "叫叫识字", download: 86681, start: 4, imgSrc: "tabs_lives/child04.ico", tags: ['0-3岁','儿童早教'] },
            { title: "乐学教育", download: 660414, start: 4, imgSrc: "tabs_lives/child05.ico", tags: ['课程辅导'] },
            { title: "贝瓦儿歌", download: 1000001, start: 4, imgSrc: "tabs_lives/child06.ico", tags: ['儿童早教','4-6岁'] }]
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
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


