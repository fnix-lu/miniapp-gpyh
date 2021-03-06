// pages/password/password.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    menuList: [
      {
        name: '登录密码',
        isLink: true,
        content: ''
      }, {
        name: '支付密码管理',
        tip: '在预付款支付和白条支付时需要输入的密码', 
        isLink: true,
        content: ''
      }, {
        name: '预付款免验支付',
        tip: '在预付款支付时，付款金额 ≤ 自定义额度，无需输入短信验证码',         
        isLink: true,
        content: '关闭'
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