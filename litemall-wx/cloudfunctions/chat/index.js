// cloudfunctions/chat/index.js
const cloud = require('wx-server-sdk')
const axios = require('axios')

// 初始化云开发
cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})

// 配置文件
const { API_KEY } = require('./config')
exports.main = async (event) => {
  try {
    // 确保 event.message 存在且非空
    if (!event.message?.trim()) {
      throw new Error('消息内容不能为空')
    }

    const response = await axios.post('https://api.deepseek.com/chat/completions', {
      model: "deepseek-chat",
      messages: [
        {
          role: "system", 
          content: "你是邦妮，一个帮助用户筛选商品的购物助手，用可爱活泼的语气回答问题"
        },
        {
          role: "user",
          content: event.message // 确保这里传递了有效内容
        }
      ],
      stream: false
    }, {
      headers: {
        'Authorization': `Bearer ${API_KEY}`,
        'Content-Type': 'application/json'
      },
      timeout: 15000
    })

    return { code: 0, content: response.data.choices[0].message.content }
  } catch (error) {
    console.error('完整错误信息:', {
      requestData: error.config?.data, // 打印实际发送的请求体
      response: error.response?.data
    })
    return { 
      code: -1, 
      content: error.response?.data?.error?.message || '服务暂时不可用' 
    }
  }
}