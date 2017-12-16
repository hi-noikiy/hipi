<template>
  <div style="height:100%">
    <div v-show="isLoading"></div>
    <router-view v-wechat-title="$route.meta.title" v-show="!isLoading"></router-view>
  </div>
</template>

<script>
export default {
  computed: {
    isLoading () {
      return this.$store.state.isLoading
    }
  }
}
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
.b-navigation {
  position: relative;
  top: -.1rem;
  border-top-left-radius: .1rem;
  border-top-right-radius: .1rem;
  background-color: #FFFFFF;
  padding: 10px;
  margin-bottom: -.1rem;
}
.b-navigation .yd-grids-icon img {
    height: 100%;
    border-radius: 100%;
    width: auto;
}
.b-navigation [class^=yd-grids-]:before {
  border-bottom: none;
}
.b-navigation [class^=yd-grids-] .yd-grids-item:not(:nth-child(4n)):before {
  border-right: none;
}
.b-navigation .yd-grids-item {
  padding: .15rem 0;
}
.b-navigation .yd-grids-item:after {
  border-bottom: none;
}
.b-service {
  background-color: #FFFFFF;
}
.vux-slider > .vux-swiper > .vux-swiper-item > a > .vux-swiper-desc {
  height: 1rem!important;
}
.vux-header {
  background-color: #1296db!important;
}
</style>
