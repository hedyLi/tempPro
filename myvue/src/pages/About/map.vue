<template>
	<div class="map" id="map">
		
	</div> 
</template>

<script>
	export default{
		props:["address","province"], 
		mounted(){ 
			this.mapdata();
		},
		methods:{
			mapdata(){ 
				var map = new BMap.Map("map");   
				// 创建地址解析器实例
				var myGeo = new BMap.Geocoder();
			 
				// 将地址解析结果显示在地图上,并调整地图视野
				var that = this;
				myGeo.getPoint(this.address, function(point){
					if (point) { 
						map.centerAndZoom(point, 16);
						map.addOverlay(new BMap.Marker(point));
						
						var marker = new BMap.Marker(point);  // 创建标注
						map.addOverlay(marker);              // 将标注添加到地图中 
						var opts = {
						  width : 200,     // 信息窗口宽度
						  height: 80,     // 信息窗口高度
						  title : "公司地址:"  //, // 信息窗口标题
//						  enableMessage:true//设置允许信息窗发送短息 
						}
						var infoWindow = new BMap.InfoWindow(that.address, opts);  // 创建信息窗口对象 
						marker.addEventListener("click", function(){          
							map.openInfoWindow(infoWindow,point); //开启信息窗口
						});
				
					}else{
						alert("您选择地址没有解析到结果!");
					}
				},this.province);
//				map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
				
				
				
				
			}
		}
	}
</script>

<style>
	.map{     
      	 width: 1200px;
			height: 600px;
			/*border: 1px solid red;*/
			margin: 0 auto;
	}
</style>