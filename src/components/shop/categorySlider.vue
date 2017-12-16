<template>
  <swiper loop auto height="2rem" :show-dots="false" :show-desc-mask="false" :duration="1000" :list="list" @on-index-change="onIndexChange"></swiper>
</template>

<script>
import { Swiper, SwiperItem } from 'vux'

export default {
  components: {
    Swiper,
    SwiperItem
  },
  methods: {
    onIndexChange (index) {
      this.index = index
    }
  },
  data () {
    return {
    }
  },
  props: ['list']
}
</script>
