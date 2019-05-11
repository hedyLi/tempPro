<template>
	<div class="follow">
		<h3 :class="{bg:hasbg}">{{title}}</h3>
		<ul class="blist">
			<li v-for="item in branchlist">
				<div :class="{subimg:true,liheight:hasliheight}">
					<img :src="require('../../assets/product/'+item.imgsrc)" alt="" />
				</div> 
				<h4>{{item.subtitle}}</h4>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		props:{
			hasbg:{type:Boolean,default:false},
			hasliheight:{type:Boolean,default:false},
			title:{type:String,default:''},
			branchlist:{type:Array,default:()=>[]}
		}
	}
</script>

<style lang="less">
	.follow{
		border:1px solid lightgray;
		margin-top: 20px;  
		margin-bottom: 10px;
		h3{
			font-size: 16px;
			text-align: left;
			padding-left:10px;  
			text-indent:10px;
			line-height:50px;  
			font-weight:600;   
			&:before{
				content: '';
				width: 5px; 
				height: 18px;
				background: #ff9933;
				float: left;  
				margin-top: 17px;  
			}
		}
		h3.bg{
			background:#f5f5f5; 
		}
		.blist{
			display: flex;
			flex-wrap: wrap;
			justify-content: center;
			align-items: center;
			li{
				width: 100px;
				padding: 15px;  
				.subimg{ 
				    img{
						height: auto;
						width: 100%;
				    }
				} 
				h4{
					font-size: 13px;
					font-weight: normal;
					color: gray; 
					white-space: nowrap;
					overflow: hidden;
					text-overflow: ellipsis; 
				}
			}
			.liheight{
				height: 100px;
			}
		}
	}
</style>