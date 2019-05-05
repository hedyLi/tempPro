<template>
	<div>
		<div class="container">
			<el-row :gutter="24">
			  <el-col :span="12"><div class="grid-content1">
			  	 <img src="../assets/logo.jpg" class="logo" />
			  </div></el-col>
			  <el-col :span="12"><div class="grid-content2">
			  	<form action="">
					<input type="text" placeholder="搜索电视应用" />
					<a href="#" class="search">搜索</a>
				</form>
			  	<a href="#" class="login">登录</a> &nbsp;&nbsp; <a href="">|</a>&nbsp;&nbsp;&nbsp;
				<a href="#" class="regiest">注册</a>
			  </div></el-col>
			</el-row>
		</div> 
	</div>
</template>

<script>
</script>

<style> 
	.container{
		width: 1200px;
		height: 300px;
		margin: 0 auto;
		padding: 20px;
	} 
	.container .logo {
		width: 180px;
	} 
	.container .grid-content1{
		text-align: left;
	}
	.container .grid-content2{ 
		display: flex;
		justify-content: flex-end;
	}
	.grid-content2 input{
		height: 25px;
		text-indent: 1rem;
		color: #eee;
		box-shadow: inset 0 0 1px rgba(0,0,0,.075);
		border: 1px solid rgba(0,0,0,.075);
		outline: none;
	}
	.grid-content2 .search{
		display: inline-block;
		height: 25px;
		width:45px;
		margin-right: 50px;
		background: rgb(255, 153, 51);
	}
	.grid-content2 a{
		color: rgb(51, 51, 51);
		text-decoration: none;
		font-size: 12px;
		line-height: 25px;
	} 
	.header {
		background-color: #545c64;
	}
</style>