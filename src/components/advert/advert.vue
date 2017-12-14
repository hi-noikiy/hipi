<template>
  <swiper loop auto :list="list" @on-index-change="onIndexChange"></swiper>
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
