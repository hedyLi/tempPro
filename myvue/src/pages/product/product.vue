<template>
	<div class="product container"> 
		<Breadcrumb :breadlist="breadlist" ></Breadcrumb> 
		<el-row :gutter="20">
		  <!--左侧-->
		  <el-col :span="18">
		  	<!--tabs-nav-->
			<el-tabs type="border-card" class="tabsnav">
			    <el-tab-pane>
				   <span slot="label"> <span class="labelico"></span> 智能电视 </span>
				   <ul class="branchlist">
				   	<li v-for="item in tvlist">
				   		<a href="item.tolink"><img :src="require('../../assets/product/'+item.imgsrc)"/></a>   
				   	</li>
				   	<li class="more">
				   		<span>更多选择</span>>>
				   	</li>
				   </ul>
				   <div class="searchtype">
				   	    <dl> <dt>清晰度：</dt> <dd>超高清4K</dd> <dd>高清1080P</dd> </dl>
				   	    <dl> <dt>使用场景：</dt> <dd>卧室使用</dd> <dd>客厅使用</dd> </dl>
				   </div>
			    </el-tab-pane>
				<el-tab-pane label="电视盒子">
					<span slot="label"> <span class="labelico"></span> 电视盒子 </span>
					<ul class="branchlist">
				   	<li v-for="item in boxlist">
				   		<a href="item.tolink"><img :src="require('../../assets/product/'+item.imgsrc)"/></a>   
				   	</li>
				   	<li class="more">
				   		<span>更多选择</span>>>
				   	</li>
				   </ul>
				   <div class="searchtype">
				   	    <dl> <dt>处理器：</dt> <dd>四核</dd> <dd>八核</dd> </dl>
				   	    <dl> <dt>内存：</dt> <dd>1GB</dd> <dd>2GB</dd> </dl>
				   	    <dl> <dt>存储：</dt> <dd>2GB</dd> <dd>4GB</dd> </dl>
				   </div>
				</el-tab-pane>
				<el-tab-pane label="投影仪">
					<span slot="label"> <span class="labelico"></span> 投影仪 </span> 
					<ul class="branchlist">
				   	<li v-for="item in prolist">
				   		<a href="item.tolink"><img :src="require('../../assets/product/'+item.imgsrc)"/></a>   
				   	</li>
				   	<li class="more">
				   		<span>更多选择</span>>>
				   	</li>
				   </ul>
				   <div class="searchtype">
				   	    <dl> <dt>类型：</dt> <dd>商用型</dd> <dd>家用型</dd>  <dd>商住两用</dd> </dl> 
				   </div>
				</el-tab-pane> 
			</el-tabs>
		  	<!--tabs-nav-end-->
		  	<!--极致视觉体验-->
		  	<SubList htitle="H.256+真4K硬解 极致视觉体验" :questions="['什么是H.256解码?','什么是真4K超清硬解?']" :recommend="tuijianlist1"></SubList>
		  	<!--高清接口-->
		  	<SubList htitle="HDMI2.0高清接口" :questions="['什么是HDMI接口？','什么是hdmi2.0？']" :recommend="tuijianlist2"></SubList>
		  	<!--test:-->
		  	<SubList htitle="HDMI2.0高清接口" :questions="['什么是HDMI接口？','什么是hdmi2.0？']" :recommend="tuijianlist2"></SubList>	
		  	<SubList htitle="H.256+真4K硬解 极致视觉体验" :questions="['什么是H.256解码?','什么是真4K超清硬解?']" :recommend="tuijianlist1"></SubList>
		  	 
		  </el-col>
		  <!--右侧-->
		  <el-col :span="6"> 
			<!--第一个 盒子-->
			<div class="searchbox">
				<h2>设备搜索</h2>
				<input type="text" placeholder="电视或盒子的品牌型号关键词" />
				<p>
					热门搜索： <a href="#">华为（HUAWEI）悦盒</a><a href="#">小米盒子1G增强版</a><a href="#">小米盒子2G增强版</a><a href="#">小米盒子4代</a>
				</p>
			</div> 
			<!--第二个盒子-->
			<div class="imgbox">
				<a href="#">
					<img src="../../assets/product/shafaguanjia.jpg" alt="" />
				</a>
			</div>
			<!--第三个盒子-->
			<div class="imgbox">
				<a href="#">
					<img src="../../assets/product/shafazhuomian.jpg" alt="" />
				</a>
			</div>
			<!--第四个盒子 ：友最关注智能电视品牌-->
			<Subfollow title="网友最关注智能电视品牌" :branchlist="branchlist1"></Subfollow>
			<Subfollow title="网友最关注电视盒子品牌" :branchlist="branchlist2"></Subfollow>
			<Subfollow title="最值得关注的电视盒子" :branchlist="branchlist3" :hasbg='true' :hasliheight='true'></Subfollow>
			<Subfollow title="最值得关注的高清电视" :branchlist="branchlist4" :hasbg='true' :hasliheight='true'></Subfollow>
			<Subfollow title="最值得关注的投影仪" :branchlist="branchlist5" :hasbg='true' :hasliheight='true'></Subfollow>
		  </el-col>
		</el-row> 
	</div>
	
</template>

<script>
	import Breadcrumb from '../../components/breadcrumb'
	import SubList from './sublist'
	import Subfollow from './subfollow'
	export default {
		data(){
			return {
				breadlist:[
				 {tolink:"/",title:'首页'},
				 {tolink:"/product",title:'产品库'}
				],
				tvlist:[
				 {imgsrc:'protv01.jpg',tolink:'#'},
				 {imgsrc:'protv02.jpg',tolink:'#'},
				 {imgsrc:'protv03.jpg',tolink:'#'},
				 {imgsrc:'protv04.jpg',tolink:'#'},
				 {imgsrc:'protv05.jpg',tolink:'#'},
				 {imgsrc:'protv06.jpg',tolink:'#'},
				 {imgsrc:'protv07.png',tolink:'#'},
				 {imgsrc:'protv08.jpg',tolink:'#'},
				 {imgsrc:'protv09.jpg',tolink:'#'},
				 {imgsrc:'protv10.jpg',tolink:'#'}
				],
				boxlist:[
				 {imgsrc:'probox01.jpg',tolink:'#'},
				 {imgsrc:'probox02.jpg',tolink:'#'},
				 {imgsrc:'probox03.jpg',tolink:'#'},
				 {imgsrc:'probox04.jpg',tolink:'#'},
				 {imgsrc:'probox05.jpg',tolink:'#'},
				 {imgsrc:'probox06.jpg',tolink:'#'},
				 {imgsrc:'probox07.png',tolink:'#'},
				 {imgsrc:'probox08.jpg',tolink:'#'},
				 {imgsrc:'probox09.jpg',tolink:'#'},
				 {imgsrc:'probox10.jpg',tolink:'#'}
				],
				prolist:[
				 {imgsrc:'projector01.png',tolink:'#'},
				 {imgsrc:'projector02.png',tolink:'#'},
				 {imgsrc:'projector03.png',tolink:'#'},
				 {imgsrc:'projector04.png',tolink:'#'},
				 {imgsrc:'projector05.png',tolink:'#'},
				 {imgsrc:'projector06.png',tolink:'#'},
				 {imgsrc:'projector07.png',tolink:'#'},
				 {imgsrc:'projector08.png',tolink:'#'},
				 {imgsrc:'projector09.png',tolink:'#'},
				 {imgsrc:'projector10.png',tolink:'#'}
				], 
				tuijianlist1:[
					{title:"智能电视推荐",
					 subitem:[
						{imgsrc:'tuijian01.png',subtitle:'康佳M55U'}, 
						{imgsrc:'tuijian02.png',subtitle:'乐视超4 X50 Pro'},
						{imgsrc:'tuijian03.png',subtitle:'小米电视3S 65英寸曲面'},
						{imgsrc:'tuijian04.png',subtitle:'微鲸55PRO'}
					]},
					{title:"电视盒子推荐",
					subitem:[
						 {imgsrc:'tuijian05.png',subtitle:'极米H1'}, 
						 {imgsrc:'tuijian06.png',subtitle:'高乐电视主机'},
						 {imgsrc:'tuijian07.png',subtitle:'海美迪Q10 四代'}
					]}
				], 
				tuijianlist2:[
					{title:"智能电视推荐",
					subitem:[
						 {imgsrc:'tuijian08.png',subtitle:'看尚W55'}, 
						 {imgsrc:'tuijian09.png',subtitle:'乐视超4 X50'},
						 {imgsrc:'tuijian10.png',subtitle:'小米电视3S 43英寸'},
						 {imgsrc:'tuijian11.png',subtitle:'乐视X40S'}
					]},
					{title:"电视盒子推荐",
					subitem:[
						 {imgsrc:'tuijian12.png',subtitle:'酷乐视X6C精英版'}, 
						 {imgsrc:'tuijian13.png',subtitle:'迪优美特K5'},
						 {imgsrc:'tuijian14.png',subtitle:'美的盒子'},
						 {imgsrc:'tuijian15.png',subtitle:'桔豆盒子J1+'}
					]} 
				],
				branchlist1:[
					{imgsrc:'pright01.jpg',subtitle:'乐视TV'},
					{imgsrc:'pright02.jpg',subtitle:'创维'},
					{imgsrc:'pright03.jpg',subtitle:'长虹'},
					{imgsrc:'pright04.jpg',subtitle:'TCL'}
				],
				branchlist2:[
					{imgsrc:'pright05.jpg',subtitle:'小米'},
					{imgsrc:'pright06.jpg',subtitle:'华为'},
					{imgsrc:'pright07.jpg',subtitle:'百度'},
					{imgsrc:'pright08.jpg',subtitle:'开博尔'}
				],
				branchlist3:[
					{imgsrc:'pright09.jpg',subtitle:'小米小盒子'},
					{imgsrc:'pright10.jpg',subtitle:'小米盒子1G增强版'},
					{imgsrc:'pright11.jpg',subtitle:'百度影棒2S+'},
					{imgsrc:'pright12.jpg',subtitle:'天猫魔盒2'}
				],
				branchlist4:[
					{imgsrc:'pright13.jpg',subtitle:'小米电视2 49寸'},
					{imgsrc:'pright14.jpg',subtitle:'乐视X50 Air 全配版'},
					{imgsrc:'pright15.jpg',subtitle:'创维42K1TY'},
					{imgsrc:'pright16.jpg',subtitle:'酷开U49'}
				],
				branchlist5:[
					{imgsrc:'pright17.jpg',subtitle:'极米Z4极光'},
					{imgsrc:'pright18.jpg',subtitle:'极米Z4Air 金属版'},
					{imgsrc:'pright19.jpg',subtitle:'坚果P1'},
					{imgsrc:'pright20.jpg',subtitle:'明基W1070'}
				]
			}
		},
		components:{
			Breadcrumb,SubList,Subfollow
		}
	}
</script>

<style lang="less">
	.product{
		padding: 0;
		.tabsnav{ 
			.labelico{ 
					float:left;
					margin: 5px;
					width: 25px;
					height: 25px;
					line-height: 25px;
					background: url(../../assets/product/navbg.png) no-repeat;
					color: white;
					&:before{
						content:'挑';
					}
			}
			.el-tabs__item.is-active{
				color: #ff9933;
				.labelico{  
					background-position: -25px 0;   
					&:before{
						content:'选';
					}
				}
			}
			.el-tabs__item.is-active:hover{
				color: #ff9933;
			}
			.branchlist{
				display: flex; 
				border-bottom:1px solid lightgray;
				li{
					flex: 1;
					/*line-height: 30px;*/
					align-items: center;
					display: flex; 
				}
				img{
					height: 80px;
					width: auto;
				}
				.more{ 
					color: #999;
					font-size: 10px;  
					span{ 
						display: inline-block;
						height: 25px;
						width: 28PX; 
						line-height: 15px;
					}
				} 
			}
			.searchtype{
				display: flex;
				font-size: 12px;
				line-height: 35px;
				
				dl{
					display: flex;
					margin-right: 30px;
					dd{
						padding: 0 10px;
					}
				}
			}
			padding-bottom: 0px;
			
		} 
		.searchbox{
			border: 1px solid lightgray;
			text-align: center;
			h2{
				font-size: 16px;
				line-height: 40px;
				font-weight: normal;
				background-color: #f5f5f5;
				border-bottom: 1px solid lightgray;
				text-align: left;
				text-indent: 1em;
			}
			input{
				width: 85%;
				margin:20px;
				height: 35px;
				line-height: 35px;
				text-indent: 1em;
				text-align: left; 
			}
			p{
				width: 85%;
				margin:0 auto;
				font-size: 12px;
				line-height: 23px;
				text-align: left; 
				 a{
				 	color:#2a68a7;
				 	padding:0 10px;
				 	&:hover{
				 		color: #ff8000;
				 	}
				 }
			}
		}
		.imgbox{
			margin-top:20px;
			width: 100%;
		}
	}
</style>