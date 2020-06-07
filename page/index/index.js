var app = getApp();
var server = require('../../utils/server');
Page({
	data: {
		banners: [
			{
				id: 3,
				img: '../../imgs/index/banner1.jpg'
			},
			{
				id: 1,
        img: '../../imgs/index/banner2.jpg'
			},
			{
				id: 2,
        img: '../../imgs/index/banner3.jpg'
			}
		],
		diningRoomList: [
			[
				{
					id: 1,
          img: '/imgs/index/azuo.jpg',
					name: 'A座食堂',
					url: ''
				},
				{
					id: 2,
          img: '/imgs/index/dongyuan.jpg',
					name: '东院食堂',
					url: ''
				},
				{
					id: 3,
          img: '/imgs/index/xinyuan.jpg',
					name: '心园餐厅',
					url: ''
				},
				{
					id: 4,
          img: '/imgs/index/xiyuan.jpg',
					name: '西院食堂',
					url: ''
				},
				{
					id: 5,
          img: '/imgs/index/xiyuanqingzhen.jpg',
					name: '西院回民餐厅',
					url: ''
				},
				{
					id: 6,
          img: '/imgs/index/ganxun.jpg',
					name: '干训餐厅',
					url: ''
				},
				{
					id: 7,
          img: '/imgs/index/zzuo.jpg',
					name: 'Z座食堂',
					url: ''
				},
				{
					id: 8,
          img: '/imgs/index/gongyu.jpg',
					name: '公寓食堂',
					url: ''
        },
        {
          id: 9,
          img: '/imgs/index/gongyuqingzhen.jpg',
          name: '公寓回民餐厅',
          url: ''
        }
			]
		],
		shops: app.globalData.shops
	},
	onLoad: function () {
		var self = this;
		wx.getLocation({
			type: 'gcj02',
			success: function (res) {
				var latitude = res.latitude;
				var longitude = res.longitude;
				server.getJSON('dwq/WxAppApi/location.php', {
					latitude: latitude,
					longitude: longitude
				}, function (res) {
					console.log(res)
					if (res.data.status != -1) {
						self.setData({
							address: res.data.result.address_component.street_number
						});
					} else {
						self.setData({
							address: '定位失败'
						});
					}
				});
			}
		});
	},
	onShow: function () {
	},
	onScroll: function (e) {
		if (e.detail.scrollTop > 100 && !this.data.scrollDown) {
			this.setData({
				scrollDown: true
			});
		} else if (e.detail.scrollTop < 100 && this.data.scrollDown) {
			this.setData({
				scrollDown: false
			});
		}
	},
  goAds: function (e) {
		wx.navigateTo({
      url: '/page/ads/ads',
    })
	}
});

