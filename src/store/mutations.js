import { GET_USERINFO, RECORD_USERINFO, CHANGE_LOADING } from './mutation-types'

import { setStore } from './../api/common'

export default {
  // 获取用户信息存入vuex
  [GET_USERINFO] (state, info) {
    if (state.userInfo && (state.userInfo.username !== info.username)) {
      return false
    }
    if (!state.login) {
      return false
    }
    if (!info.message) {
      state.userInfo = { ...info }
    } else {
      state.userInfo = null
    }
  },
  // 记录用户信息
  [RECORD_USERINFO] (state, info) {
    state.userInfo = info
    state.login = true
    setStore('userId', info.userId)
  },
  // 改变页面Loading状态
  [CHANGE_LOADING] (state, isLoading) {
    state.isLoading = isLoading
  }
}
