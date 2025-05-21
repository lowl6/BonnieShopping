const util = require('../../utils/util.js');
const api = require('../../config/api.js');
const user = require('../../utils/user.js');

//获取应用实例
const app = getApp();

Page({
  data: {
    newGoods: [],
    hotGoods: [],
    topics: [],
    brands: [],
    groupons: [],
    floorGoods: [],
    banner: [],
    channel: [],
    coupon: [],
    goodsCount: 0,
    chatMessages: [],
    inputMessage: '',
    scrollTop: 0
  },

  onShareAppMessage: function() {
    return {
      title: '邦妮小程序商场',
      desc: '微信小程序商城',
      path: '/pages/index/index'
    }
  },

  onPullDownRefresh() {
    wx.showNavigationBarLoading() //在标题栏中显示加载
    this.getIndexData();
    wx.hideNavigationBarLoading() //完成停止加载
    wx.stopPullDownRefresh() //停止下拉刷新
  },

  getIndexData: function() {
    let that = this;
    util.request(api.IndexUrl).then(function(res) {
      if (res.errno === 0) {
        that.setData({
          newGoods: res.data.newGoodsList,
          hotGoods: res.data.hotGoodsList,
          topics: res.data.topicList,
          brands: res.data.brandList,
          floorGoods: res.data.floorGoodsList,
          banner: res.data.banner,
          groupons: res.data.grouponList,
          channel: res.data.channel,
          coupon: res.data.couponList
        });
      }
    });
    util.request(api.GoodsCount).then(function (res) {
      that.setData({
        goodsCount: res.data
      });
    });
  },
  onLoad: function(options) {
    // 页面初始化 options为页面跳转所带来的参数
    if (options.scene) {
      //这个scene的值存在则证明首页的开启来源于朋友圈分享的图,同时可以通过获取到的goodId的值跳转导航到对应的详情页
      var scene = decodeURIComponent(options.scene);
      console.log("scene:" + scene);

      let info_arr = [];
      info_arr = scene.split(',');
      let _type = info_arr[0];
      let id = info_arr[1];

      if (_type == 'goods') {
        wx.navigateTo({
          url: '../goods/goods?id=' + id
        });
      } else if (_type == 'groupon') {
        wx.navigateTo({
          url: '../goods/goods?grouponId=' + id
        });
      } else {
        wx.navigateTo({
          url: '../index/index'
        });
      }
    }

    // 页面初始化 options为页面跳转所带来的参数
    if (options.grouponId) {
      //这个pageId的值存在则证明首页的开启来源于用户点击来首页,同时可以通过获取到的pageId的值跳转导航到对应的详情页
      wx.navigateTo({
        url: '../goods/goods?grouponId=' + options.grouponId
      });
    }

    // 页面初始化 options为页面跳转所带来的参数
    if (options.goodId) {
      //这个goodId的值存在则证明首页的开启来源于分享,同时可以通过获取到的goodId的值跳转导航到对应的详情页
      wx.navigateTo({
        url: '../goods/goods?id=' + options.goodId
      });
    }

    // 页面初始化 options为页面跳转所带来的参数
    if (options.orderId) {
      //这个orderId的值存在则证明首页的开启来源于订单模版通知,同时可以通过获取到的pageId的值跳转导航到对应的详情页
      wx.navigateTo({
        url: '../ucenter/orderDetail/orderDetail?id=' + options.orderId
      });
    }

    this.getIndexData();
  },
  onReady: function() {
    // 页面渲染完成
  },
  onShow: function() {
    // 页面显示
  },
  onHide: function() {
    // 页面隐藏
  },
  onUnload: function() {
    // 页面关闭
  },
  getCoupon(e) {
    let couponId = e.currentTarget.dataset.index
    util.request(api.CouponReceive, {
      couponId: couponId
    }, 'POST').then(res => {
      if (res.errno === 0) {
        wx.showToast({
          title: "领取成功"
        })
      }
      else{
        util.showErrorToast(res.errmsg);
      }
    })
  },
  onInput(e) {
    this.setData({
      inputMessage: e.detail.value
    });
  },
  sendMessage() {
    const message = this.data.inputMessage.trim()
    if (!message) return

    // 添加用户消息
    const newMessages = [...this.data.chatMessages, 
      { type: 'user', content: message }
    ]
    this.setData({
      chatMessages: newMessages,
      inputMessage: '',
      scrollTop: 99999
    })

    // 调用云函数
    wx.cloud.callFunction({
      name: 'chat',
      data: { message: message },
      success: res => {
        const content = res.result.code === 0 ? 
          res.result.content : '邦妮走神了，请再说一次~'
        
        this.setData({
          chatMessages: [...newMessages, 
            { type: 'bot', content: content }
          ],
          scrollTop: 99999
        })
      },
      fail: err => {
        this.setData({
          chatMessages: [...newMessages, 
            { type: 'bot', content: '网络开小差了，请检查网络后重试' }
          ]
        })
      }
    })
    const userMessage = this.data.inputMessage;
    if (userMessage.trim() === '') return;
    
    this.setData({
      messages: [...this.data.messages, { type: 'user', content: userMessage }],
      inputMessage: '',
      scrollTop: this.data.scrollTop + 1000
    });
    
    // 调用大模型接口
    this.callLargeModel(userMessage);
  },
  async callLargeModel(userMessage) {
    // 预留大模型接口
    // 示例返回，实际使用时需替换为真实接口调用
    const response = await new Promise(resolve => {
      setTimeout(() => {
        resolve({
          content: '这是大模型的回复示例，实际使用时需替换为真实接口返回内容。'
        });
      }, 1000);
    });
    
    this.setData({
      messages: [...this.data.messages, { type: 'bot', content: response.content }],
      scrollTop: this.data.scrollTop + 1000
    });
  }
})