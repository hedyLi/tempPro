module.exports = function(param) {
	let typeid = parseInt(param.body.itemid);
	if(tepeid = 1) {
		return {
			data: [{
					title: "智能电视推荐",
					subitem: [{
							imgsrc: 'tuijian01.png',
							subtitle: '康佳M55U'
						},
						{
							imgsrc: 'tuijian02.png',
							subtitle: '乐视超4 X50 Pro'
						},
						{
							imgsrc: 'tuijian03.png',
							subtitle: '小米电视3S 65英寸曲面'
						},
						{
							imgsrc: 'tuijian04.png',
							subtitle: '微鲸55PRO'
						}
					]
				},
				{
					title: "电视盒子推荐",
					subitem: [{
							imgsrc: 'tuijian05.png',
							subtitle: '极米H1'
						},
						{
							imgsrc: 'tuijian06.png',
							subtitle: '高乐电视主机'
						},
						{
							imgsrc: 'tuijian07.png',
							subtitle: '海美迪Q10 四代'
						}
					]
				}
			]
		}
	}
}