Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputVal:'',
    recordLen:0,
    img:'../../imgs/talk/xueshengliuyan.png',
    remarks:[
      { id: 1, text: "公寓食堂二楼米线很好吃！" },
      { id: 2, text: "有人吗" },
      { id: 3, text: "新生报到" },
      { id: 4, text: "强烈推荐心园餐厅" },
      { id: 5, text: "心园餐厅的乾隆土豆包是一个特色菜，价格实惠而且口感好，适合几个人一起过去~" },
      { id: 6, text: "公寓食堂玉米怎么又涨价了。。。" },
      { id: 7, text: "知道哪里有卖米酒的吗？" },
      { id: 8, text: "A座餐厅的自助也很划算，不过要早点去，晚了人会很多，排队很久" },
      { id: 9, text: "有没有什么好吃的窗口按理啊？" },
      { id: 10, text: "公寓食堂二楼韩国石锅拌饭怎么关门了？不开了吗？" },
      { id: 11, text: "谁能告诉我今晚公寓食堂一楼水果铺还开吗..." },
      { id: 12, text: "我去过干训，很不错" },
    ]    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      recordLen : this.data.remarks.length
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  getInputVal:function(e){
    this.setData({
      inputVal: e.detail.value
    });
  },

  sendRemarks: function () {
    var len = this.data.remarks.length;
    var newRemark={
      id: ++len,
      text: this.data.inputVal
    };
    this.data.remarks.unshift(newRemark);
    this.data.inputVal = null;
    this.setData({
      remarks: this.data.remarks,
      recordLen : len,
      inputVal: null
    });
    wx.showToast({
      title: '发表成功！',
      icon: 'success',
      duration: 2000
    })
  }
})