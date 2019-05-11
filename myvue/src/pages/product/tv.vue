<template>
	<div class="tv"> 
	    <Breadcrumb :breadlist="breadlist" ></Breadcrumb>  
	</div>
</template>

<script>
	import Breadcrumb from '../../components/breadcrumb'
	export default {
		data(){
			return{
				breadlist:[
				 {tolink:"/",title:'首页'},
				 {tolink:"/product",title:'产品库'},
				 {tolink:"/product/tv",title:'智能电视'}
				] 
			}
		},
		components:{
			Breadcrumb
		}
	}
</script>

<style lang="less"> 
	/* 让span不加粗。
	 * span{
		font-weight: normal !important;
	} */
</style>