<template>
  <router-view v-wechat-title="$route.meta.title"></router-view>
</template>

<script>
// export default {
//   name: 'app'
// }
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';
html,body {
  height: 100%;
  width: 100%;
}
body {
  background-color: #fbf9fe;
}
#app {
  height: 100%;
}
.yp-navigation {
  position: relative;
  top: -10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-color: #FFFFFF;
  padding: 10px;
  margin-bottom: -10px;
}
.yp-service {
  background-color: #FFFFFF;
}
.vux-slider > .vux-swiper > .vux-swiper-item > a > .vux-swiper-desc {
  height: 1rem!important;
}
.vux-header {
  background-color: #1296db!important;
}
</style>
