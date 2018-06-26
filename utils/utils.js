var utils = {};

/**
 * 计算flex布局的列表需要补足的元素个数
 * total  列表项的总个数
 * col    布局列数
 */
utils.calcExtraItem = function (total, col) {
  if (total % col === 0) {
    return 0;
  }
  return col - total % col;
};

/**
 * 生成请求头
 */
utils.createHeader = function (obj) {
  var userInfo = wx.getStorageSync('userInfo');

  var header = {
    'client': 'minapp',
    'version': '1.0',
    'timestamp': '20180502151032123',
    // 'sign': '',
    'accessToken': userInfo ? userInfo.username + ':' + userInfo.token.accessToken : '',
    'refreshToken': userInfo ? userInfo.username + ':' + userInfo.token.refreshToken : ''
  }

  if (obj && typeof obj === 'object' && !(obj instanceof Array)) {
    for (var k in obj) {
      header[k] = obj[k];
    }
  }

  return header;
}



















module.exports = utils;