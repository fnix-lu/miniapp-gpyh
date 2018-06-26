var utils = require('../utils/utils.js');
var rootUrl = 'http://192.168.1.30:8101';

var services = {};

/**
 * 获取首页数据
 */
services.getIndexPage = function (callback) {
  wx.request({
    url: rootUrl + '/index/mall',
    method: 'GET',
    success: function (res) {
      callback(res);
    }
  })
};

/**
 * 登录
 */
services.login = function (data, callback) {
  wx.request({
    url: rootUrl + '/passport/login',
    method: 'POST',
    data: data,
    header: {
      'content-type': 'application/x-www-form-urlencoded'
    },
    success: function (res) {
      callback(res);
    }
  })
}

/**
 * 获取用户中心信息
 */
services.getUserCenter = function (callback) {
  wx.request({
    url: rootUrl + '/PersonalCenter/getCustomerInfoCenterData',
    method: 'GET',
    header: utils.createHeader(),
    success: function (res) {
      callback(res);
    }
  })
}

module.exports = services;