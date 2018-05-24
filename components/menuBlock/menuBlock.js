Component({
  // 对外公开的属性，接收数据传入
  properties: {
    options: Object
  },
  methods: {
    _getColumnClass: function (column) {
      return 'item-1-4';
      // switch (column) {
      //   case 4: return 'item-1-4';
      //   case 5: return 'item-1-5';
      // }
    }
  }
})