
# 一份完整的数据格式如下，Json形式呈现，各个变量与wxml中已经对应成功
# tips:  推荐多个商品的时候可以带上商品名字，不然不知道是什么商品
#       小程序目前不支持跳转淘宝，目前解决办法是将addToCart函数改成copyUrl函数，我反正感觉够用了
{
  "_id": "1006002",
  "add_time": "2018-02-01 00:00:00",
  "brand_id": 0,
  "brief": "设计师原款，精致绣花",
  "category_id": 1008009,
  "counter_price": 919,
  "deleted": 0,
  "detail": [
    "http://yanxuan.nosdn.127.net/2597f9e2e41093f50761837eb4c2e6be.jpg",
    "http://yanxuan.nosdn.127.net/4377adc892bf9d16f9d0fd78f88a6986.jpg"
  ],
  "gallery": [
    "http://yanxuan.nosdn.127.net/4eb09e08ac9de543d2291d27a6be0b54.jpg",
    "http://yanxuan.nosdn.127.net/0c9eb81c7594dbe42802ff1ebbece51a.jpg",
    "http://yanxuan.nosdn.127.net/8cfc7b6bfd28687ab3399da08e5ba61b.jpg",
    "http://yanxuan.nosdn.127.net/b98cfd7f197b62abd1679321eae253a6.jpg"
  ],
  "goods_sn": "1006002",
  "is_hot": 0,
  "is_new": 0,
  "is_on_sale": 1,
  "name": "蓝色牛仔半身裙",
  "path": "pages/goods/goods?id=1006002",
  "pic_url": "http://yanxuan.nosdn.127.net/8ab2d3287af0cefa2cc539e40600621d.png",
  "retail_price": 899,
  "sort_order": 23,
  "unit": "件",
  "update_time": "2018-02-01 00:00:00",
  "taobaoUrl": "https://m.tb.cn/h.123456abc" 
}
## 一个更完整的版本（带评论，界面美观一些，也可以去调整wxss和wxml）
```json
{
  "_id": "1006002",
  "name": "蓝色牛仔半身裙",
  "goods_sn": "1006002",
  "brief": "设计师原款，精致绣花",
  "unit": "件",
  "add_time": "2018-02-01 00:00:00",
  "update_time": "2018-02-01 00:00:00",
  "category_id": 1008009,
  "brand": {
    "name": "简约时尚",
    "id": 1.0
  },
  "is_on_sale": 1.0,
  "is_new": 0.0,
  "is_hot": 0.0,
  "deleted": 0.0,
  "path": "pages/goods/goods?id=1006002",
  "pic_url": "http://yanxuan.nosdn.127.net/8ab2d3287af0cefa2cc539e40600621d.png",
  "shareImage": "http://yanxuan.nosdn.127.net/8ab2d3287af0cefa2cc539e40600621d.png",
  "retail_price": 899.0,
  "counter_price": 919.0,
  "sort_order": 23.0,
  "share": true,
  "userHasCollect": 0.0,
  "taobaoUrl": "http://yanxuan.nosdn.127.net/4eb09e08ac9de543d2291d27a6be0b54.jpg",
  "gallery": [
    "http://yanxuan.nosdn.127.net/4eb09e08ac9de543d2291d27a6be0b54.jpg",
    "http://yanxuan.nosdn.127.net/0c9eb81c7594dbe42802ff1ebbece51a.jpg",
    "http://yanxuan.nosdn.127.net/8cfc7b6bfd28687ab3399da08e5ba61b.jpg",
    "http://yanxuan.nosdn.127.net/b98cfd7f197b62abd1679321eae253a6.jpg"
  ],
  "detail": [
    "http://yanxuan.nosdn.127.net/2597f9e2e41093f50761837eb4c2e6be.jpg",
    "http://yanxuan.nosdn.127.net/4377adc892bf9d16f9d0fd78f88a6986.jpg"
  ],
  "productList": [
    {
      "id": "sku001",
      "number": 20.0,
      "price": 899.0,
      "specifications": ["S"],
      "url": "http://yanxuan.nosdn.127.net/4eb09e08ac9de543d2291d27a6be0b54.jpg"
    }
  ],
  "specificationList": [
    {
      "name": "尺码",
      "valueList": [
        { "id": "s", "specification": "尺码", "value": "S", "checked": false },
        { "id": "m", "specification": "尺码", "value": "M", "checked": false },
        { "id": "l", "specification": "尺码", "value": "L", "checked": false }
      ]
    }
  ],
  "groupon": [
    { "id": 1.0, "discount": 50.0, "discountMember": 2.0, "checked": false },
    { "id": 2.0, "discount": 100.0, "discountMember": 5.0, "checked": false }
  ],
  "comment": {
    "count": 1.0,
    "data": [
      {
        "id": 1.0,
        "avatar": "https://example.com/avatar.jpg",
        "nickname": "小明",
        "content": "质量不错，很合身。",
        "addTime": "2024-06-10",
        "picList": [
          "http://yanxuan.nosdn.127.net/4eb09e08ac9de543d2291d27a6be0b54.jpg",
          "http://yanxuan.nosdn.127.net/4eb09e08ac9de543d2291d27a6be0b54.jpg"
        ],
        "adminContent": "感谢您的反馈！"
      }
    ]
  },
  "issue": [
    {
      "id": 1.0,
      "question": "这件裙子尺码标准吗？",
      "answer": "尺码为标准尺码，可参考尺码表。"
    },
    {
      "id": 2.0,
      "question": "能否退换货？",
      "answer": "支持7天无理由退换货，请保持吊牌完整。"
    }
  ],
  "attribute": [
    { "attribute": "材质", "value": "牛仔布" },
    { "attribute": "颜色", "value": "蓝色" }
  ]
}
```


