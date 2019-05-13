<template>
	<div class="about"> 
		<BaiDuMap address="广东省深圳市恒泰公寓" province="深圳市"></BaiDuMap>
		联系我们：
		<div class="myqrcode">
			<!--生成二维码区域-->
			<canvas id="canvas"></canvas>
		</div>
	</div>
</template>

<script>
	import BaiDuMap from './map'
	//qrcode二维码
	import QRCode from 'qrcode'; 
	export default{
		data(){
			return {
				
			}
		},
		mounted(){
			//组件挂载时，调用生成二维码函数
			this.useQRCode();
		},
		methods:{
			useQRCode(){
				console.log(1);
				var canvas1 = document.querySelector('#canvas');
				QRCode.toCanvas(canvas1,"http://www.baidu.com",function(err){
					if(err){
						console.err(err);
					}else{
						console.log('qrcode success!');
					}
				})
			}
		},
		components:{
			BaiDuMap
		}
	}
</script>

<style lang="less">
	.about{ 	
	}
</style>