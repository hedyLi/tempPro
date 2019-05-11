<template>
	<div class="sublist">
		<h2> {{htitle}}   
			<a v-for="item in questions" href="#">
			 {{item}}
			</a>
		</h2>
		<a href="#" class="more">更多></a>
		<el-tabs type="card"> 
			<el-tab-pane v-for="(item,index) in recommend" :key="index" :label="item.title">
				
			  	<ul>
					<li v-for="(subitem,subindex) in item.subitem">
						<div class="proimg">
							<img :src="require('../../assets/product/'+subitem.imgsrc)" :title="subitem.subtitle" /> 
						</div>  
						<h3><a href="#">{{subitem.subtitle}}</a></h3>
						<button><input type="checkbox" />&nbsp;比较</button> 
					</li>
				</ul>
			</el-tab-pane>
		</el-tabs>
			
	</div>

</template>

<script>
 export default{ 
	props:{
	    htitle:{
	    	type:String,
	    	default:''
	    },
	    questions:{
	    	type:Array,
			default:()=>[]
	    },
		recommend:{
			type:Array,
			default:()=>[]
		}
	} 
 }
</script>

<style lang="less">
	.sublist {
		margin: 20px 0 10px;
		.el-tabs--card>.el-tabs__header {
			margin-bottom: 0;
		}
		.el-tabs__content {
			border: 1px solid #E4E7ED;
			border-top: none;
		}
		.el-tabs--card>.el-tabs__header .el-tabs__item.is-active {
			color: #ff9933;
		}
		.more{ 
			float: right;
			/*此处设置relative 目的为提高层级 以免hover不到*/
			position: relative;
			z-index: 5;
			margin-top: 10px;
			font-size: 12px;
			width: 45px;
			height: 25px;
			line-height: 25px;
			border: 1px solid lightgray; 
			&:hover{
				background-color: #ff9933;
				color: #fff;
				border: none;
			}
		}
		h2{
			font-size: 18px;
			line-height: 50px;
			text-align: left; 
			a{ 
				font-size: 12px;
    			color: #999;
    			font-weight: normal;
    			padding: 10px;
    			&:hover{
    				color:#ff9933; 
    			}
			} 
		} 
		ul{
			display: flex;
			/*overflow-x: auto;*/ 
			li{
				display: inline-block;
				width: 222px; 
				box-sizing: border-box;
				padding: 20px;
				padding-top: 50px;
				.proimg{
				    height:150px;
					line-height:150px;
					img{
						width: 100%; 
					}
				}
				h3{
					font-size: 14px;
					font-weight: normal;
					line-height: 30px;
				}
				button{
					width:80px;
					line-height: 28px;
					border-radius: 4px;
					font-size: 12px; 
					border: 1px solid lightgray;
					background-color: #fafafa;
					input{
						vertical-align: middle;
						 
					}
					input[checked]{
						background: red;
					}
					&:hover{
						background-color: #e6e6e6;
					}
				}
				a{
					color: #333;
				}
				&:hover a{ 
					color:#ff9933;
					 
				}
			}
		}
	}
</style>