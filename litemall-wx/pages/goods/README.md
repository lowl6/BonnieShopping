
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
      },
      {
        "id": 2.0,
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


<img src="https://img.alicdn.com/imgextra/i4/2216677490557/O1CN01PKByv51Fz9fYgvKaX_!!2216677490557.jpg_.webp" placeholder="https://gw.alicdn.com/imgextra/i4/O1CN01CYtPWu1MUBqQAUK9D_!!6000000001437-2-tps-2-2.png" class="_4nNipe17pV--mainPic--_8729489" data-extentions-extra-ocr-id="8f0bdc6e20dc1b86c60244e0b5ca5087" style="padding-top: 0px;">
|||||||||||||||
https://img.alicdn.com/imgextra/i4/133708381/O1CN01zINt7U2BmYUaLFEdc_!!4611686018427386461-0-item_pic.jpg_q50.jpg_.webp
{
  "_id": "1006013",
  "name": "蓝色牛仔半身裙",
  "goods_sn": "1006007",
  "brief": "150人评价 “质感很好” 超6千人架加购",
  "unit": "件",
  "add_time": "2025-06-19 20:00:00",
  "update_time": "2025-06-19 20:00:00",
  "category_id": 1008009,
  "brand": {
    "name": "Attack On Jeans",
    "id": 1.0
  },
  "is_on_sale": 1.0,
  "is_new": 1.0,
  "is_hot": 1.0,
  "deleted": 0.0,
  "path": "pages/goods/goods?id=1006007",
  "pic_url": "https://img.alicdn.com/imgextra/i1/377678061/O1CN01sOoNFC29PzVDZB7R0_!!377678061.jpg_q50.jpg_.webp",
  "shareImage": "https://img.alicdn.com/imgextra/i1/377678061/O1CN01sOoNFC29PzVDZB7R0_!!377678061.jpg_q50.jpg_.webp",
  "retail_price": 108.0,
  "counter_price": 139.0,
  "sort_order": 23.0,
  "share": true,
  "userHasCollect": 0.0,
  "taobaoUrl": "https://item.taobao.com/item.htm?id=704400704889&ns=1&pisk=gX_sczGrfADsto8xGhVERaNXai8bkWzz1jOAZs3ZMFLtkS6VLZ-v3lXXctWHDN8N_99AU99tuovZlE1fntWfi5AvHtBX3GrUz1fMoEezhzzPs23oEBBsWdKLMIdmkW-t4gB55EezUriE9h2wktumheEKvQvp6Id9DWTpGI09kndO9WOvgAnxWtFQOIdsBIptWBHp_Q8xBEpv96dDZK3xkqULOIvKXELAHeFBibbnUIN2C1NNWLE1BfmSwp3xkwO6vkR9pBJ_gB-s919Kk836shiN6pgxkwsfRLSWBucenFJGOC60rVY9ciQwJNeLkUIldZtJPoPMXssCnF7LMcpRbO8dWgGxk6T1XnbvVAwBeNfdreKUy71d-O5GRslYkBWyp1b9lzFk5Fp9RBb4KVpfviQwjEDThKbC9NIf4g3yFGFqcXtolB9zOWimmDMtF1pUMkD6XBA6RWNICeK9tB9zOWimmhdHTDNQOATd.&priceTId=2147819417503427533893372e191f&skuId=5133553247792&spm=a21n57.sem.item.93.2df33903YrQSI9&utparam=%7B%22aplus_abtest%22%3A%226f6d06369ed0e0bd64a43c6a1b5516ae%22%7D&xxc=ad_ztc",
  "gallery": [
    "https://img.alicdn.com/imgextra/i1/377678061/O1CN01sOoNFC29PzVDZB7R0_!!377678061.jpg_q50.jpg_.webp",
    "https://img.alicdn.com/imgextra/i2/377678061/O1CN01wLDrRa29PzVGiDiSX_!!377678061.jpg_q50.jpg_.webp",
    "https://img.alicdn.com/imgextra/i4/377678061/O1CN01fGei9w29PzVF0Ca1n_!!377678061.jpg_q50.jpg_.webp"
  ],
  "detail": [
    "https://img.alicdn.com/imgextra/i1/377678061/O1CN01sOoNFC29PzVDZB7R0_!!377678061.jpg_q50.jpg_.webp"
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
    "count": 999.0,
    "data": [
      {
        "id": 1.0,
        "avatar": "https://sns.m.taobao.com/avatar/sns/user/flag/sns_logo?type=taobao&kn=wwc_tb_11&bizCode=taobao_avatar&userFlag=RAzN84GK7wS8eNv3vgkcwYjfgWy2wtMEWV2BxEnJhB6f5tuhV16CNyhc6rcELSdfhQvZ1dSDjNSz5DgyoXk9b2RKYRdLeZTS7A6w74xbP2f8xRNyvQwu9jBnyd6gmxBbdkipEKeMkL3EhDC1Fh4Wjmavz72F272HUMX1B4d",
        "nickname": "t**8",
        "content": "子版型不错，显的腿很长，随手搭配就超好看，穿着整体来说可以，非常合身，版型不显腿粗，胖瘦的姐妹都能穿，而且很百搭，有什么问题第一时间咨询客服，非常喜欢客服小姐姐",
        "addTime": "2025-06-10",
        "picList": [
          "https://img.alicdn.com/imgextra/i2/4611686018427381246/O1CN01wXvsf01PZBMASEcmU_!!4611686018427381246-0-rate.jpg_960x960.jpg_.webp",
          "https://img.alicdn.com/imgextra/i2/4611686018427381246/O1CN01gpVlD81PZBMCLcKlK_!!4611686018427381246-0-rate.jpg_960x960.jpg_.webp",
          "https://img.alicdn.com/imgextra/i2/4611686018427381246/O1CN01WuRcol1PZBM9tesyQ_!!4611686018427381246-0-rate.jpg_960x960.jpg_.webp"
        ],
        "adminContent": "谢谢您的支持！"
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
    { "attribute": "材质成分", "value": "棉77% 聚酯纤维23%" },
    { "attribute": "版型", "value": "宽松" },
    { "attribute": "厚薄", "value": "常规" },
    { "attribute": "廓形", "value": "A型" }
  ]
}