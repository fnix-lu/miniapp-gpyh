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
          icon: '../../assets/img/mine/m1.png',
          url: ''
        }, {
          text: '待发货',
          icon: '../../assets/img/mine/m2.png',
          url: ''
        }, {
          text: '已发货',
          icon: '../../assets/img/mine/m3.png',
          url: ''
        }, {
          text: '退款/售后',
          icon: '../../assets/img/mine/m4.png',
          url: ''
        }, {
          text: '送货单',
          icon: '../../assets/img/mine/m5.png',
          url: ''
        }
      ]
    },
    menuFinance: {
      column: 4,
      title: '财务中心',
      link: {
        text: '去管理',
        url: ''
      },
      list: [
        {
          text: '预付款',
          icon: '../../assets/img/mine/m6.png',
          url: ''
        }, {
          text: '订单对账',
          icon: '../../assets/img/mine/m7.png',
          url: ''
        }, {
          text: '工品券',
          icon: '../../assets/img/mine/m8.png',
          url: ''
        }, {
          text: '申请开票',
          icon: '../../assets/img/mine/m9.png',
          url: ''
        }
      ]
    },
    menuList: [
      {
        name: '收货地址',
        isLink: true,
        content: ''
      }, {
        name: '发票信息',
        isLink: true,
        content: ''
      }, {
        name: '售后服务',
        isLink: true,
        content: ''
      }, {
        name: '客服热线',
        isLink: false,
        content: '0000-00000001'
      }, {
        name: '建议反馈',
        isLink: true,
        content: ''
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