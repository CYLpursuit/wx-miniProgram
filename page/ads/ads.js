var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ads:[
      {
        id:1,
        img:[
          { url: '../../imgs/index/banner1.jpg'},
          { url: '../../imgs/index/banner2.jpg'},
          { url: '../../imgs/index/banner3.jpg'},
          { url: '../../imgs/index/banner1.jpg' }
        ],
        name:'A座食堂',
        content:'该食堂是位于学生公寓最大的一个食堂，共三层。宽敞明亮，设备齐全。'
      },
      {
        id: 2,
        img: [
          { url: '../../imgs/index/banner1.jpg' },
          { url: '../../imgs/index/banner2.jpg' },
          { url: '../../imgs/index/banner3.jpg' },
          { url: '../../imgs/index/banner1.jpg' }
        ],
        name: '东院食堂',
        content: '该食堂是位于学生公寓最大的一个食堂，共一层，分左右两个部分。教职工专区和学生专区。宽敞明亮，设备齐全。'
      },
      {
        id: 3,
        img: [
          { url: '../../imgs/index/banner1.jpg' },
          { url: '../../imgs/index/banner2.jpg' },
          { url: '../../imgs/index/banner3.jpg' },
          { url: '../../imgs/index/banner1.jpg' }
        ],
        name: '公寓食堂',
        content: '该食堂是位于学生公寓最大的一个食堂，共三层。宽敞明亮，设备齐全。'
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})