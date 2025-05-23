var api = require('../../../config/api.js');
var util = require('../../../utils/util.js');
var user = require('../../../utils/user.js');

var app = getApp();
Page({
  data: {
    canIUseGetUserProfile: false,
  },
  onLoad: function(options) {
    // 页面初始化 options为页面跳转所带来的参数
    // 页面渲染完成
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
  },
  onReady: function() {
    // 页面初次渲染完成时触发，此时页面节点树已构建完成，可以进行节点操作
  },
  onShow: function() {
    // 页面显示或从后台切回前台时触发，常用于更新页面数据
  },
  onHide: function() {
    // 页面隐藏或切入后台时触发，可用于暂停一些正在进行的操作
  },
  onUnload: function() {
    // 页面卸载时触发，比如页面关闭或重定向，可用于清理资源
  },
  wxLogin: function(e) {
    if (this.data.canIUseGetUserProfile) {
      wx.getUserProfile({
        desc: '用于完善会员资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
        success: (res) => {
          this.doLogin(res.userInfo)
        },
        fail: () => {
          util.showErrorToast('微信登录失败');
        }
      })
    }
    else {
      if (e.detail.userInfo == undefined) {
        app.globalData.hasLogin = false;
        util.showErrorToast('微信登录失败');
        return;
      }
      this.doLogin(e.detail.userInfo)
    }
  },
  doLogin: function(userInfo) {
    user.checkLogin().catch(() => {
      user.loginByWeixin(userInfo).then(res => {
        app.globalData.hasLogin = true;
        wx.navigateBack({
          delta: 1
        })
      }).catch((err) => {
        app.globalData.hasLogin = false;
        if (err.errMsg && err.errMsg.includes('network')) {
          util.showErrorToast('网络异常，请检查网络设置');
        } else {
          wx.showModal({
            title: '登录失败',
            content: '是否重试？',
            success: (res) => {
              if (res.confirm) {
                this.doLogin(userInfo);
              }
            }
          });
        }
      });
    });
  },
  accountLogin: function() {
    wx.navigateTo({
      url: "/pages/auth/accountLogin/accountLogin"
    });
  }
})