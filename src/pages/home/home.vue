<template>
  <div class="weui-tab">
    <div class="weui-tab__panel">
      <advert v-bind:list="homeAdvertList"></advert>
      <div class="yp-navigation">
        <grid :cols="4">
          <grid-item :link="nav.url" :label="nav.title" v-for="(nav, index) in homeNavList" :key="index">
            <img slot="icon" :src="nav.img">
          </grid-item>
        </grid>
      </div>
      <div class="yp-service">
        <grid :cols="2">
          <grid-item :link="navs.url" :label="navs.title" v-for="(navs, i) in homeNavServiceList" :key="i">
            <img slot="icon" :src="navs.img">
          </grid-item>
        </grid>
      </div>
    </div>
    <foot-guide></foot-guide>
  </div>
</template>

<script>
import { Grid, GridItem } from 'vux'
import footGuide from './../../components/footer/footGuide'
import advert from './../../components/advert/advert'
import { homeAdvert, homeNav, homeNavService } from './../../api/axios'

export default {
  components: {
    Grid,
    GridItem,
    footGuide,
    advert
  },
  data () {
    return {
      homeAdvertList: [],
      homeNavList: [],
      homeNavServiceList: []
    }
  },
  mounted () {
    homeAdvert().then(res => {
      this.homeAdvertList = res.data.Data
      console.log(res.data)
    })
    homeNav().then(res => {
      this.homeNavList = res.data.Data
      console.log(res.data)
    })
    homeNavService().then(res => {
      this.homeNavServiceList = res.data.Data
      console.log(res.data)
    })
  }
}
</script>

<style scoped>

</style>
