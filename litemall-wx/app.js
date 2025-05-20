// 引入工具函数模块
import util from './utils/util.js';
// 引入 API 配置模块
import api from './config/api.js';
// 引入用户相关功能模块
import user from './utils/user.js';

/**
 * 小程序全局 App 实例
 */
App({
  /**
   * 小程序初始化完成时触发，全局只触发一次
   */
  onLaunch() {
    // 扩展 Promise 原型添加 finally 方法
    wx.cloud.init({
      env: 'cloud1-5gpcfxile193e298', // 在云开发控制台查看
      traceUser: true
    })
    if (!Promise.prototype.finally) {
      Promise.prototype.finally = function(callback) {
        const P = this.constructor;
        return this.then(
          value => P.resolve(callback()).then(() => value),
          reason => P.resolve(callback()).then(() => { throw reason; })
        );
      };
    }
    
    // 处理小程序版本更新
    const updateManager = wx.getUpdateManager();
    
    updateManager.onUpdateReady(() => {
      wx.showModal({
        title: '更新提示',
        content: '新版本已经准备好，是否重启应用？',
        success: ({ confirm }) => {
          if (confirm) {
            updateManager.applyUpdate();
          }
        }
      });
    });
    
    // 监听版本更新失败事件
    updateManager.onUpdateFailed(() => {
      console.error('新版本下载失败');
    });
  },
  
  /**
   * 小程序启动，或从后台进入前台显示时触发
   * @param {Object} options - 小程序启动参数
   */
  onShow(options) {
    this.checkLoginStatus();
  },
  
  /**
   * 检查用户登录状态
   */
  checkLoginStatus() {
    user.checkLogin()
      .then(() => {
        this.globalData.hasLogin = true;
      })
      .catch(() => {
        this.globalData.hasLogin = false;
      });
  },
  
  // 小程序全局数据对象
  globalData: {
    hasLogin: false
  }
});    
// app.js 初始化云开发
wx.cloud.init({
  env: '你的云环境ID',  // 在微信云控制台获取
  traceUser: true
})
