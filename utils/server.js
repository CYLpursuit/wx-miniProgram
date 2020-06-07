function __args() {
	var setting = {};
	if (arguments.length === 1 && typeof arguments[0] !== 'string') {
		setting = arguments[0];
	} else {
		setting.url = arguments[0];
		if (typeof arguments[1] === 'object') {
			setting.data = arguments[1];
			setting.success = arguments[2];
		} else {
			setting.success = arguments[1];
		}
	}
	if (setting.url.indexOf('https://') !== 0) {
		setting.url = 'https://test2.zuzuche.com/' + setting.url;
	}
	return setting;
}
function __json(method, setting) {
	setting.method = method;
	setting.header = {
		'content-type': 'application/json'
	};
	wx.request(setting);
}

// ashley diningRoom---shops
function selectedDiningRoomDetail(diningRoomName){
	var app = getApp();
  var selectedShops = [];
  for (var i = 0; i < app.globalData.shops.length; ++i) {
    if (app.globalData.shops[i].diningRoomFlag == diningRoomName) {
      selectedShops.push(app.globalData.shops[i]);
		}
	}
  app.globalData.showSelectedShops = selectedShops;
  return selectedShops;;
}

//ashley shop---mells
function selectedShopDetail(shopId) {
  var app = getApp();
  var mells = [];
  for (var i = 0; i < app.globalData.showSelectedShops.length; ++i) {
    if (app.globalData.showSelectedShops[i].id == shopId) {
      mells = app.globalData.showSelectedShops[i].menu;
    }
  }
  return mells;
}

module.exports = {
	getJSON: function () {
		__json('GET', __args.apply(this, arguments));
	},
	postJSON: function () {
		__json('POST', __args.apply(this, arguments));
	},
  // ashley
  selectedDiningRoomDetail: selectedDiningRoomDetail,
  selectedShopDetail: selectedShopDetail
}
