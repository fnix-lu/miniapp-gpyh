Page({

  /**
   * 页面的初始数据
   */
  data: {
    menuOrder: {
      column: 5,
      title: '我的订单',
      link: {
        text: '查看全部订单',
        url: ''
      },
      list: [
        {
          text: '待付款',
          icon: '../../img/mine/m1.png',
          url: ''
        }, {
          text: '待发货',
          icon: '../../img/mine/m2.png',
          url: ''
        }, {
          text: '已发货',
          icon: '../../img/mine/m3.png',
          url: ''
        }, {
          text: '退款/售后',
          icon: '../../img/mine/m4.png',
          url: ''
        }, {
          text: '送货单',
          icon: '../../img/mine/m5.png',
          url: ''
        }
      ]
    }
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