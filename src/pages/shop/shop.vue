<template>
  <div class="weui-tab">
    <div class="weui-tab__panel">
      <x-header :left-options="{showBack: false}">
        <a slot="left">分类</a>
        <div class="search-fake">
          <div class="search-fake_content">
            <i class="weui-icon-search"></i>
            <span>搜索</span>
          </div>
        </div>
      </x-header>
      <advert v-bind:list="shopAdvertList"></advert>
      <div class="yp-navigation">
        <grid :cols="4">
          <grid-item :link="nav.url" :label="nav.title" v-for="(nav, index) in shopNavList" :key="index">
            <img slot="icon" :src="nav.img">
          </grid-item>
        </grid>
      </div>
    </div>
    <foot-guide></foot-guide>
  </div>
</template>

<script>
import { XHeader, Grid, GridItem, Search } from 'vux'
import footGuide from './../../components/footer/footGuide'
import advert from './../../components/advert/advert'
import { shopAdvert, shopNav } from './../../api/axios'

export default {
  components: {
    Search,
    XHeader,
    Grid,
    GridItem,
    footGuide,
    advert
  },
  data () {
    return {
      shopAdvertList: [],
      shopNavList: []
    }
  },
  mounted () {
    shopAdvert().then(res => {
      this.shopAdvertList = res.data.Data
      console.log(res.data)
    })
    shopNav().then(res => {
      this.shopNavList = res.data.Data
      console.log(res.data)
    })
  }
}
</script>

<style>
.search-fake {
  /* border: 1px solid #9B9B9B; */
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background: #ffffff; */
}
.search-fake_content {
  height: 80%;
  width: 100%;
  background: rgba(255, 255, 255, .3);
  border-radius: 3px;
  color: #ffffff;
  font-size: 14px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 10px;
}
.search-fake_content i[class^=weui-icon-] {
  color: #ffffff;
}
</style>
