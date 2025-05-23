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
      success: async res => { // 将回调函数标记为异步函数
        console.log('[云函数原始响应]', JSON.stringify(res, null, 2)) // 新增详细日志
        const content = res.result.code === 0 ? 
          res.result.content : '邦妮走神了，请再说一次~'
        
        this.setData({
          chatMessages: [...newMessages, 
            { type: 'bot', content: content }
          ],
          scrollTop: 99999
        })
           
          // 检测并提取方括号中的内容
     const productTags = [];
const noMatchTags = [];

if (content) {
  // 正则表达式：匹配方括号及其内容
  const regex = /\[([^\]]+)\]/g;
  let match;
  
  while ((match = regex.exec(content)) !== null) {
    // 提取方括号内的内容
    const tagContent = match[1].trim();
    
    if (tagContent) {
      // 仅当 productTags 中不存在该标签时才添加
      if (!productTags.includes(tagContent)) {
        productTags.push(tagContent);
      }
    } else {
      // 仅当 noMatchTags 中不存在该空标签时才添加
      const emptyTag = match[0];
      if (!noMatchTags.includes(emptyTag)) {
        noMatchTags.push(emptyTag);
      }
    }
  }
}
    
console.log('1. productTags 内容:', productTags);
console.log('2. productTags 长度:', productTags.length);
console.log('3. noMatchTags 内容:', noMatchTags);
        
        // 遍历商品标签，在数据库中检索商品
        for (const tag of productTags) {
          try {
            // 调用数据库查询，这里需要根据实际情况修改查询逻辑
            const db = wx.cloud.database();
            const res = await db.collection('goods')
              .where({
                name: db.RegExp({
                  regexp: tag,
                  options: 'i',
                })
              })
              .get();
             console.log('查询成功:', res.data); // 输出匹配的文档数组
            if (res.data.length === 0) {
             console.log('未找到匹配数据，可能是名称或openid不匹配',tag);
             }
            if (res.data.length > 0) {
              const goodsId = res.data[0]._id;
              // 调用 bonnieSendMessage 函数
              this.bonnieSendMessage(goodsId);
            } else {
              // 记录未匹配到的商品标签
              noMatchTags.push(tag);
            }
          } catch (err) {
            console.error('数据库查询失败', err);
            noMatchTags.push(tag);
          }
        }

        // 若有未匹配到的商品标签，让邦妮输出提示信息
        if (noMatchTags.length > 0) {
      const tagStr = noMatchTags.join('、');
      // 使用模板字符串嵌入tagStr变量
      const message = `伤心(o(╥﹏╥)o),邦妮的衣柜里暂时没有 ${tagStr}，邦妮会努力工作填满衣柜的~`;
          this.setData({
            chatMessages: [...this.data.chatMessages, { type: 'bot', content: message }],
            scrollTop: this.data.scrollTop + 1000
          });
        }
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
    // this.callLargeModel(userMessage);
  },
//   async callLargeModel(userMessage) {
//     // 预留大模型接口
//     // 示例返回，实际使用时需替换为真实接口调用
//     const response = await new Promise(resolve => {
//       setTimeout(() => {
//         resolve({
//           result: {
//             code: 0,
//             content: '这是大模型的回复示例，实际使用时需替换为真实接口返回内容，推荐商品 [T恤]。',
//             products: [
//               "白色裙子",
//               "黄色裙子",
//               "白色萌萌鞋",
//               "黑色酷酷鞋"
//             ]
//           }
//         });
//       }, 1000);
//     });
//     this.setData({
//       messages: [...this.data.messages, { type: 'bot', content: response.result.content }],
//       scrollTop: this.data.scrollTop + 1000
//     });


//   },
//   // 模拟邦妮发送消息
  bonnieSendMessage(goodsId) {
    const newMessage = {
      type: 'bot',
      content: '这是邦妮推荐的商品哦~',
      goodsId: goodsId
    };
    console.log("goodsId:",goodsId);
    this.setData({
      chatMessages: [...this.data.chatMessages, newMessage]
    });
  }
})