// pages/index/index.js
var app = getApp(),
    services = require('../../services/services.js'),
    utils = require('../../utils/utils.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    bannerList: [],
    articleList: [],
    tool: {
      category: [],
      extra: 0
    },
    fastener: {
      category: [],
      extra: 0
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _this = this;

    services.getIndexPage(function (res) {
      _this.setData({
        bannerList: res.data.resultData.bannerList,
        articleList: res.data.resultData.articleList,
        'tool.category': res.data.resultData.mainCategoryBo.toolCategories,
        'tool.extra': utils.calcExtraItem(res.data.resultData.mainCategoryBo.toolCategories.length, 3),
        'fastener.category': res.data.resultData.mainCategoryBo.fastenerCategories,
        'fastener.extra': utils.calcExtraItem(res.data.resultData.mainCategoryBo.fastenerCategories.length, 3)
      })
    })
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