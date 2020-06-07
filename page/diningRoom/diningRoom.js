var app = getApp();
var server = require('../../utils/server.js');
Page({
	data: {
		defaultImg: 'http://global.zuzuche.com/assets/images/common/zzc-logo.png',
	},
  // ashley
	onLoad: function (options) {
    var diningRoomName = options.name;
    var diningRoomImg = options.img;
    var shops = server.selectedDiningRoomDetail(diningRoomName); //data
		this.setData({
      diningRoomName: diningRoomName,
      diningRoomImg: diningRoomImg,
      shops: shops
		});
	}
});

