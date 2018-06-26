var app = getApp(),
    services = require('../../services/services.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    account: {
      username: '',
      password: ''
    },
    loginErr: {
      isErr: false,
      leftCount: null
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
    
  },

  /**
   * 输入事件
   */
  usernameInput: function (e) {
    this.setData({
      'account.username': e.detail.value
    });
  },
  passwordInput: function (e) {
    this.setData({
      'account.password': e.detail.value
    });
  },

  /**
   * 登录
   */
  login: function () {
    var _this = this;

    services.login(_this.data.account, function (res) {
      // 登陆成功
      if (res.data.resultCode === '0') {
        var userInfo = {};

        userInfo.username = res.data.resultData.username;
        userInfo.customerInfoId = res.data.resultData.customerInfoId;
        userInfo.token = res.data.resultData.tokenBo;

        wx.setStorageSync('userInfo', userInfo);
        wx.navigateBack();
      }
      // 账号密码错误
      if (res.data.resultCode === '0103') {
        _this.setData({
          'loginErr.isErr': true,
          'loginErr.leftCount': res.data.resultData.leftCount
        });
      }
    })
  }
})