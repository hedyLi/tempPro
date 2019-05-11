<template>
	<div class="box">
		<Breadcrumb :breadlist="breadlist" ></Breadcrumb>  
	</div>
</template>

<script>
import Breadcrumb from '../../components/breadcrumb'
export default{
	name:'box',
	data(){
		return {
			breadlist:[
				 {tolink:"/",title:'首页'},
				 {tolink:"/product",title:'产品库'},
				 {tolink:"/product/box",title:'电视盒子'}
				] ,
			navlist:[
				{navname:'品牌',subnav:["创维","小米","长虹",'TCL','康佳','海信','看尚','乐视TV','酷开','夏普'
				                      ,'三星','索尼','飞利浦','海尔','联想','LG','熊猫','哈呢','海力','东芝'
				                      ,'乐华','KKTV','...']},
				{navname:'高清观看：',subnav:["超高清4K",'全高清1080P','高清720P']},
				{navname:'适合场景：',subnav:["卧室电视",'客厅电视','全部尺寸']},
				{navname:'价格：',subnav:["0-2599",'2600-3999','4000-5399','5400-7599','12400-26999','27000及以上']}
			],
			navlist2:[
				{navname:'品牌',subnav:["明基","极米","坚果",'爱普生','索尼','松下','佳能','奥图码','酷乐视','神画'
				                      ,'艾洛维','纽曼','宏碁','日电','葩葩','微鲸','优派','砖投','夏普','华硕'
				                      ,'MEGO','丽讯','理光','ZECO','优铂','轰天砲','日立','卡西欧','窝窝头','大眼橙','库帕']},
				{navname:'处理器CPU：',subnav:["双核",'四核','八核']},
				{navname:'运行内存RAM：',subnav:["512M",'1GB','2GB','4GB及以上']},
				{navname:'本机存储ROM：',subnav:["1GB以下",'2GB','4GB','8GB及以上']},
				{navname:'高清输出',subnav:['超高清4k','全高清1080P','高清720P']},
				{navname:'价格：',subnav:["0-199",'200-399','400-599','600-699','700及以上']} 
			],
			navlist3:[
				{navname:'品牌',subnav:["明基","极米","坚果",'爱普生','索尼','松下','佳能','奥图码','酷乐视','神画'
				                      ,'艾洛维','纽曼','宏碁','日电','葩葩','微鲸','优派','砖投','夏普','华硕'
				                      ,'MEGO','丽讯','理光','ZECO','优铂','轰天砲','日立','卡西欧','窝窝头','大眼橙','库帕']},
				{navname:'使用环境：',subnav:["商用型",'家用型','商住两用']},
				{navname:'运行内存RAM：',subnav:["1GB",'2GB','4GB及以上']},
				{navname:'本机存储ROM：',subnav:["1GB以下",'2GB','4GB','8GB及以上']},
				{navname:'价格：',subnav:["0-1999",'2000-3999','4000-5999','6000及以上']} 
			]
		}
	},
	components:{
		Breadcrumb
	}
}
</script>

<style lang="less">
	 
</style>