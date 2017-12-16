const Mock = require('mockjs')
// const Random = Mock.Random
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
