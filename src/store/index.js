import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './action'
import getters from './getters'

Vue.use(Vuex)

const state = {
  isLoading: false, // 是否加载中
  login: true, // 是否登录
  userInfo: null, // 用户信息
  cartList: {}, // 加入购物车的商品列表
  newAddress: [], // 确认订单页新的地址
  choosedAddress: null, // 选择地址
  addressIndex: null, // 选择地址的索引值
  removeAddress: [], // 移除地址
  addAddress: '', // 新增地址
  orderParam: null, // 订单的参数
  orderMessage: null, // 订单返回的信息
  orderDetail: null // 订单详情
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
