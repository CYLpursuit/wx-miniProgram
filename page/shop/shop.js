var app = getApp();
var server = require('../../utils/server.js');
Page({
	data: {
		defaultImg: 'http://global.zuzuche.com/assets/images/common/zzc-logo.png',
	},
  // ashley
	onLoad: function (options) {
		var shopId = options.id;
    var shopName = options.name;
    var shopLogo = options.logo;
		var mells = server.selectedShopDetail(shopId) // throw Exception
		this.setData({
			shopId: shopId,
      shopName: shopName,
      shopLogo: shopLogo,
      mells: mells
		});
  }
});

