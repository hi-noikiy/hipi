<template>
  <yd-layout>
    <x-header :left-options="{showBack: false}" slot="navbar">
      <div slot="left" class="b-header-l" @click="$router.push('/type')">
        <yd-icon name="type" size="24px"></yd-icon>
      </div>
      <div class="search-fake" slot="overwrite-title">
        <div class="search-fake_content">
          <icon type="search"></icon>
          <span>搜索</span>
        </div>
      </div>
      <div slot="right" class="b-header-r" @click="$router.push('/home')">
        <yd-icon name="shopcart-outline" size="24px"></yd-icon>
      </div>
    </x-header>
  
    <advert v-bind:list="shopAdvertList"></advert>
      <div class="b-navigation">
        <yd-grids-group :rows="4">
          <yd-grids-item :link="nav.url" v-for="(nav, index) in shopNavList" :key="index">
              <img slot="icon" :src="nav.img">
              <span slot="text">{{ nav.title }}</span>
          </yd-grids-item>
        </yd-grids-group>
      </div>
      <div class="b-notice">
        <img src="./../../assets/notice.png" class="b-notice-title" alt="">
        
        <yd-rollnotice autoplay="2000" height="40">
          <yd-rollnotice-item>荣耀V9 3月超级钜惠！<br>荣耀V9 3月超级钜惠！</yd-rollnotice-item>
          <yd-rollnotice-item>3.23京东超级品牌日格力盛典<br>3.23京东超级品牌日格力盛典</yd-rollnotice-item>
          <yd-rollnotice-item>京东服饰 早春新品低至7折<br>京东服饰 早春新品低至7折</yd-rollnotice-item>
        </yd-rollnotice>
      </div>

      <div class="zone-activity">
        <yd-grids-group :rows="2">
          <yd-grids-item>
            <div slot="else" class="b-grids-item">
              <div class="item-l">
                <p class="item-l-title">秒杀区</p>
                <yd-countdown slot="right" time="2017/12/17 00:00:00" class="b-countdown">
                  <em>{%h1}{%h2}</em><span>:</span><em>{%m1}{%m2}</em><span>:</span><em>{%s1}{%s2}</em>
                </yd-countdown>
                <img class="item-l-img" src="./../../assets/pap.er/Fr6zexbmjmc.png">
              </div>
              <div class="item-r">
                <img class="item-r-img" src="./../../assets/pap.er/fvzTD7cYkD0.png">
              </div>
            </div>
          </yd-grids-item>
        </yd-grids-group>
      </div>

    <foot-guide slot="tabbar"></foot-guide>    

  </yd-layout>
</template>

<script>
import { XHeader, Grid, GridItem, Icon } from 'vux'
import footGuide from './../../components/footer/footGuide'
import advert from './../../components/advert/advert'
import { shopAdvert, shopNav } from './../../api/axios'

export default {
  components: {
    Icon,
    XHeader,
    Grid,
    GridItem,
    footGuide,
    advert
  },
  methods: {
    goType () {
      this.$router.push('/home')
    }
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
.search-fake_content .weui-icon-search {
  color: #ffffff;
}
.b-notice {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: .1rem .3rem;
  background: #ffffff;
}
.b-notice-title {
  height: .8rem;
  width: auto;
  margin-right: .2rem;
}
.zone-activity {
  margin-top: .17rem;
}
.zone-activity .yd-grids-2:before {
  border-bottom: 0;
}
.zone-activity .yd-grids-item:nth-child(3):after,
.zone-activity .yd-grids-item:nth-child(4):after {
  border-bottom: 0;
}
.zone-activity .yd-grids-item {
  padding: .12rem .3rem;
}
.b-grids-item {
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  height: 2rem;
}
.b-grids-item .item-l {
  flex: 1;
  color: #ea3524;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
}
.b-grids-item .item-l .item-l-img {
  height: 1rem;
  width: auto;
  border-radius: .1rem;
}
.b-grids-item .item-r {
  flex: 1;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  flex-direction: column;
}
.b-grids-item .item-r .item-r-img {
  height: 2rem;
  width: auto;
  border-radius: .1rem;
}
.b-countdown {
  font-size: .18rem;
  
}
.b-countdown em {
  background-color: #ea3524;
  color: #ffffff;
  padding: .02rem;
  border-radius: .04rem;
}
.b-countdown > span > span {
  color: #ea3524;
  padding: 0 .02rem;
}
</style>
