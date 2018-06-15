Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    list: [
      {
        name: '收货地址',
        isLink: true,
        content: '苏州工业园区',
        tip: '提示说明文字'
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
        content: '0000-00001111'
      }, {
        name: '建议反馈',
        isLink: true,
        content: ''
      }
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})