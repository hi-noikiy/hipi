import App from '../App'
// 首页
const home = r => require.ensure([], () => r(require('../pages/home/home')), 'home')
const songzhuang = r => require.ensure([], () => r(require('../pages/service/songzhuang')), 'songzhuang')
// 商城
const shop = r => require.ensure([], () => r(require('../pages/shop/shop')), 'shop')
const category = r => require.ensure([], () => r(require('../pages/shop/category')), 'category')
const product = r => require.ensure([], () => r(require('../pages/shop/children/product')), 'product')
const cart = r => require.ensure([], () => r(require('../pages/shop/children/cart')), 'cart')

const bill = r => require.ensure([], () => r(require('../pages/bill/bill')), 'bill')
const my = r => require.ensure([], () => r(require('../pages/my/my')), 'my')

export default [
  {
    path: '/',
    component: App,
    children: [
      {
        path: '',
        redirect: '/home'
      },
      {
        path: '/home',
        component: home,
        meta: {
          title: '首页'
        }
      },
      {
        path: '/shop',
        component: shop,
        meta: {
          title: '商城',
          keepAlive: true
        },
        children: [
          {
            path: 'cart',
            name: '购物车',
            component: cart
          }
        ]
      },
      {
        path: '/category',
        component: category,
        name: '商品分类',
        meta: {
          title: '商品分类'
        }
      },
      {
        path: '/product/:productId',
        component: product,
        name: '商品详情',
        meta: {
          title: '商品详情'
        }
      },
      {
        path: '/bill',
        component: bill,
        meta: {
          title: '订单'
        }
      },
      {
        path: '/my',
        component: my,
        meta: {
          title: '个人中心'
        }
      },
      {
        path: 'songzhuang',
        component: songzhuang,
        name: '送装服务',
        meta: {
          title: '送装服务'
        }
      }
    ]
  }
]
