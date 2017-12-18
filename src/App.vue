<template>
  <div style="height:100%">
    <div class="b-mask" v-show="isLoading"></div>
    <loading :show="isLoading" text="正在加载"></loading>
    <router-view v-wechat-title="$route.meta.title" v-if="!$route.meta.keepAlive"></router-view>
    <keep-alive>
      <router-view v-wechat-title="$route.meta.title" v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
  </div>
</template>

<script>
import { Loading } from 'vux'
export default {
  components: {
    Loading
  },
  computed: {
    isLoading () {
      return this.$store.state.isLoading
    }
  }
}
</script>

<style lang="less">
@import "./assets/demo.less";
@import '~vux/src/styles/reset.less';
// @import './../node_modules/vue2-animate/src/vue2-animate.less';
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
  .yd-grids-icon img {
    height: 100%;
    border-radius: 100%;
    width: auto;
  }
  [class^=yd-grids-]:before {
    border-bottom: none;
  }
  [class^=yd-grids-] {
    .yd-grids-item:not(:nth-child(4n)):before {
      border-right: none;
    }
    .yd-grids-item {
      padding: .15rem 0;
      &::after {
        border-bottom: none;
      }
    }
  }  
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
.b-mask {
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, .5);
  position: absolute;
  z-index: 600;
}
.yd-backtop {
  bottom: 10%;
}
</style>
