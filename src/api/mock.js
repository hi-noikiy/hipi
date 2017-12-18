const Mock = require('mockjs')
const Random = Mock.Random

Random.extend({
  appliance: function (data) {
    var appliances = ['电冰箱', '洗衣机', '热水器', '燃气灶', '热水壶', '跑步机', '电灯', '电热毯']
    return this.pick(appliances)
  }
})

Random.appliance()
// 使用mockjs模拟数据

// ---------------广告轮播---------------

// 首页
Mock.mock('/v1/advert?for=home', 'get', {
  'Status': 200,
  'Data|5': [
    {
      'url': '@url(http)',
      'img': '@dataImage(300x600, 广告图)',
      'title': '@ctitle(2)'
    }
  ]
})
// 商城
Mock.mock('/v1/advert?for=shop', 'get', {
  'Status': 200,
  'Data|5': [
    {
      'url': '@url(http)',
      'img': '@dataImage(300x600, Ben)',
      'title': '@ctitle(2)'
    }
  ]
})

// ---------------导航---------------

// 首页
Mock.mock('/v1/nav?for=home', 'get', {
  'Status': 200,
  'Data|8': [
    {
      'url': '@url(http)',
      'img': '@dataImage(100x100, Ben)',
      'title': '导航'
    }
  ]
})
// 首页服务
Mock.mock('/v1/nav?for=home&type=service', 'get', {
  'Status': 200,
  'Data': [
    {
      'url': '/songzhuang',
      'img': '@dataImage(300x600, Ben)',
      'title': '送装服务'
    },
    {
      'url': '@url(http)',
      'img': '@dataImage(300x600, Ben)',
      'title': '维修服务'
    },
    {
      'url': '@url(http)',
      'img': '@dataImage(300x600, Ben)',
      'title': '保养服务'
    },
    {
      'url': '@url(http)',
      'img': '@dataImage(300x600, Ben)',
      'title': '其他服务'
    }
  ]
})
// 商城
Mock.mock('/v1/nav?for=shop', 'get', {
  'Status': 200,
  'Data|4': [
    {
      'url': '@url(http)',
      'img': '@dataImage(100x100, Ben)',
      'title': '@ctitle(2)'
    }
  ]
})

Mock.mock('/v1/category?integrity=full', 'get', {
  'Status': 200,
  'Data': [
    {
      'categoryId': 1,
      'categoryName': '家电配件',
      'categoryImg|5': [
        {
          'url': '@url(http)',
          'img': '@dataImage(400x100, Category)'
        }
      ],
      'typeList|4': [
        {
          'typeId|+1': 1,
          'typeName': '@appliance',
          'typeImg': '@dataImage(100x100, type)'
        }
      ]
    },
    {
      'categoryId': 1,
      'categoryName': '家电配件',
      'categoryImg|5': [
        {
          'url': '@url(http)',
          'img': '@dataImage(400x100, Category)'
        }
      ],
      'typeList|4': [
        {
          'typeId|+1': 1,
          'typeName': '@appliance',
          'typeImg': '@dataImage(100x100, type)'
        }
      ]
    },
    {
      'categoryId': 1,
      'categoryName': '家电配件',
      'categoryImg|5': [
        {
          'url': '@url(http)',
          'img': '@dataImage(400x100, Category)'
        }
      ],
      'typeList|4': [
        {
          'typeId|+1': 1,
          'typeName': '@appliance',
          'typeImg': '@dataImage(100x100, type)'
        }
      ]
    }
  ]
})

Mock.mock('/v1/product', 'get', {
  'Status': 200,
  'Data': {
    'productId': 1,
    'productName': '测试商品',
    'productImg|5': [{
      'url': '@url(http)',
      'img': '@dataImage(600x600, 商品图片)',
      'title': '@ctitle(2)'
    }],
    'productCollection': '@boolean()',
    'productOriginalPrice': 1992.20,
    'productCurrentPrice': 1000.66,
    'productSales': 800,
    'productInventory': 100,
    'productInventoryWarning': 20,
    'productDetailsImg|5': [{
      'url': '@url(http)',
      'img': '@dataImage(500x500, 商品详情图片)',
      'title': '@ctitle(2)'
    }],
    'productSpecification': null,
    'productEvaluation|4': [{
      'eId|+1': 1,
      'eTime': '@datetime(yyyy-MM-dd HH:mm)',
      'eUserName': '@cname()',
      'eUserHeadImg': '@dataImage(100x100, 评论人头像)',
      'eUserId': '@integer(100, 500)',
      'eRate': '@integer(0, 5)',
      'eContent': '@csentence(10, 40)',
      'eReply': '@csentence(0, 40)',
      'eReplyTime': '@datetime(yyyy-MM-dd HH:mm)'
    }]
  }
})
