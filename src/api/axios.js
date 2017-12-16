import axios from 'axios'

// ---------------广告轮播---------------

// 首页
export const homeAdvert = () => axios.get('/v1/advert', {
  params: {
    for: 'home'
  }
})
// 商城
export const shopAdvert = () => axios.get('/v1/advert', {
  params: {
    for: 'shop'
  }
})

// ---------------导航---------------

// 首页
export const homeNav = () => axios.get('/v1/nav', {
  params: {
    for: 'home'
  }
})

// 首页服务
export const homeNavService = () => axios.get('/v1/nav', {
  params: {
    for: 'home',
    type: 'service'
  }
})

// 商城
export const shopNav = () => axios.get('/v1/nav', {
  params: {
    for: 'shop'
  }
})

// ---------------商城---------------

export const shopCategory = () => axios.get('/v1/category', {
  params: {
    integrity: 'full'
  }
})
