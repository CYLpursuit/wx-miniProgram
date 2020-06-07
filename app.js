var server = require('./utils/server');
App({
	onLaunch: function () {
		console.log('App Launch')
		var self = this;
		var rd_session = wx.getStorageSync('rd_session');
		if (!rd_session) {
			self.login();
		} else {
			wx.checkSession({
				success: function () {
					// 登录态未过期
					console.log('登录态未过期')
					self.rd_session = rd_session;
					self.getUserInfo();
				},
				fail: function () {
					//登录态过期
					console.log('过期');
					self.login();
				}
			})
		}
	},
	onShow: function () {
		console.log('App Show')
	},
	onHide: function () {
		console.log('App Hide')
	},
	globalData: {
		hasLogin: false,
		cartList: [],
		userInfo: [],
		shops: [
      {
        "id": 1, "diningRoomFlag": 'A座食堂', "name": "第一家店", "logo": "http://p1.meituan.net/210.0/xianfu/d09505856223c9bcc6bd4611924789ea328886.jpg", "location": "一楼第一家", 
       "menu": [
         { "id": 1, "price": "25", "name": "\u59dc\u8471\u767d\u5207\u9e21\u996d", "star": "5", "img": "http://p1.meituan.net/210.0/xianfu/d09505856223c9bcc6bd4611924789ea328886.jpg", "icon": "" },
         { "id": 2,"price": "25", "name": "\u76d0\u7117\u624b\u6495\u9e21\u996d", "star": "5", "img": "http://p0.meituan.net/210.0/wmproduct/4b87fd97cb2030bac78aa5652cbb064385230.jpg", "icon": "" },
         { "id": 3,"price": "28", "name": "\u624b\u6495\u9e21\u62fc\u9f13\u6cb9\u9e21", "star": "15", "img": "http://p1.meituan.net/210.0/xianfu/7f53a24ed5a13b376fb2f73b200c0f5a464896.jpg", "icon": "" },
         { "id": 4,"price": "20", "name": "\u70e7\u9e2d\u62fc\u809d\u996d", "star": "26", "img": "http://p1.meituan.net/210.0/xianfu/d427ce1daed9341e2a265d32c5038314505856.jpg", "icon": "" }, 
         { "id": 5,"price": "28", "name": "\u5207\u9e21\u62fc\u70e7\u9e2d\u996d", "star": "86", "img": "http://p0.meituan.net/210.0/xianfu/c185db8a20a5bf9ad79bcf7924916bb7499712.jpg", "icon": "" },
         { "id": 6,"price": "17", "name": "\u59dc\u8471\u5207\u9e21\u996d", "star": "53", "img": "http://p1.meituan.net/210.0/xianfu/7943a1b5b0c8d1b69a6df9642fb097ed10240.jpg", "icon": "" }, 
         { "id": 7,"price": "17", "name": "\u624b\u6495\u9e21\u996d", "star": "141", "img": "http://p0.meituan.net/210.0/xianfu/1d2be11ddaee9d43f9cf87faacf764a367584.jpg", "icon": "" }
            ]
            },
      { "id": 2, "diningRoomFlag": 'A座食堂', "name": "第二家店", "logo": "http://p1.meituan.net/xianfu/4d942ae4c32d42041dadac1fdd951d5e995328.jpg", "location": "一楼第二家",
        "menu": [
          { "id": 1, "price": "25", "name": "\u59dc\u8471\u767d\u5207\u9e21\u996d", "star": "5", "img": "http://p1.meituan.net/210.0/xianfu/d09505856223c9bcc6bd4611924789ea328886.jpg", "icon": "" },
          { "id": 2, "price": "25", "name": "\u76d0\u7117\u624b\u6495\u9e21\u996d", "star": "5", "img": "http://p0.meituan.net/210.0/wmproduct/4b87fd97cb2030bac78aa5652cbb064385230.jpg", "icon": "" },
          { "id": 3, "price": "28", "name": "\u624b\u6495\u9e21\u62fc\u9f13\u6cb9\u9e21", "star": "15", "img": "http://p1.meituan.net/210.0/xianfu/7f53a24ed5a13b376fb2f73b200c0f5a464896.jpg", "icon": "" },
          { "id": 4, "price": "20", "name": "\u70e7\u9e2d\u62fc\u809d\u996d", "star": "26", "img": "http://p1.meituan.net/210.0/xianfu/d427ce1daed9341e2a265d32c5038314505856.jpg", "icon": "" },
          { "id": 5, "price": "28", "name": "\u5207\u9e21\u62fc\u70e7\u9e2d\u996d", "star": "86", "img": "http://p0.meituan.net/210.0/xianfu/c185db8a20a5bf9ad79bcf7924916bb7499712.jpg", "icon": "" },
          { "id": 6, "price": "17", "name": "\u59dc\u8471\u5207\u9e21\u996d", "star": "53", "img": "http://p1.meituan.net/210.0/xianfu/7943a1b5b0c8d1b69a6df9642fb097ed10240.jpg", "icon": "" },
          { "id": 7, "price": "17", "name": "\u624b\u6495\u9e21\u996d", "star": "141", "img": "http://p0.meituan.net/210.0/xianfu/1d2be11ddaee9d43f9cf87faacf764a367584.jpg", "icon": "" }
        ]
         }, 
      { "id": 3, "diningRoomFlag": 'A座食堂', "name": "第三家店", "logo": "http://p1.meituan.net/xianfu/4d942ae4c32d42041dadac1fdd951d5e995328.jpg", "location": "一楼第三家",
        "menu": [
          { "id": 1, "price": "25", "name": "\u59dc\u8471\u767d\u5207\u9e21\u996d", "star": "5", "img": "http://p1.meituan.net/210.0/xianfu/d09505856223c9bcc6bd4611924789ea328886.jpg", "icon": "" },
          { "id": 2, "price": "25", "name": "\u76d0\u7117\u624b\u6495\u9e21\u996d", "star": "5", "img": "http://p0.meituan.net/210.0/wmproduct/4b87fd97cb2030bac78aa5652cbb064385230.jpg", "icon": "" },
          { "id": 3, "price": "28", "name": "\u624b\u6495\u9e21\u62fc\u9f13\u6cb9\u9e21", "star": "15", "img": "http://p1.meituan.net/210.0/xianfu/7f53a24ed5a13b376fb2f73b200c0f5a464896.jpg", "icon": "" },
          { "id": 4, "price": "20", "name": "\u70e7\u9e2d\u62fc\u809d\u996d", "star": "26", "img": "http://p1.meituan.net/210.0/xianfu/d427ce1daed9341e2a265d32c5038314505856.jpg", "icon": "" },
          { "id": 5, "price": "28", "name": "\u5207\u9e21\u62fc\u70e7\u9e2d\u996d", "star": "86", "img": "http://p0.meituan.net/210.0/xianfu/c185db8a20a5bf9ad79bcf7924916bb7499712.jpg", "icon": "" },
          { "id": 6, "price": "17", "name": "\u59dc\u8471\u5207\u9e21\u996d", "star": "53", "img": "http://p1.meituan.net/210.0/xianfu/7943a1b5b0c8d1b69a6df9642fb097ed10240.jpg", "icon": "" },
          { "id": 7, "price": "17", "name": "\u624b\u6495\u9e21\u996d", "star": "141", "img": "http://p0.meituan.net/210.0/xianfu/1d2be11ddaee9d43f9cf87faacf764a367584.jpg", "icon": "" }
        ]
         }, 
      { "id": 4, "diningRoomFlag": 'A座食堂', "name": "第四家店", "logo": "http://p1.meituan.net/xianfu/4d942ae4c32d42041dadac1fdd951d5e995328.jpg", "location": "一楼第四家",
        "menu": [
          { "id": 1, "price": "25", "name": "\u59dc\u8471\u767d\u5207\u9e21\u996d", "star": "5", "img": "http://p1.meituan.net/210.0/xianfu/d09505856223c9bcc6bd4611924789ea328886.jpg", "icon": "" },
          { "id": 2, "price": "25", "name": "\u76d0\u7117\u624b\u6495\u9e21\u996d", "star": "5", "img": "http://p0.meituan.net/210.0/wmproduct/4b87fd97cb2030bac78aa5652cbb064385230.jpg", "icon": "" },
          { "id": 3, "price": "28", "name": "\u624b\u6495\u9e21\u62fc\u9f13\u6cb9\u9e21", "star": "15", "img": "http://p1.meituan.net/210.0/xianfu/7f53a24ed5a13b376fb2f73b200c0f5a464896.jpg", "icon": "" },
          { "id": 4, "price": "20", "name": "\u70e7\u9e2d\u62fc\u809d\u996d", "star": "26", "img": "http://p1.meituan.net/210.0/xianfu/d427ce1daed9341e2a265d32c5038314505856.jpg", "icon": "" },
          { "id": 5, "price": "28", "name": "\u5207\u9e21\u62fc\u70e7\u9e2d\u996d", "star": "86", "img": "http://p0.meituan.net/210.0/xianfu/c185db8a20a5bf9ad79bcf7924916bb7499712.jpg", "icon": "" },
          { "id": 6, "price": "17", "name": "\u59dc\u8471\u5207\u9e21\u996d", "star": "53", "img": "http://p1.meituan.net/210.0/xianfu/7943a1b5b0c8d1b69a6df9642fb097ed10240.jpg", "icon": "" },
          { "id": 7, "price": "17", "name": "\u624b\u6495\u9e21\u996d", "star": "141", "img": "http://p0.meituan.net/210.0/xianfu/1d2be11ddaee9d43f9cf87faacf764a367584.jpg", "icon": "" }
        ]
         }, 
      { "id": 5, "diningRoomFlag": 'A座食堂', "name": "第五家店", "logo": "http://p1.meituan.net/xianfu/4d942ae4c32d42041dadac1fdd951d5e995328.jpg", "location": "一楼第五家",
        "menu": [
          { "id": 1, "price": "25", "name": "\u59dc\u8471\u767d\u5207\u9e21\u996d", "star": "5", "img": "http://p1.meituan.net/210.0/xianfu/d09505856223c9bcc6bd4611924789ea328886.jpg", "icon": "" },
          { "id": 2, "price": "25", "name": "\u76d0\u7117\u624b\u6495\u9e21\u996d", "star": "5", "img": "http://p0.meituan.net/210.0/wmproduct/4b87fd97cb2030bac78aa5652cbb064385230.jpg", "icon": "" },
          { "id": 3, "price": "28", "name": "\u624b\u6495\u9e21\u62fc\u9f13\u6cb9\u9e21", "star": "15", "img": "http://p1.meituan.net/210.0/xianfu/7f53a24ed5a13b376fb2f73b200c0f5a464896.jpg", "icon": "" },
          { "id": 4, "price": "20", "name": "\u70e7\u9e2d\u62fc\u809d\u996d", "star": "26", "img": "http://p1.meituan.net/210.0/xianfu/d427ce1daed9341e2a265d32c5038314505856.jpg", "icon": "" },
          { "id": 5, "price": "28", "name": "\u5207\u9e21\u62fc\u70e7\u9e2d\u996d", "star": "86", "img": "http://p0.meituan.net/210.0/xianfu/c185db8a20a5bf9ad79bcf7924916bb7499712.jpg", "icon": "" },
          { "id": 6, "price": "17", "name": "\u59dc\u8471\u5207\u9e21\u996d", "star": "53", "img": "http://p1.meituan.net/210.0/xianfu/7943a1b5b0c8d1b69a6df9642fb097ed10240.jpg", "icon": "" },
          { "id": 7, "price": "17", "name": "\u624b\u6495\u9e21\u996d", "star": "141", "img": "http://p0.meituan.net/210.0/xianfu/1d2be11ddaee9d43f9cf87faacf764a367584.jpg", "icon": "" }
        ]
         }, 
      { "id": 6, "diningRoomFlag": 'A座食堂', "name": "第六家店", "logo": "http://p1.meituan.net/xianfu/4d942ae4c32d42041dadac1fdd951d5e995328.jpg", "location": "一楼第六家",
        "menu": [
          { "id": 1, "price": "25", "name": "\u59dc\u8471\u767d\u5207\u9e21\u996d", "star": "5", "img": "http://p1.meituan.net/210.0/xianfu/d09505856223c9bcc6bd4611924789ea328886.jpg", "icon": "" },
          { "id": 2, "price": "25", "name": "\u76d0\u7117\u624b\u6495\u9e21\u996d", "star": "5", "img": "http://p0.meituan.net/210.0/wmproduct/4b87fd97cb2030bac78aa5652cbb064385230.jpg", "icon": "" },
          { "id": 3, "price": "28", "name": "\u624b\u6495\u9e21\u62fc\u9f13\u6cb9\u9e21", "star": "15", "img": "http://p1.meituan.net/210.0/xianfu/7f53a24ed5a13b376fb2f73b200c0f5a464896.jpg", "icon": "" },
          { "id": 4, "price": "20", "name": "\u70e7\u9e2d\u62fc\u809d\u996d", "star": "26", "img": "http://p1.meituan.net/210.0/xianfu/d427ce1daed9341e2a265d32c5038314505856.jpg", "icon": "" },
          { "id": 5, "price": "28", "name": "\u5207\u9e21\u62fc\u70e7\u9e2d\u996d", "star": "86", "img": "http://p0.meituan.net/210.0/xianfu/c185db8a20a5bf9ad79bcf7924916bb7499712.jpg", "icon": "" },
          { "id": 6, "price": "17", "name": "\u59dc\u8471\u5207\u9e21\u996d", "star": "53", "img": "http://p1.meituan.net/210.0/xianfu/7943a1b5b0c8d1b69a6df9642fb097ed10240.jpg", "icon": "" },
          { "id": 7, "price": "17", "name": "\u624b\u6495\u9e21\u996d", "star": "141", "img": "http://p0.meituan.net/210.0/xianfu/1d2be11ddaee9d43f9cf87faacf764a367584.jpg", "icon": "" }
        ]
         },
      { "id": 1, "diningRoomFlag": '东院食堂', "name": "第一家店", "logo": "http://p1.meituan.net/xianfu/4d942ae4c32d42041dadac1fdd951d5e995328.jpg", "location": "一楼第一家", 
        "menu": [
          { "id": 1,"price": "25", "name": "\u59dc\u8471\u767d\u5207\u9e21\u996d", "star": "5", "img": "http://p1.meituan.net/210.0/xianfu/d09505856223c9bcc6bd4611924789ea328886.jpg", "icon": "" },
          { "id": 2,"price": "25", "name": "\u76d0\u7117\u624b\u6495\u9e21\u996d", "star": "5", "img": "http://p0.meituan.net/210.0/wmproduct/4b87fd97cb2030bac78aa5652cbb064385230.jpg", "icon": "" },
          { "id": 3,"price": "28", "name": "\u624b\u6495\u9e21\u62fc\u9f13\u6cb9\u9e21", "star": "15", "img": "http://p1.meituan.net/210.0/xianfu/7f53a24ed5a13b376fb2f73b200c0f5a464896.jpg", "icon": "" }
          ]
          },
      { "id": 2, "diningRoomFlag": '东院食堂', "name": "第二家店", "logo": "http://p1.meituan.net/xianfu/4d942ae4c32d42041dadac1fdd951d5e995328.jpg", "location": "一楼第二家",
        "menu": [
          { "id": 1, "price": "25", "name": "\u59dc\u8471\u767d\u5207\u9e21\u996d", "star": "5", "img": "http://p1.meituan.net/210.0/xianfu/d09505856223c9bcc6bd4611924789ea328886.jpg", "icon": "" },
          { "id": 2, "price": "25", "name": "\u76d0\u7117\u624b\u6495\u9e21\u996d", "star": "5", "img": "http://p0.meituan.net/210.0/wmproduct/4b87fd97cb2030bac78aa5652cbb064385230.jpg", "icon": "" },
          { "id": 3, "price": "28", "name": "\u624b\u6495\u9e21\u62fc\u9f13\u6cb9\u9e21", "star": "15", "img": "http://p1.meituan.net/210.0/xianfu/7f53a24ed5a13b376fb2f73b200c0f5a464896.jpg", "icon": "" }
        ]
         },
      { "id": 3, "diningRoomFlag": '东院食堂', "name": "第三家店", "logo": "http://p1.meituan.net/xianfu/4d942ae4c32d42041dadac1fdd951d5e995328.jpg", "location": "一楼第三家",
        "menu": [
          { "id": 1, "price": "25", "name": "\u59dc\u8471\u767d\u5207\u9e21\u996d", "star": "5", "img": "http://p1.meituan.net/210.0/xianfu/d09505856223c9bcc6bd4611924789ea328886.jpg", "icon": "" },
          { "id": 2, "price": "25", "name": "\u76d0\u7117\u624b\u6495\u9e21\u996d", "star": "5", "img": "http://p0.meituan.net/210.0/wmproduct/4b87fd97cb2030bac78aa5652cbb064385230.jpg", "icon": "" },
          { "id": 3, "price": "28", "name": "\u624b\u6495\u9e21\u62fc\u9f13\u6cb9\u9e21", "star": "15", "img": "http://p1.meituan.net/210.0/xianfu/7f53a24ed5a13b376fb2f73b200c0f5a464896.jpg", "icon": "" }
        ]
         },
      {
        "id": 1, "diningRoomFlag": '心园餐厅', "name": "第一家店", "logo": "http://p1.meituan.net/xianfu/4d942ae4c32d42041dadac1fdd951d5e995328.jpg", "location": "一楼第一家",
        "menu": [
          { "id": 1, "price": "25", "name": "\u59dc\u8471\u767d\u5207\u9e21\u996d", "star": "5", "img": "http://p1.meituan.net/210.0/xianfu/d09505856223c9bcc6bd4611924789ea328886.jpg", "icon": "" },
          { "id": 2, "price": "25", "name": "\u76d0\u7117\u624b\u6495\u9e21\u996d", "star": "5", "img": "http://p0.meituan.net/210.0/wmproduct/4b87fd97cb2030bac78aa5652cbb064385230.jpg", "icon": "" },
          { "id": 3, "price": "28", "name": "\u624b\u6495\u9e21\u62fc\u9f13\u6cb9\u9e21", "star": "15", "img": "http://p1.meituan.net/210.0/xianfu/7f53a24ed5a13b376fb2f73b200c0f5a464896.jpg", "icon": "" }
        ]
      },
      {
        "id": 2, "diningRoomFlag": '心园餐厅', "name": "第二家店", "logo": "http://p1.meituan.net/xianfu/4d942ae4c32d42041dadac1fdd951d5e995328.jpg", "location": "一楼第二家",
        "menu": [
          { "id": 1, "price": "25", "name": "\u59dc\u8471\u767d\u5207\u9e21\u996d", "star": "5", "img": "http://p1.meituan.net/210.0/xianfu/d09505856223c9bcc6bd4611924789ea328886.jpg", "icon": "" },
          { "id": 2, "price": "25", "name": "\u76d0\u7117\u624b\u6495\u9e21\u996d", "star": "5", "img": "http://p0.meituan.net/210.0/wmproduct/4b87fd97cb2030bac78aa5652cbb064385230.jpg", "icon": "" },
          { "id": 3, "price": "28", "name": "\u624b\u6495\u9e21\u62fc\u9f13\u6cb9\u9e21", "star": "15", "img": "http://p1.meituan.net/210.0/xianfu/7f53a24ed5a13b376fb2f73b200c0f5a464896.jpg", "icon": "" }
        ]
      },
      {
        "id": 3, "diningRoomFlag": '心园餐厅', "name": "第三家店", "logo": "http://p1.meituan.net/xianfu/4d942ae4c32d42041dadac1fdd951d5e995328.jpg", "location": "一楼第三家",
        "menu": [
          { "id": 1, "price": "25", "name": "\u59dc\u8471\u767d\u5207\u9e21\u996d", "star": "5", "img": "http://p1.meituan.net/210.0/xianfu/d09505856223c9bcc6bd4611924789ea328886.jpg", "icon": "" },
          { "id": 2, "price": "25", "name": "\u76d0\u7117\u624b\u6495\u9e21\u996d", "star": "5", "img": "http://p0.meituan.net/210.0/wmproduct/4b87fd97cb2030bac78aa5652cbb064385230.jpg", "icon": "" },
          { "id": 3, "price": "28", "name": "\u624b\u6495\u9e21\u62fc\u9f13\u6cb9\u9e21", "star": "15", "img": "http://p1.meituan.net/210.0/xianfu/7f53a24ed5a13b376fb2f73b200c0f5a464896.jpg", "icon": "" }
        ]
      },
      {
        "id": 1, "diningRoomFlag": '西院食堂', "name": "第一家店", "logo": "http://p1.meituan.net/xianfu/4d942ae4c32d42041dadac1fdd951d5e995328.jpg", "location": "一楼第一家",
        "menu": [
          { "id": 1, "price": "25", "name": "\u59dc\u8471\u767d\u5207\u9e21\u996d", "star": "5", "img": "http://p1.meituan.net/210.0/xianfu/d09505856223c9bcc6bd4611924789ea328886.jpg", "icon": "" },
          { "id": 2, "price": "25", "name": "\u76d0\u7117\u624b\u6495\u9e21\u996d", "star": "5", "img": "http://p0.meituan.net/210.0/wmproduct/4b87fd97cb2030bac78aa5652cbb064385230.jpg", "icon": "" },
          { "id": 3, "price": "28", "name": "\u624b\u6495\u9e21\u62fc\u9f13\u6cb9\u9e21", "star": "15", "img": "http://p1.meituan.net/210.0/xianfu/7f53a24ed5a13b376fb2f73b200c0f5a464896.jpg", "icon": "" }
        ]
      },
      {
        "id": 2, "diningRoomFlag": '西院食堂', "name": "第二家店", "logo": "http://p1.meituan.net/xianfu/4d942ae4c32d42041dadac1fdd951d5e995328.jpg", "location": "一楼第二家",
        "menu": [
          { "id": 1, "price": "25", "name": "\u59dc\u8471\u767d\u5207\u9e21\u996d", "star": "5", "img": "http://p1.meituan.net/210.0/xianfu/d09505856223c9bcc6bd4611924789ea328886.jpg", "icon": "" },
          { "id": 2, "price": "25", "name": "\u76d0\u7117\u624b\u6495\u9e21\u996d", "star": "5", "img": "http://p0.meituan.net/210.0/wmproduct/4b87fd97cb2030bac78aa5652cbb064385230.jpg", "icon": "" },
          { "id": 3, "price": "28", "name": "\u624b\u6495\u9e21\u62fc\u9f13\u6cb9\u9e21", "star": "15", "img": "http://p1.meituan.net/210.0/xianfu/7f53a24ed5a13b376fb2f73b200c0f5a464896.jpg", "icon": "" }
        ]
      },
      {
        "id": 3, "diningRoomFlag": '西院食堂', "name": "第三家店", "logo": "http://p1.meituan.net/xianfu/4d942ae4c32d42041dadac1fdd951d5e995328.jpg", "location": "一楼第三家",
        "menu": [
          { "id": 1, "price": "25", "name": "\u59dc\u8471\u767d\u5207\u9e21\u996d", "star": "5", "img": "http://p1.meituan.net/210.0/xianfu/d09505856223c9bcc6bd4611924789ea328886.jpg", "icon": "" },
          { "id": 2, "price": "25", "name": "\u76d0\u7117\u624b\u6495\u9e21\u996d", "star": "5", "img": "http://p0.meituan.net/210.0/wmproduct/4b87fd97cb2030bac78aa5652cbb064385230.jpg", "icon": "" },
          { "id": 3, "price": "28", "name": "\u624b\u6495\u9e21\u62fc\u9f13\u6cb9\u9e21", "star": "15", "img": "http://p1.meituan.net/210.0/xianfu/7f53a24ed5a13b376fb2f73b200c0f5a464896.jpg", "icon": "" }
        ]
      },
      {
        "id": 1, "diningRoomFlag": '西院回民餐厅', "name": "第一家店", "logo": "http://p1.meituan.net/xianfu/4d942ae4c32d42041dadac1fdd951d5e995328.jpg", "location": "一楼第一家",
        "menu": [
          { "id": 1, "price": "25", "name": "\u59dc\u8471\u767d\u5207\u9e21\u996d", "star": "5", "img": "http://p1.meituan.net/210.0/xianfu/d09505856223c9bcc6bd4611924789ea328886.jpg", "icon": "" },
          { "id": 2, "price": "25", "name": "\u76d0\u7117\u624b\u6495\u9e21\u996d", "star": "5", "img": "http://p0.meituan.net/210.0/wmproduct/4b87fd97cb2030bac78aa5652cbb064385230.jpg", "icon": "" },
          { "id": 3, "price": "28", "name": "\u624b\u6495\u9e21\u62fc\u9f13\u6cb9\u9e21", "star": "15", "img": "http://p1.meituan.net/210.0/xianfu/7f53a24ed5a13b376fb2f73b200c0f5a464896.jpg", "icon": "" }
        ]
      },
      {
        "id": 2, "diningRoomFlag": '西院回民餐厅', "name": "第二家店", "logo": "http://p1.meituan.net/xianfu/4d942ae4c32d42041dadac1fdd951d5e995328.jpg", "location": "一楼第二家",
        "menu": [
          { "id": 1, "price": "25", "name": "\u59dc\u8471\u767d\u5207\u9e21\u996d", "star": "5", "img": "http://p1.meituan.net/210.0/xianfu/d09505856223c9bcc6bd4611924789ea328886.jpg", "icon": "" },
          { "id": 2, "price": "25", "name": "\u76d0\u7117\u624b\u6495\u9e21\u996d", "star": "5", "img": "http://p0.meituan.net/210.0/wmproduct/4b87fd97cb2030bac78aa5652cbb064385230.jpg", "icon": "" },
          { "id": 3, "price": "28", "name": "\u624b\u6495\u9e21\u62fc\u9f13\u6cb9\u9e21", "star": "15", "img": "http://p1.meituan.net/210.0/xianfu/7f53a24ed5a13b376fb2f73b200c0f5a464896.jpg", "icon": "" }
        ]
      },
      {
        "id": 3, "diningRoomFlag": '西院回民餐厅', "name": "第三家店", "logo": "http://p1.meituan.net/xianfu/4d942ae4c32d42041dadac1fdd951d5e995328.jpg", "location": "一楼第三家",
        "menu": [
          { "id": 1, "price": "25", "name": "\u59dc\u8471\u767d\u5207\u9e21\u996d", "star": "5", "img": "http://p1.meituan.net/210.0/xianfu/d09505856223c9bcc6bd4611924789ea328886.jpg", "icon": "" },
          { "id": 2, "price": "25", "name": "\u76d0\u7117\u624b\u6495\u9e21\u996d", "star": "5", "img": "http://p0.meituan.net/210.0/wmproduct/4b87fd97cb2030bac78aa5652cbb064385230.jpg", "icon": "" },
          { "id": 3, "price": "28", "name": "\u624b\u6495\u9e21\u62fc\u9f13\u6cb9\u9e21", "star": "15", "img": "http://p1.meituan.net/210.0/xianfu/7f53a24ed5a13b376fb2f73b200c0f5a464896.jpg", "icon": "" }
        ]
      },
      {
        "id": 1, "diningRoomFlag": '干训餐厅', "name": "第一家店", "logo": "http://p1.meituan.net/xianfu/4d942ae4c32d42041dadac1fdd951d5e995328.jpg", "location": "一楼第一家",
        "menu": [
          { "id": 1, "price": "25", "name": "\u59dc\u8471\u767d\u5207\u9e21\u996d", "star": "5", "img": "http://p1.meituan.net/210.0/xianfu/d09505856223c9bcc6bd4611924789ea328886.jpg", "icon": "" },
          { "id": 2, "price": "25", "name": "\u76d0\u7117\u624b\u6495\u9e21\u996d", "star": "5", "img": "http://p0.meituan.net/210.0/wmproduct/4b87fd97cb2030bac78aa5652cbb064385230.jpg", "icon": "" },
          { "id": 3, "price": "28", "name": "\u624b\u6495\u9e21\u62fc\u9f13\u6cb9\u9e21", "star": "15", "img": "http://p1.meituan.net/210.0/xianfu/7f53a24ed5a13b376fb2f73b200c0f5a464896.jpg", "icon": "" }
        ]
      },
      {
        "id": 2, "diningRoomFlag": '干训餐厅', "name": "第二家店", "logo": "http://p1.meituan.net/xianfu/4d942ae4c32d42041dadac1fdd951d5e995328.jpg", "location": "一楼第二家",
        "menu": [
          { "id": 1, "price": "25", "name": "\u59dc\u8471\u767d\u5207\u9e21\u996d", "star": "5", "img": "http://p1.meituan.net/210.0/xianfu/d09505856223c9bcc6bd4611924789ea328886.jpg", "icon": "" },
          { "id": 2, "price": "25", "name": "\u76d0\u7117\u624b\u6495\u9e21\u996d", "star": "5", "img": "http://p0.meituan.net/210.0/wmproduct/4b87fd97cb2030bac78aa5652cbb064385230.jpg", "icon": "" },
          { "id": 3, "price": "28", "name": "\u624b\u6495\u9e21\u62fc\u9f13\u6cb9\u9e21", "star": "15", "img": "http://p1.meituan.net/210.0/xianfu/7f53a24ed5a13b376fb2f73b200c0f5a464896.jpg", "icon": "" }
        ]
      },
      {
        "id": 3, "diningRoomFlag": '干训餐厅', "name": "第三家店", "logo": "http://p1.meituan.net/xianfu/4d942ae4c32d42041dadac1fdd951d5e995328.jpg", "location": "一楼第三家",
        "menu": [
          { "id": 1, "price": "25", "name": "\u59dc\u8471\u767d\u5207\u9e21\u996d", "star": "5", "img": "http://p1.meituan.net/210.0/xianfu/d09505856223c9bcc6bd4611924789ea328886.jpg", "icon": "" },
          { "id": 2, "price": "25", "name": "\u76d0\u7117\u624b\u6495\u9e21\u996d", "star": "5", "img": "http://p0.meituan.net/210.0/wmproduct/4b87fd97cb2030bac78aa5652cbb064385230.jpg", "icon": "" },
          { "id": 3, "price": "28", "name": "\u624b\u6495\u9e21\u62fc\u9f13\u6cb9\u9e21", "star": "15", "img": "http://p1.meituan.net/210.0/xianfu/7f53a24ed5a13b376fb2f73b200c0f5a464896.jpg", "icon": "" }
        ]
      },
      {
        "id": 1, "diningRoomFlag": 'Z座食堂', "name": "第一家店", "logo": "http://p1.meituan.net/xianfu/4d942ae4c32d42041dadac1fdd951d5e995328.jpg", "location": "一楼第一家",
        "menu": [
          { "id": 1, "price": "25", "name": "\u59dc\u8471\u767d\u5207\u9e21\u996d", "star": "5", "img": "http://p1.meituan.net/210.0/xianfu/d09505856223c9bcc6bd4611924789ea328886.jpg", "icon": "" },
          { "id": 2, "price": "25", "name": "\u76d0\u7117\u624b\u6495\u9e21\u996d", "star": "5", "img": "http://p0.meituan.net/210.0/wmproduct/4b87fd97cb2030bac78aa5652cbb064385230.jpg", "icon": "" },
          { "id": 3, "price": "28", "name": "\u624b\u6495\u9e21\u62fc\u9f13\u6cb9\u9e21", "star": "15", "img": "http://p1.meituan.net/210.0/xianfu/7f53a24ed5a13b376fb2f73b200c0f5a464896.jpg", "icon": "" }
        ]
      },
      {
        "id": 2, "diningRoomFlag": 'Z座食堂', "name": "第二家店", "logo": "http://p1.meituan.net/xianfu/4d942ae4c32d42041dadac1fdd951d5e995328.jpg", "location": "一楼第二家",
        "menu": [
          { "id": 1, "price": "25", "name": "\u59dc\u8471\u767d\u5207\u9e21\u996d", "star": "5", "img": "http://p1.meituan.net/210.0/xianfu/d09505856223c9bcc6bd4611924789ea328886.jpg", "icon": "" },
          { "id": 2, "price": "25", "name": "\u76d0\u7117\u624b\u6495\u9e21\u996d", "star": "5", "img": "http://p0.meituan.net/210.0/wmproduct/4b87fd97cb2030bac78aa5652cbb064385230.jpg", "icon": "" },
          { "id": 3, "price": "28", "name": "\u624b\u6495\u9e21\u62fc\u9f13\u6cb9\u9e21", "star": "15", "img": "http://p1.meituan.net/210.0/xianfu/7f53a24ed5a13b376fb2f73b200c0f5a464896.jpg", "icon": "" }
        ]
      },
      {
        "id": 3, "diningRoomFlag": 'Z座食堂', "name": "第三家店", "logo": "http://p1.meituan.net/xianfu/4d942ae4c32d42041dadac1fdd951d5e995328.jpg", "location": "一楼第三家",
        "menu": [
          { "id": 1, "price": "25", "name": "\u59dc\u8471\u767d\u5207\u9e21\u996d", "star": "5", "img": "http://p1.meituan.net/210.0/xianfu/d09505856223c9bcc6bd4611924789ea328886.jpg", "icon": "" },
          { "id": 2, "price": "25", "name": "\u76d0\u7117\u624b\u6495\u9e21\u996d", "star": "5", "img": "http://p0.meituan.net/210.0/wmproduct/4b87fd97cb2030bac78aa5652cbb064385230.jpg", "icon": "" },
          { "id": 3, "price": "28", "name": "\u624b\u6495\u9e21\u62fc\u9f13\u6cb9\u9e21", "star": "15", "img": "http://p1.meituan.net/210.0/xianfu/7f53a24ed5a13b376fb2f73b200c0f5a464896.jpg", "icon": "" }
        ]
      },
      {
        "id": 1, "diningRoomFlag": '公寓食堂', "name": "第一家店", "logo": "http://p1.meituan.net/xianfu/4d942ae4c32d42041dadac1fdd951d5e995328.jpg", "location": "一楼第一家",
        "menu": [
          { "id": 1, "price": "25", "name": "\u59dc\u8471\u767d\u5207\u9e21\u996d", "star": "5", "img": "http://p1.meituan.net/210.0/xianfu/d09505856223c9bcc6bd4611924789ea328886.jpg", "icon": "" },
          { "id": 2, "price": "25", "name": "\u76d0\u7117\u624b\u6495\u9e21\u996d", "star": "5", "img": "http://p0.meituan.net/210.0/wmproduct/4b87fd97cb2030bac78aa5652cbb064385230.jpg", "icon": "" },
          { "id": 3, "price": "28", "name": "\u624b\u6495\u9e21\u62fc\u9f13\u6cb9\u9e21", "star": "15", "img": "http://p1.meituan.net/210.0/xianfu/7f53a24ed5a13b376fb2f73b200c0f5a464896.jpg", "icon": "" }
        ]
      },
      {
        "id": 2, "diningRoomFlag": '公寓食堂', "name": "第二家店", "logo": "http://p1.meituan.net/xianfu/4d942ae4c32d42041dadac1fdd951d5e995328.jpg", "location": "一楼第二家",
        "menu": [
          { "id": 1, "price": "25", "name": "\u59dc\u8471\u767d\u5207\u9e21\u996d", "star": "5", "img": "http://p1.meituan.net/210.0/xianfu/d09505856223c9bcc6bd4611924789ea328886.jpg", "icon": "" },
          { "id": 2, "price": "25", "name": "\u76d0\u7117\u624b\u6495\u9e21\u996d", "star": "5", "img": "http://p0.meituan.net/210.0/wmproduct/4b87fd97cb2030bac78aa5652cbb064385230.jpg", "icon": "" },
          { "id": 3, "price": "28", "name": "\u624b\u6495\u9e21\u62fc\u9f13\u6cb9\u9e21", "star": "15", "img": "http://p1.meituan.net/210.0/xianfu/7f53a24ed5a13b376fb2f73b200c0f5a464896.jpg", "icon": "" }
        ]
      },
      {
        "id": 3, "diningRoomFlag": '公寓食堂', "name": "第三家店", "logo": "http://p1.meituan.net/xianfu/4d942ae4c32d42041dadac1fdd951d5e995328.jpg", "location": "一楼第三家",
        "menu": [
          { "id": 1, "price": "25", "name": "\u59dc\u8471\u767d\u5207\u9e21\u996d", "star": "5", "img": "http://p1.meituan.net/210.0/xianfu/d09505856223c9bcc6bd4611924789ea328886.jpg", "icon": "" },
          { "id": 2, "price": "25", "name": "\u76d0\u7117\u624b\u6495\u9e21\u996d", "star": "5", "img": "http://p0.meituan.net/210.0/wmproduct/4b87fd97cb2030bac78aa5652cbb064385230.jpg", "icon": "" },
          { "id": 3, "price": "28", "name": "\u624b\u6495\u9e21\u62fc\u9f13\u6cb9\u9e21", "star": "15", "img": "http://p1.meituan.net/210.0/xianfu/7f53a24ed5a13b376fb2f73b200c0f5a464896.jpg", "icon": "" }
        ]
      },
      {
        "id": 1, "diningRoomFlag": '公寓回民餐厅', "name": "第一家店", "logo": "http://p1.meituan.net/xianfu/4d942ae4c32d42041dadac1fdd951d5e995328.jpg", "location": "一楼第一家",
        "menu": [
          { "id": 1, "price": "25", "name": "\u59dc\u8471\u767d\u5207\u9e21\u996d", "star": "5", "img": "http://p1.meituan.net/210.0/xianfu/d09505856223c9bcc6bd4611924789ea328886.jpg", "icon": "" },
          { "id": 2, "price": "25", "name": "\u76d0\u7117\u624b\u6495\u9e21\u996d", "star": "5", "img": "http://p0.meituan.net/210.0/wmproduct/4b87fd97cb2030bac78aa5652cbb064385230.jpg", "icon": "" },
          { "id": 3, "price": "28", "name": "\u624b\u6495\u9e21\u62fc\u9f13\u6cb9\u9e21", "star": "15", "img": "http://p1.meituan.net/210.0/xianfu/7f53a24ed5a13b376fb2f73b200c0f5a464896.jpg", "icon": "" }
        ]
      },
      {
        "id": 2, "diningRoomFlag": '公寓回民餐厅', "name": "第二家店", "logo": "http://p1.meituan.net/xianfu/4d942ae4c32d42041dadac1fdd951d5e995328.jpg", "location": "一楼第二家",
        "menu": [
          { "id": 1, "price": "25", "name": "\u59dc\u8471\u767d\u5207\u9e21\u996d", "star": "5", "img": "http://p1.meituan.net/210.0/xianfu/d09505856223c9bcc6bd4611924789ea328886.jpg", "icon": "" },
          { "id": 2, "price": "25", "name": "\u76d0\u7117\u624b\u6495\u9e21\u996d", "star": "5", "img": "http://p0.meituan.net/210.0/wmproduct/4b87fd97cb2030bac78aa5652cbb064385230.jpg", "icon": "" },
          { "id": 3, "price": "28", "name": "\u624b\u6495\u9e21\u62fc\u9f13\u6cb9\u9e21", "star": "15", "img": "http://p1.meituan.net/210.0/xianfu/7f53a24ed5a13b376fb2f73b200c0f5a464896.jpg", "icon": "" }
        ]
      },
      {
        "id": 3, "diningRoomFlag": '公寓回民餐厅', "name": "第三家店", "logo": "http://p1.meituan.net/xianfu/4d942ae4c32d42041dadac1fdd951d5e995328.jpg", "location": "一楼第三家",
        "menu": [
          { "id": 1, "price": "25", "name": "\u59dc\u8471\u767d\u5207\u9e21\u996d", "star": "5", "img": "http://p1.meituan.net/210.0/xianfu/d09505856223c9bcc6bd4611924789ea328886.jpg", "icon": "" },
          { "id": 2, "price": "25", "name": "\u76d0\u7117\u624b\u6495\u9e21\u996d", "star": "5", "img": "http://p0.meituan.net/210.0/wmproduct/4b87fd97cb2030bac78aa5652cbb064385230.jpg", "icon": "" },
          { "id": 3, "price": "28", "name": "\u624b\u6495\u9e21\u62fc\u9f13\u6cb9\u9e21", "star": "15", "img": "http://p1.meituan.net/210.0/xianfu/7f53a24ed5a13b376fb2f73b200c0f5a464896.jpg", "icon": "" }
        ]
      }
    ],
    showSelectedShops:[]
	},
	rd_session: null,
	login: function() {
		var self = this;
		wx.login({
			success: function (res) {
				console.log('wx.login', res)
				server.getJSON('dwq/WxAppApi/setUserSessionKey.php', {code: res.code}, function (res) {
					self.rd_session = res.data.rd_session;
					self.globalData.hasLogin = true;
					wx.setStorageSync('rd_session', self.rd_session);
					self.getUserInfo();
				});
			}
		});
	},
	getUserInfo: function() {
		var self = this;
		wx.getUserInfo({
			success: function(res) {
				self.globalData.userInfo = res.userInfo;
				server.getJSON('dwq/WxAppApi/checkSignature.php', {
					rd_session: self.rd_session,
					signature: res.signature,
					raw_data: res.rawData
				}, function (res) {
					if (!res.data.is_pass) {
						// TODO:验证有误处理
						self.login();
					}
				});
			}			
		});
	}
})
