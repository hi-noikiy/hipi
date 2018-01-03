<template>
  <div style="height:100%;">
    <yd-layout v-if="$route.path === '/shop'">
      <x-header :left-options="{showBack: false}" slot="navbar">
        <div slot="left" class="b-header-l" @click="$router.push('/shop/category')">
          <yd-icon name="type" size="24px"></yd-icon>
        </div>
        <div class="search-fake" slot="overwrite-title">
          <div class="search-fake_content">
            <icon type="search"></icon>
            <span>搜索</span>
          </div>
        </div>
        <div slot="right" class="b-header-r" @click="$router.push('/shop/cart')">
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
                <yd-countdown v-if="true" time="2017/12/17 00:00:00" class="b-countdown">
                  <em>{%h1}{%h2}</em><span>:</span><em>{%m1}{%m2}</em><span>:</span><em>{%s1}{%s2}</em>
                </yd-countdown>
                <span v-if="false" class="b-subhead">秒杀</span>
                <img class="item-l-img" src="./../../assets/Fr6zexbmjmc.png">
              </div>
              <div class="item-r">
                <img class="item-r-img" src="./../../assets/Fr6zexbmjmc.png">
              </div>
            </div>
          </yd-grids-item>
          <yd-grids-item>
            <div slot="else" class="b-grids-item">
              <div class="item-l">
                <p class="item-l-title">爆款区</p>
                <yd-countdown v-if="1 === 2" time="2017/12/17 00:00:00" class="b-countdown">
                  <em>{%h1}{%h2}</em><span>:</span><em>{%m1}{%m2}</em><span>:</span><em>{%s1}{%s2}</em>
                </yd-countdown>
                <span v-if="true" class="b-subhead">爆款</span>                  
                <img class="item-l-img" src="./../../assets/Fr6zexbmjmc.png">
              </div>
              <div class="item-r">
                <img class="item-r-img" src="./../../assets/Fr6zexbmjmc.png">
              </div>
            </div>
          </yd-grids-item>
          <yd-grids-item>
            <div slot="else" class="b-grids-item">
              <div class="item-l">
                <p class="item-l-title">0元试用区</p>
                <yd-countdown v-if="false" time="2017/12/17 00:00:00" class="b-countdown">
                  <em>{%h1}{%h2}</em><span>:</span><em>{%m1}{%m2}</em><span>:</span><em>{%s1}{%s2}</em>
                </yd-countdown>
                <span v-if="true" class="b-subhead">试用</span>
                <img class="item-l-img" src="./../../assets/Fr6zexbmjmc.png">
              </div>
              <div class="item-r">
                <img class="item-r-img" src="./../../assets/Fr6zexbmjmc.png">
              </div>
            </div>
          </yd-grids-item>
          <yd-grids-item>
            <div slot="else" class="b-grids-item">
              <div class="item-l">
                <p class="item-l-title">积分兑换</p>
                <yd-countdown v-if="false" time="2017/12/17 00:00:00" class="b-countdown">
                  <em>{%h1}{%h2}</em><span>:</span><em>{%m1}{%m2}</em><span>:</span><em>{%s1}{%s2}</em>
                </yd-countdown>
                <span v-if="true" class="b-subhead">抽奖兑换</span>
                <img class="item-l-img" src="./../../assets/Fr6zexbmjmc.png">
              </div>
              <div class="item-r">
                <img class="item-r-img" src="./../../assets/Fr6zexbmjmc.png">
              </div>
            </div>
          </yd-grids-item>
        </yd-grids-group>
      </div>

      <div class="zone-categories">
        <div class="cat-item" v-for="(cat, index) in shopCategoryList" :key="index">
          <div class="cat-item-header">
            <category-slider v-bind:list="cat.categoryImg"></category-slider>
            <span>{{ cat.categoryName }}</span>
          </div>
          <div class="cat-item-types">
            <yd-grids-group :rows="4">
              <yd-grids-item v-for="(type, index) in cat.typeList" :key="index">
                  <img slot="icon" :src="type.typeImg">
                  <span slot="text">{{ type.typeName }}</span>
              </yd-grids-item>
          </yd-grids-group>
          </div>
        </div>
      </div>

      <div class="zone-recommendations">
        <div class="recom-header">
          <divider>猜你喜欢</divider>
        </div>
        <yd-list theme="1">
          <yd-list-item v-for="(item, key) in list" :key="key" type="link" href="/shop/product/1">
              <img slot="img" :src="item.img">
              <span slot="title">{{item.title}}</span>
              <yd-list-other slot="other">
                  <div>
                      <span class="list-price"><em>¥</em>{{item.price}}</span>
                      <span class="list-del-price">¥{{item.w_price}}</span>
                  </div>
                  <div>content</div>
              </yd-list-other>
          </yd-list-item>
        </yd-list>
      </div>

      <divider>已经到底了</divider>

      <yd-backtop></yd-backtop>

      <foot-guide slot="tabbar"></foot-guide>    

    </yd-layout>
    <router-view></router-view>
  </div>
</template>

<script>
import { XHeader, Icon, Divider } from 'vux'
import footGuide from './../../components/footer/footGuide'
import advert from './../../components/advert/advert'
import categorySlider from './../../components/shop/categorySlider'
import { shopAdvert, shopNav, shopCategory } from './../../api/axios'

export default {
  components: {
    XHeader,
    Icon,
    Divider,
    footGuide,
    advert,
    categorySlider
  },
  data () {
    return {
      shopAdvertList: [],
      shopNavList: [],
      shopCategoryList: [],
      list: [
        {img: '//img1.shikee.com/try/2016/06/23/14381920926024616259.jpg', title: '标题111标题标题标题标题标题111标题标题标题标题', price: 156.23, w_price: 89.36},
        {img: '//img1.shikee.com/try/2016/06/21/10172020923917672923.jpg', title: '标题222标题标题标题标题', price: 256.23, w_price: 89.36},
        {img: '//img1.shikee.com/try/2016/06/23/15395220917905380014.jpg', title: '标题333标题标题标题标题', price: 356.23, w_price: 89.36},
        {img: '//img1.shikee.com/try/2016/06/25/14244120933639105658.jpg', title: '标题444标题标题标题标题', price: 456.23, w_price: 89.36},
        {img: '//img1.shikee.com/try/2016/06/26/12365720933909085511.jpg', title: '标题555标题标题标题标题', price: 556.23, w_price: 89.36},
        {img: '//img1.shikee.com/try/2016/06/19/09430120929215230041.jpg', title: '标题666标题标题标题标题', price: 656.23, w_price: 89.36}
      ]
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
    shopCategory().then(res => {
      this.shopCategoryList = res.data.Data
      console.log(res.data)
    })
  }
}
</script>

<style lang="scss">
.yd-scrollview {
  padding-bottom: 26px;
}
.search-fake {
  /* border: 1px solid #9B9B9B; */
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background: #ffffff; */
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
    .weui-icon-search {
      color: #ffffff;
    }
  }
}


.b-notice {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: .1rem .3rem;
  background: #ffffff;
  .b-notice-title {
    height: .8rem;
    width: auto;
    margin-right: .2rem;
  }
}

.zone-activity {
  margin-top: .17rem;
  .yd-grids-item {
    padding: .14rem .3rem;
    .b-grids-item {
      display: flex;
      justify-content: space-between;
      align-items: stretch;
      height: 2rem;
      font-size: .28rem;
      .item-l {
        flex: 1;
        color: #ea3524;
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        flex-direction: column;
        .item-l-img {
          height: 1rem;
          width: 1rem;
          border-radius: .1rem;
        }
        .b-countdown {
          font-size: .18rem;
          em {
            background-color: #ea3524;
            color: #ffffff;
            padding: .02rem;
            border-radius: .04rem;
          }
          span {
            span {
              color: #ea3524;
              padding: 0 .02rem;
            }
          }
        }
        .b-subhead {
          font-size: .22rem;
          color: #777777;
        }
      }
      .item-r {
        flex: 1;
        display: flex;
        justify-content: flex-start;
        align-items: flex-end;
        flex-direction: column;
        .item-r-img {
          height: 2rem;
          width: 1.5rem;
          border-radius: .1rem;
        }
      }
    }
  }
  .yd-grids-2:before,
  .yd-grids-item:nth-child(3):after,
  .yd-grids-item:nth-child(4):after {
    border-bottom: 0;
  }
}

.zone-categories {
  margin-top: .25rem;
  .cat-item {
    margin-top: .17rem;
    .cat-item-header {
      height: 2rem;
      position: relative;
      // background: url('./../../assets/5FHv5nS7yGg.png') no-repeat;
      // background-position: center;
      // background-size: cover;
      // background-color: #777777;
      span {
        display: inline-block;
        font-size: .32rem;
        padding: .08rem .2rem;
        // margin: .2rem;
        // margin-left: .3rem;
        background-color: rgba(255, 255, 255, .8);
        // border-top-left-radius: 10px;
        border-bottom-right-radius: 10px;
        box-shadow: 2px 2px 5px #333333;
        position: absolute;
        top: 0;
        left: 0;
      }
      .vux-slider {
        // margin: 0 .3rem;
      }
    }
  }
  .cat-item:first-child {
    margin-top: 0;
  }
}

.zone-recommendations {
  .recom-header {
    margin: 0 2rem;
    .vux-divider {
      color: #ea3524;
      font-size: .32rem;
    }
  }
  .list-price {
    font-size: .3rem;
    color: #eb5211;
  }
  .list-del-price {
    padding-left: .06rem;
    font-size: .2rem;
    margin-left: .02rem;
    position: relative;
    color: #8c8c8c;
  }
  .list-del-price:after {
    content: "";
    position: absolute;
    z-index: 1;
    left: 0;
    width: 100%;
    border-top: 1px solid #8c8c8c;
    -webkit-transform: scaleY(.5);
    transform: scaleY(.5);
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
    top: auto;
    bottom: 50%;
  }
}

</style>
