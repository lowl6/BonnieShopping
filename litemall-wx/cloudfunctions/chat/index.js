// cloudfunctions/chat/index.js
const cloud = require('wx-server-sdk')
const axios = require('axios')

// 初始化云开发
cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})

// ▼▼▼▼▼▼▼▼▼▼ 修改点1：将测试函数移到主函数外部 ▼▼▼▼▼▼▼▼▼▼
const testConnectivity = async () => {
  try {
    const start = Date.now()
    await axios.get('https://api.deepseek.com', { timeout: 5000 })
    console.log(`网络延迟: ${Date.now() - start}ms`)
    return true
  } catch (err) {
    console.error('网络诊断失败:', err.message)
    return false
  }
}

// 配置文件
const { API_KEY } = require('./config')

// ▼▼▼▼▼▼▼▼▼▼ 修改点2：移除顶层的await调用 ▼▼▼▼▼▼▼▼▼▼
exports.main = async (event) => {
  // ▼▼▼▼▼▼▼▼▼▼ 新增网络检查调用 ▼▼▼▼▼▼▼▼▼▼
  const connectionStatus = await testConnectivity()
  if (!connectionStatus) {
    return { 
      code: -1,
      content: '网络连接异常，请检查服务状态'
    }
  }

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
          content: event.message
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
      requestData: error.config?.data,
      response: error.response?.data
    })
    return { 
      code: -1, 
      content: error.response?.data?.error?.message || '服务暂时不可用' 
    }
  }
}