// components/contentBlock/contentBlock.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    mode: {
      type: Number,
      value: 1
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    modeClass: ''
  },

  /**
   * 组件的方法列表
   */
  methods: {
    
  },

  attached: function () {
    this.setData({
      modeClass: 'mode' + this.data.mode
    });
    console.log(this.data);
  }
})
