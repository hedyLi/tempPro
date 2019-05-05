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
					<a href="#" class="search"><i class="fa fa-search"></i></a>
				</form>
			  	<a href="#" class="login">登录</a> &nbsp;&nbsp; <a href="">|</a>&nbsp;&nbsp;&nbsp;
				<a href="#" class="regiest">注册</a>
			  </div></el-col>
			</el-row> 
		</div>  
		<div class="row">
			<ul class="nav">
				<li class="active"><a href="#">沙发网</a></li> 
				<li><a href="#">应用市场</a></li> 
				<li><a href="#">客户端下载</a></li> 
				<li><a href="#">安装教程</a></li> 
				<li><a href="#">产品库</a></li>
				<li><a href="#">开发者平台</a></li> 
			</ul>
		</div> 
	</div>
</template>

<script>
</script>

<style> 
	.container{
		width: 1200px;
		height: 50px;
		margin: 0 auto;
		padding: 15px 0;
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
		line-height: 50px;
	}
	.grid-content2 input{
		height: 30px;
		width: 180px;
		text-indent: 10px;
		color: #eee;
		box-shadow: inset 0 0 1px rgba(0,0,0,.075);
		border: 1px solid rgba(0,0,0,.075);
		outline: none;
		font-size: 14px;
	}
	.grid-content2 .search{
		display: inline-block;
		line-height: 32px;
		width:50px; 
		margin-right: 50px;
		background: rgb(255, 153, 51);
		color: #fff;
		
	}
	.grid-content2 a{
		color: rgb(51, 51, 51);
		text-decoration: none;
		font-size: 14px; 
	} 
	.row{
		background-color: rgb(51, 51, 51);
		line-height: 50px;
	} 
	.nav{
		width: 1200px;
		display: flex;
		margin: 0 auto;
	}
	.nav a{
		color: #fff;
		text-decoration: none;
		font-size: 18px;
	}
	.nav li{
		padding: 0 20px;
	}
	.nav li.active{
		background: rgb(0, 0, 0);
	}
	.nav li.active a{
		color: rgb(255, 128, 0);
	}
	.nav li:hover{
		background: rgb(0, 0, 0);
	}
	.nav li:hover a{
		color: rgb(255, 128, 0);
	}
	
</style>