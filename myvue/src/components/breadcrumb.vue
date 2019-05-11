<template>
	<div class="mybreadcrumb">
		<h3 class="container protitle">
			<span class="curr">您的位置：</span>
			<el-breadcrumb  separator-class="el-icon-arrow-right">
			  	 <el-breadcrumb-item v-for='(item,index) in breadlist' :to="item.tolink" :key="index">
			  	 	{{item.title}} 
			  	 </el-breadcrumb-item> 
			 </el-breadcrumb> 
		</h3>  
	</div>
</template>

<script>
	export default {
		props:{
			breadlist:{
				type:Array,
				default:()=>[],
				required:true
				}
		} 
	}
</script>

<style lang="less" scoped>  
	.mybreadcrumb{
		.protitle{
			display:flex;
			color:gray;  
			span.curr{
				font-size: 12px; 
			}
			.el-breadcrumb{
				line-height: 17px;
				font-size:12px;
			}
		}
	}
</style>