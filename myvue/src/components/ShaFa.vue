<template>
  <div class="sofa">
  	  <!--轮播图-->
		  <div class="banner">
		  	<div class="container">
		  		<div class="bleft">
			  		<h1>千万家庭最信赖的电视应用市场</h1>
			  		<span class="sdesc">沙发管家帮助您在海量的安卓应用中精准搜索，高速下载，云端管理</span>
			  		<p class="pdownload"><a href="">下载沙发管家  ( V4.8.9 )</a> <a	href="#">视频介绍</a></p>
			  		<span class="dowloadnow">立即下载</span>
			  		<h3>沙发管家安装教程</h3>
			  		<p class="search"> 
			  			<input type="text" placeholder="选择智能电视/电视盒子品牌" /><input type="text" placeholder="输入型号" />
			  		</p>
			  		<a href="" class="no">没有我的产品型号，获取更多帮助</a>
			  	</div>
			  	<div class="bright"> 
			  		<div class="lunbo">
			  			<template>
							  <el-carousel :interval="3000" arrow="never" indicator-position="none" height="265px" >
							    <el-carousel-item v-for="item in 2" :key="item">  
							    </el-carousel-item>
							  </el-carousel>
								</template> 
			  		</div>
			  		  	 
		    	</div> 
		  	</div>
		  </div>
		  <!--轮播图end-->
		  <!--产品大全-->
		  <div class="proList container">
		  	<el-row :gutter="20">
				  <el-col :span="16">
				  	<div class="proleft"> 
				  		<h2>沙发网产品大全</h2>
				  		<ul>
				  			<li>
				  				 <p class="picon">
				  				 	<img src="../assets/index/icon1.png" alt="" />
				  				 </p>
				  				 <div class="ddesc">
				  				 	 <h4>沙发管家</h4>
				  				 	 <p>
				  				 	 	为电视盒子提供超多款完美适合在电视盒子上使用的影视，软件，游戏。
				  				 	 </p>
				  				 	 <a href="#">立即下载</a> | <a href="#">官方网站</a>
				  				 </div>
				  			</li>
				  			<li>
				  				  <p class="picon">
				  				 	<img src="../assets/index/icon2.png" alt="" />
				  				 </p>
				  				 <div class="ddesc">
				  				 	 <h4>沙发桌面</h4>
				  				 	 <p>
				  				        专为电视盒子量身设计，电视直播功能、影视点播功能、应用中心功能，沙发桌面一次性搞定
				  				 	 </p>
				  				 	 <a href="#">立即下载</a> | <a href="#">官方网站</a>
				  				 </div>
				  			</li>
				  			<li>
				  				  <p class="picon">
				  				 	<img src="../assets/index/icon3.png" alt="" />
				  				 </p>
				  				 <div class="ddesc">
				  				 	 <h4>沙发电视助手</h4>
				  				 	 <p>
				  				 	 	智能极速扫描，实现超强深度清理！轻松一次点击，瞬间清除缓存垃圾！
				  				 	 </p>
				  				 	 <a href="#">立即下载</a> | <a href="#">官方网站</a>
				  				 </div>
				  			</li>
				  			<li>
				  				 <p class="picon">
				  				 	<img src="../assets/index/icon4.png" alt="" />
				  				 </p>
				  				<div class="ddesc">
				  				 	 <h4>沙发管家手机版</h4>
				  				 	 <p>
				  				 	   实现了局域网内用手机给智能机顶盒安装第三方应用，轻松看直播看点播玩游戏。
				  				 	 </p>
				  				 	 <a href="#">立即下载</a> | <a href="#">官方网站</a>
				  				 </div>
				  			</li>
				  		</ul>
				  	</div>
				  </el-col>
				  <el-col :span="8">
				  		<div class="proRight">
				  			<div class="ptop">
				  			<img src="../assets/index/qrcode.jpg" alt="" class="qrcode" />
				  			<ul>
				  				<li>扫描关注沙发管家微信</li>
				  				<li>QQ群: <img src="../assets/index/group.png" alt="" />  </li>
				  				<li>微博:  <img src="../assets/index/sina.png" alt="" /> </li>
				  			</ul>
				  		</div>
				  		<div class="pbottom">
				  			<img src="../assets/index/manager.jpg"/>
				  		</div>
				  		</div>
				  </el-col>
				</el-row>
		  </div>
		  <!--产品大全end-->
		  <!--广告-->
		  <div class="guanggao container">
		  	<el-row>
				  <el-col :span="24"><img src="../assets/index/guangao1.jpg" alt="" /></el-col>
				</el-row> 		  	
		  </div>
		  <!--广告end-->
		  <!--电视应用-->
		  <div class="tvapplication container">
		  	<div class="title">
		  		<h2>精选安卓电视应用</h2>
		  		<a href="#">全部应用>></a> 
		  	</div> 
		  	<ul class="applist">
		  		<li v-for='(item,index) in apparr'>
		  			<div class="content">
		  				<div class="appdefault">
			  				<img :src="require('../assets/index/'+item.imgsrc)" class="appimg" alt="" width="100px" height="100px" /> 
			  				<h4>{{item.title}}</h4>
			  			</div> 
	        		<div class="apphide">
				  				<h3 class="title">{{item.title}}</h3>
				  				<p class="desc">{{item.desc}}</p>
				  				<p class="start"> <el-rate
										  v-model="item.start"
										  disabled
										 
										  text-color="#ff9900"
										  score-template="{value}">
										</el-rate>
				  				</p>
				  				<button class="detail">详情</button>
				  		</div>  
		  			</div>
		  		</li>
		  	</ul> 
		  	<button class="more">查看更多应用</button>
		  </div>
		  <!--电视应用end-->
		  <!--热门产品安装指南 + 热门设备推荐-->
		  <div class="hotlist container">
		  		<el-row :gutter="20">
		  			<el-col :span="16">
		  				<div class="hotleft">
		  					 <h2>热门产品安装指南</h2>
		  					 <ul class="hotpro">
		  					 	  <li v-for="(item,index) in hotproarr">
		  					 	  	 <p class="hotimg">
		  					 	  	 	<img :src="require('../assets/index/'+item.imgsrc)" alt="" />
		  					 	  	 </p>
		  					 	  	 <p class="hottitle">
		  					 	  	 	<a href="#">{{item.name}}</a>
		  					 	  	 	<a href="#"></a>
		  					 	  	 </p>
		  					 	  </li>
		  					 </ul>
		  				</div>
		  			</el-col>
				  	<el-col :span="8">
							<div class="hotright">
		  					<h2>热门设备推荐<span>查看更多>></span></h2>
		  					
		  					<div class="hotdevice">
		  							<el-tabs v-model="activeName" @tab-click="handleClick">
									    <el-tab-pane label="智能电视" name="first">
									    	<!--内容-->
									    	 <ul>
									    	 	<li v-for="(item,index) in hotdevice1" @mouseenter="showcurr(index)">
									    	 		<a href="#" class="devicetitle">
									    	 			<span class="num">{{index+1}}</span>
									    	 			<span class="title">{{item.name}}</span>
									    	 			<span class="price">{{item.price}}</span>
									    	 		 
									    	 		</a>
									    	 		<div class="desc" v-show="item.iscur" > 
									    	 			<img :src="require('../assets/index/'+item.imgsrc)" alt="" />
									    	 			<div>
									    	 				<p class="pdesc">{{item.desc}}</p> 
									    	 				<button>查看</button>
									    	 			</div>
									    	 		</div>
									    	 	</li>
									    	 </ul> 
												<!--内容end-->
									    </el-tab-pane>
									    <el-tab-pane label="电视盒子" name="second">
									    	<!--内容-->
									    	 <ul>
									    	 	<li v-for="(item,index) in hotdevice2" @mouseenter="showcurr2(index)">
									    	 		<a href="#" class="devicetitle">
									    	 			<span class="num">{{index+1}}</span>
									    	 			<span class="title">{{item.name}}</span>
									    	 			<span class="price">{{item.price}}</span>
									    	 		 
									    	 		</a>
									    	 		<div class="desc" v-show="item.iscur" > 
									    	 			<img :src="require('../assets/index/'+item.imgsrc)" alt="" />
									    	 			<div>
									    	 				<p class="pdesc">{{item.desc}}</p> 
									    	 				<button>查看</button>
									    	 			</div>
									    	 		</div>
									    	 	</li>
									    	 </ul> 
												<!--内容end-->
									    </el-tab-pane> 
									  </el-tabs>
		  					</div>

		  				</div>
				  	</el-col>
		  		</el-row>
		  </div>
 			<!--热门产品安装指南 + 热门设备推荐end-->
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'test msg',
      activeName: 'first', 
      activeName2: '1',
      value:1,
      apparr:[
       {title:'腾讯视频TV版',imgsrc:'application01.ico',desc:'腾讯视频TV端是南方新媒体携手腾讯视频专为客厅大屏用户量身打造的互联网电视应用，为用户提供丰富正版内容、高清流畅体验、个',start:5},
       {title:'电视猫视频',imgsrc:'application02.ico',desc:'为智能电视&盒子打造的专业视频APP',start:3.5},
       {title:'才智小天地',imgsrc:'application03.ico',desc:'由国家汉办权威认证，入年度向中国家长推荐使用学习课程目录中。',start:2.5},
       {title:'优酷TV版',imgsrc:'application04.ico',desc:'全新优酷TV版，让你轻松看CIBN高清影视！',start:4},
       {title:'沙发助手',imgsrc:'application05.ico',desc:'超强一键智能优化，一秒全面提速！',start:4.5},
       {title:'泰捷视频',imgsrc:'application06.ico',desc:'《奔跑吧兄弟3》,《杀破狼2》,《班淑传奇》一键观看！',start:3.5},
       {title:'爱奇艺TV',imgsrc:'application07.ico',desc:'银河奇异果由银河互联网电视公司播控和运营，集成了中国最大视频网站爱奇艺所有高清正版视频内容（爱奇艺黄金会员不能观看奇异果',start:5},
       {title:'爱奇艺儿童版',imgsrc:'application08.ico',desc:'奇异果儿童版精选爱奇艺儿童视频内容，涵盖了早教、英语、动画、儿歌、故事、电影等类型，是专为儿童量身设计的电视端视频观看软',start:5},
       {title:'南瓜电影',imgsrc:'application09.ico',desc:'南瓜电影是专注于精品影视剧的视频服务平台，通过精选的内容、极简的交互为社会精英提供专业的视听体验。只为会员而生，就要给你',start:5},
       {title:'沙发桌面',imgsrc:'application10.ico',desc:'一款真正帮助用户将智能电视发挥到极致的电视桌面应用。',start:4},
       {title:'HDP直播',imgsrc:'application11.ico',desc:'高峰时段直播卡顿较少,体育台,卫视台高清,还有韩国热门电视台',start:5},
       {title:'云视听小电视',imgsrc:'application12.ico',desc:'云视听小电视是南方新媒体与哔哩哔哩合作推出的一款互联网电视应用，集结精彩番剧、优秀国创、经典影视、硬核游戏、数码评测、原',start:5}
      ],
      hotproarr:[
       {name:'天猫魔盒M13',imgsrc:'hotpro01.jpg',price:200,desc:''},
       {name:'华为荣耀盒子Pro',imgsrc:'hotpro02.jpg',price:200,desc:''},
       {name:'小米盒子3',imgsrc:'hotpro03.jpg',price:200,desc:''},
       {name:'KKTV',imgsrc:'hotpro04.jpg',price:200,desc:''},
       {name:'微鲸电视',imgsrc:'hotpro05.jpg',price:200,desc:''},
       {name:'小米电视3',imgsrc:'hotpro06.jpg',price:200,desc:''}
      ],
      hotdevice1:[
      	{name:'小米电视3s 48英寸',imgsrc:'hotdevice101.png',price:2699,iscur:true,desc:'48英寸, 超高清4K, 硬屏, LED, 四核 CPU Cortex A9 1.45GHz + 六核 GPU Mali 450, 1GB, 8GB, MIUI系统（基于Android）, 逐行扫描, 杜比, 杜比音效技术- 虚拟环绕声- 低音增强- 对白增强, 一级能效'},
      	{name:'夏普lcd-50su560a',imgsrc:'hotdevice102.png',price:3599,iscur:false,desc:'50英寸, 超高清4K, LED, 三级能效'},
      	{name:'飞利浦50PUF6061/T3',imgsrc:'hotdevice103.png',price:2899,iscur:false,desc:'50英寸, 超高清4K, LED, 4GB, 安卓 5.1, 逐行扫描, 三级能效'},
      	{name:'小米L55M5-AA',imgsrc:'hotdevice104.png',price:3699,iscur:false,desc:'55英寸, 超高清4K, LED, Amlogic T968 Cortex A53 四核 1.8GHz, 2GB DDR3 双通道, 三级能效'},
      	{name:'海信LED55EC520UA',imgsrc:'hotdevice105.png',price:3099,iscur:false,desc:'55英寸, 超高清4K, 硬屏, LED, 四核 CPU Cortex A53 1.2GHz +六核 GPU Mali450 +NEON四核协处理器, 1.5GB, 4GB, SMART TV操作系统（VIDAA界面）, 逐行扫描, Dolby解码+DTS, 五段式均衡, 二级能效'},
      	{name:'乐视超4 X50',imgsrc:'hotdevice106.png',price:2499,iscur:false,desc:'50英寸, 超高清4K, 硬屏, LED, 四核 CPU 64位（Cortex A72x2+A53x2）1.7GHz + GPU Mali T820 MP3 M-Genuine S1 Pro臻彩引擎, 3GB, 16GB, EUI5.8 (基于Android6.0), 逐行扫描, 支持Dolby Audio音效技术, DD+/Dolby Tru HD音频解码 DTS HD音频解码, 二级能效'},
      	{name:'创维42X5',imgsrc:'hotdevice107.png',price:2099,iscur:false,desc:'42英寸, 逐行扫描, 三级能效'}
      ],
      hotdevice2:[
      	{name:'华为荣耀盒子Pro 增强版',imgsrc:'hotdevice201.png',price:429,iscur:true,desc:'华为海思四核专业机顶盒芯片, 2G, Android, 4K，1080P，1080I，720P, HDMI, AV接口, 105 x 105 x 21.6毫米, 0.56千克'},
      	{name:'海美迪海美迪 H7四代',imgsrc:'hotdevice202.png',price:399,iscur:false,desc:'Amlogic S912, 2GB DDR3, Android 6.0（全新通过Google CTS认证）, 4K（3840*2160 @60帧/秒）；1080p/720p/576p/480p/PAL/NTSC, HDMI2.0接口，CVBS复合视频, 左右立体声、SPDIF数字光纤, 158.8mm*104.7mm*23.6MM, 0.7kg'},
      	{name:'天猫魔盒3Pro',imgsrc:'hotdevice203.png',price:299,iscur:false,desc:'八核 CPU A53 64位 2GHz + 多核 GPU Mali-820 mp3 750MHz, 2GB, 16GB, YunOS for TV, 3840x2160, 100*100*20mm, 193g'},
      	{name:'小米盒子 3S',imgsrc:'hotdevice204.png',price:299,iscur:false,desc:'Amlogic S905X Cortex-A53  四核 64-bit 2.0GHz + Mali-450,3+2核 750MHz, 2GB DDR3, 8GB eMMC5.1 高速闪存, 通过Google CTS认证的安卓6.0系统, 4K(3840 x 2160) HDR, USB 2.0 x 2个；HDMI 2.0 x 1个, 长度：101mm 宽度：101mm 厚度：19.5mm, 176.5g'},
      	{name:'天猫魔盒M17',imgsrc:'hotdevice205.png',price:229,iscur:false,desc:'四核 CPU A53 64位 2GHz + GPU Mali-450 MP5, 1GB, 16GB, YunOS TV, 3840x2160, 100*100*20mm, 200g'},
      	{name:'乐视U4 Pro',imgsrc:'hotdevice206.png',price:499,iscur:false,desc:'CPU Amlogic S905 Cortex-A53，Quad-Core 64-bit 2.0GHz +GPU 五核Mali-450 @750Mhz, 16GB，eMMC, 16GB，eMMC, Android 6.0, 4K，1080P，1080I，720P, USB2.0x1个，HDMI2.0x1个, 100*100*10.8mm, 157g'},
      	{name:'小米盒子3代 增强版',imgsrc:'hotdevice207.png',price:419,iscur:false,desc:'MT8693 2核Cortex-A72 + 4核Cortex-A53 64位 2.0GHz, 2GB LPDDR3 双通道, 通过Google CTS认证的安卓5.1系统, 4K(3840 X 2160), USB 2.0 x 2个；HDMI 2.0 x 1个, 长度：100mm 宽度：100mm 厚度：25mm 脚垫厚度：0.8mm, 190g'}
      ]
    }
  },
  methods:{
  	  //热门设备推荐-面板切换事件
  		handleClick(tab, event) {
//      console.log(tab, event);
     },
     showcurr(index){ 
     	  for(let temp in this.hotdevice1){
     	  	this.hotdevice1[temp].iscur = false; 
     	  }
     	  this.hotdevice1[index].iscur = true; 
     },
     showcurr2(index){ 
     	  for(let temp in this.hotdevice2){
     	  	this.hotdevice2[temp].iscur = false; 
     	  }
     	  this.hotdevice2[index].iscur = true; 
     }
  }
}
</script>
 
<style scoped lang="less"> 
   .banner {  
   	height: 380px;
			background-color: rgb(235, 235, 235);
			/*margin-bottom: 20px;*/
   }
    .banner  .container{
    	display: flex;
    }
   .banner .bleft{ 
     	width: 50%;
     	text-align: left;
   }
   .banner .bleft h1{
   	font-size: 38px;
   	font-weight: 400;
   }
   .banner .bleft .sdesc{
   	 font-size:13px;
   	 color: rgb(183, 183, 183); 
   }
   .banner .bleft p.pdownload{
   	padding-top: 30px;
   }
   .banner .bleft p.pdownload a:first-child{
   	  font-size: 18px;
   	  color: rgb(10, 101, 49);
   }
   .banner .bleft p.pdownload a:last-child{
   	  text-decoration: underline;
   	  font-size: 12px;
   	  color: rgb(252, 133, 18);
   }
   .banner .bleft .dowloadnow{
   	 display: block;
   	 height: 45px;
   	 line-height: 45px;
   	 width: 380px;
   	 text-align: center;
   	 color: #fff;
   	 font-size: 20px;
   	 background-color: rgb(19, 167, 81);
   	 /*文字间距*/
   	 letter-spacing: 3px;
   	 margin:10px 0 30px 0;
   }
   .banner .bleft h3{
   	font-size: 18px;
   	font-weight: 400;
   }
   .banner .bleft p.search{
   	 line-height: 40px;
   }
   .banner .bleft p.search input{
   	 height: 30px;
   	 text-indent: 1em;
   	 margin-bottom: 10px;
   }
   .banner .bleft p.search input:first-child{
   	 width: 220px;
   }
   .banner .bleft p.search input:last-child{
   	 width: 180px;
   	 margin-left: 2px;
   }
   .banner .bleft .no{
   	 color: rgb(0, 132, 187);
   	 text-decoration: underline;
   	 font-size: 14px;
   }
   .banner .bright{ 
   	 	width: 45%;
   	 	padding: 4px;
   	 	background: url(../assets/index/tvbg.png) center center no-repeat;
   	 	background-size: contain;
   	 	position: relative;
   } 
   .banner .bright .lunbo{
   	position: absolute;
   	left: 40px;
   	top: 4px;
   	height: 265px;
   	width: 468px;
   	overflow: hidden;
   }
  .el-carousel__item:nth-child(2n) {
    background: url(../assets/index/banner1.jpg) center center no-repeat;
     background-size: cover;
  }
  
  .el-carousel__item:nth-child(2n+1) {
   background: url(../assets/index/banner2.jpg) center center no-repeat;
   background-size: cover;
  }
  
  /*产品大全*/
 .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
 
 .proleft{
  	 border: 1px solid #e4e4e4;
  	 background: #fafafa;
  	 h2{
  	 		font-size:20px;
  	 		/*font-weight: normal;*/
  	 		text-align: left;
  	 		padding-left:20px;
  	 		line-height: 65px;
  	 }
  	 ul{
  	 	  overflow: hidden;  
  	 	  padding-left: 20px;
  	 	  li{
  	 	  	 float: left;
  	 	  	 width:50%;
  	 	  	 box-sizing: border-box;
  	 	  	 height: 130px;
  	 	  	 display: flex;
  	 	  	 text-align: left;
  	 	  	 margin:5px 0;
  	 	  	 .picon img{
  	 	  	 	  width: 110px;
  	 	  	 	  height: 110px;
  	 	  	 }
  	 	  	 .ddesc{ 
  	 	  	  	padding-left: 8px;
  	 	  	 	 h4{
  	 	  	 	 	 font-size:18px; 
  	 	  	 	 }
  	 	  	 	 p{
  	 	  	 	 	 font-size: 14px;
  	 	  	 	 	 /*width: 80%;*/
  	 	  	 	 	 padding-right:30px;
  	 	  	 	 	 color:#9d9e9e;
  	 	  	 	 	 line-height: 18px;
  	 	  	 	 	 height: 60px; 
  	 	  	 	 }
  	 	  	 	 a{
  	 	  	 	 	 color: #fe8001;
  	 	  	 	 	 font-size: 14px;
  	 	  	 	 }
  	 	  	 }
  	 	  }
  	 } 
  }
  .proRight{
  		width: 100%;
  		/*border:1px solid blue;*/
  		box-sizing: border-box;
  		/*padding: 0 15px;*/
  		.ptop{   
			   	border:1px solid gainsboro;  	
			   	display: flex; 
			   	padding:5px 0;
			   	.qrcode{
			   		width: 100px;
			   		height: 100px;
			   	}
			   	li{
			   		font-size: 14px;
			   		text-align: left;
			   		line-height: 32px;
			   		padding-left: 10px;
			   		img{
			   			height: 20px;
			   		}
			   	}
			  }
			  
		.pbottom{
		  	margin-top: 15px; 
		 		img{
		 			width: 100%;
		 			height: 220px; 
		 		}
		  }
  }  
  .guanggao{
  	margin: -20px auto;
  }
  .guanggao img{
  	width: 100%; 
  } 
  
  /*tvapplication 列表*/
  .tvapplication{
  	.title{
  		border-bottom:1px solid #eeeeee;
  		line-height:45px;
  		overflow:hidden;
  		h2{
  			font-size:20px;
  			font-weight: normal;
  			text-align: left;
  			float: left;
  		}
  		a{
  			color: #ffb462;
  			font-size: 12px;
  			float: right;
  		}
  	}
  	.applist{
  		overflow: hidden;
  		margin-top: 15px;
  		display:flex;
  		flex-wrap: wrap;
  		justify-content:space-between;
  		li{  
  			margin: 12px 0px; 
  			border:1px solid #eee;
  		  width: 175px;
  			height: 202px;
  			background: #fafafa;
  			padding: 10px;
  			box-sizing: border-box; 
  			position: relative; 
  			.appdefault{
  				.appimg{
  					width: 128px;
  					height: 128px;
  				}
  				h4{
  					font-weight: normal;
  					padding-top: 10px;
  					font-size: 14px;
  				}
		  	}
		  	.apphide{
		 			position: absolute;
		 			display: none; 
		 			left: 0;
		 			top: 0;
		 			width: 100%;
		 			height: 100%;
		 			background: #fafafa;
		 			z-index: 3;
		 			box-sizing: border-box;
		 			padding: 5px; 
		 			.title{
		 				font-size:16px;
		 				font-weight: normal;
		 				color:#ffb366; 
		 				border-bottom: none;
		 				text-align: left;
		 				height: 35px;
		 				line-height: 35px;  
		 			}
		 			.desc{
		 				font-size: 13px; 
		 				text-align: left;
		 				height: 85px;
		 				overflow: hidden;
		 			
		 			}
		 			.start{
		 					height: 35px;
		 					line-height: 35px; 
		 					color:#ffb366; 
		 					font-size: 15px; 
		 					text-align: left;
		 			}
		 			.detail{
		 				text-align: center;
		 				border: #36bb6e 1px solid;
		 			  background: #2ecc71;
		 			  color: #fff;
		 			  width: 60px;
		 			  height: 35px; 
		 					line-height: 35px;
		 			}
		 		} 
		  	&:hover .apphide{ 
		  			animation:showapphide .5s linear;
		  			display: block;
		  	} 
  		} 
  	}
  	.more{
  				color: #fff;
		 			background: #ff9933;
		 			border: none;
		 			font-size: 16px;
		 			width: 120px;
		 			height: 35px;
		 			float: right;
		 		}
  }
  /*tvapplication 动画*/
  @keyframes showapphide{
  	from{  
  			opacity :0;
  	}
  	to{  
  			opacity :1;
  	}
  }
  /*热门产品*/
  .titlestyle{
  	font-size: 18px;
 	  text-align: left;
 	  line-height: 45px;
  }
 .hotlist{
 	  .hotleft{
 	  	 h2{
 	  	 	 .titlestyle;
 	  	 }
 	  	 ul.hotpro{
 	  	 	border: 1px solid lightgray;
 	  	 	display: flex;
 	  	 	flex-wrap: wrap;
 	  	 	justify-content: space-around;
 	  	 	align-items: center; 
 	  	 	height:560px ;
 	  	 }
 	  	 li{
 	  	 	 border: 1px solid lightgray;
 	  	 	 width: 240px;
 	  	 	 height: 240px;
 	  	 	 /*margin: 10px;*/
 	  	 	.hotimg{
 	  	 		border-bottom:1px solid lightgray;
 	  	 		width:90%;
 	  	 		margin:0 auto;
 	  	 		img{ 
	 	  	 		width: 100%;
	 	  	 	}
 	  	 	}
 	  	 	.hottitle{
 	  	 		padding-top: 10px;
 	  	 		text-align: left;
 	  	 		width:90%;
 	  	 		margin:0 auto;
 	  	 		a:first-child{ 
 	  	 			color: #000;
 	  	 			font-size: 18px;
 	  	 			&:hover{
 	  	 				text-decoration: underline;
 	  	 			}
 	  	 		}
 	  	 		a:last-child{
 	  	 			float: right;
 	  	 			background: url(../assets/index/anzhuangzhinan.png) no-repeat;
 	  	 			height: 40px;
 	  	 			width: 40px;
 	  	 		}
 	  	 	}
 	  	 	
 	  	 }
 	  }
 	  .hotright{
 	  	h2{
 	  		.titlestyle;
 	  		span{
 	  			float: right;
 	  			font-size: 14px;
 	  			color: lightgray;
 	  			font-weight: normal;
 	  		}
 	  	}
 	  	.hotdevice{
 	  		border: 1px solid lightgray;
 	  		height:560px ;
 	  		box-sizing: border-box;
 	  		padding: 10px 20px; 
 	  		li{
 	  			padding: 5px 0px;
 	  			margin:0 auto;
 	  			min-height: 35px; 
 	  			text-align: left;
 	  			border-bottom: 1px dashed lightgray;
 	  		}
 	  		li:nth-of-type(1){
 	  			.devicetitle{
 	  				.num{
 	  					background: #ff0000;
 	  					color: #fff;
 	  				}
 	  			}
 	  		}
 	  		li:nth-of-type(2){
 	  			.devicetitle{
 	  				.num{
 	  					background: #ff6600;
 	  					color: #fff;
 	  				}
 	  			}
 	  		}
 	  		li:nth-of-type(3){
 	  			.devicetitle{
 	  				.num{
 	  					background: #ff9933;
 	  					color: #fff;
 	  				}
 	  			}
 	  		}
 	  		.devicetitle{
 	  			line-height: 20px;
 	  			.num{
 	  				display: inline-block;
 	  				width: 15px;
 	  				height: 15px;
 	  				background: #e6e6e6;
 	  				text-align: center;
 	  				padding: 2px;
 	  				/*color: #fff;*/
 	  				font-size: 12px;  
 	  			} 
 	  			.title{ 
 	  					color: #333333;  
 	  					font-size: 15px;
	 	  				&:hover{
	 	  					color: #ff9933;
	 	  				}
 	  			}
 	  			.price{
 	  				color: #ff506d;
 	  				float: right;
 	  			}
 	  		}
 	  		.desc{
 	  			display: flex;
 	  			/*overflow: hidden;*/
 	  			position:relative;
 	  			height: 100px;
 	  			img{
 	  				padding: 5px;
 	  				padding-left: 22px;
 	  				width: 100px;
 	  				height: 80px;
 	  				
 	  			}
 	  			.pdesc{
 	  				height: 60px;
 	  				line-height: 20px;
 	  				overflow: hidden;
 	  				font-size: 12px;
 	  			}
 	  			button{
	 	  				background: red;
	 	  				position: absolute;
	 	  				bottom: 0;
	 	  				right:0;
	 	  				background: #00a8f6;
	 	  				color: #fff;
	 	  				border: 1px solid #00a8f6;
	 	  				border-radius: 5px;
	 	  				width: 50px;
	 	  				height: 30px;
	 	  		}
 	  		}
 	  	}
 	  }  
 }
</style>
