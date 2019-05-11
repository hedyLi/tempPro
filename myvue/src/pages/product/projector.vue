<template>
	<div class="projector">
		 <Breadcrumb :breadlist="breadlist" ></Breadcrumb>  
	</div>
</template>

<script>
	import Breadcrumb from '../../components/breadcrumb'
	export default{
		name:'projector',
		data(){
			return {
				breadlist:[
				 {tolink:"/",title:'首页'},
				 {tolink:"/product",title:'产品库'},
				 {tolink:"/product/projector",title:'投影仪'}
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