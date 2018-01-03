<template>
  <div>
    <div style="padding-bottom:50px;">
      <swiper loop auto :list="productInfo.productImg" :aspect-ratio="1" :duration="500" :show-desc-mask="false" dots-position="center"></swiper>

      <group class="b-group">
        <cell class="b-cell">
          <p slot="title">
            {{ productInfo.productName }}1111111111111111111111111111111111122222222222222222222222222222
          </p>
          <div slot="inline-desc" class="b-inline-desc">
            <div class="b-activity">
              <p class="activity-link">折扣活动入口</p>
            </div>
          </div>
          <div slot="inline-desc" class="b-inline-desc">
            <div class="b-price">
              <p class="current-price">{{ productInfo.productCurrentPrice }}<em>心动价</em></p>
              <span class="original-price">专柜价：<em>{{ productInfo.productOriginalPrice }}</em></span>
              <span class="original-price">销量：{{ productInfo.productSales }}</span>
            </div>
            <!-- <div class="b-collect" v-if="!collection" @click="onClickCollet">
              <yd-icon name="star-outline" size=".3rem" color=""></yd-icon>
              <span>收藏</span>
            </div>
            <div class="b-collect" v-if="collection" @click="onClickCollet">
              <yd-icon name="star" size=".3rem" color=""></yd-icon>
              <span>收藏</span>
            </div> -->
          </div>
        </cell>
        <cell class="b-cell">
          <div slot="title" class="b-sign">
            <p class="sign-item" v-if="productInfo.productInventory > productInfo.productInventoryWarning"><yd-icon name="checkoff" size=".3rem" color="#eb5211"></yd-icon>库存充足</p>
            <p class="sign-item" v-if="productInfo.productInventory < productInfo.productInventoryWarning"><yd-icon name="warn-outline" size=".3rem"></yd-icon>库存紧缺</p>
            <p class="sign-item"><yd-icon name="checkoff" size=".3rem" color="#eb5211"></yd-icon>商家发货</p>
            <p class="sign-item"><yd-icon name="checkoff" size=".3rem" color="#eb5211"></yd-icon>微信支付</p>
            <p class="sign-item"><yd-icon name="checkoff" size=".3rem" color="#eb5211"></yd-icon>货到付款</p>
          </div>
        </cell>
      </group>
      
      <div style="height:44px;">
        <sticky ref="sticky" :check-sticky-support="false">
          <tab custom-bar-width=".6rem" active-color="#1296db" bar-active-color="#1296db" v-model="tabIndex">
            <tab-item selected @on-item-click="onItemClick">商品</tab-item>
            <tab-item @on-item-click="onItemClick">评价</tab-item>
            <tab-item @on-item-click="onItemClick">详情</tab-item>
          </tab>
        </sticky>
      </div>

      <div class="b-divider" id="product-evaluation">
        <divider><yd-icon name="good" size=".24rem"></yd-icon>评价</divider>
      </div>
      <group class="b-group b-evaluation">
        <cell class="b-cell">
          <div slot="title" class="e-title">
            商品评价（{{ evaluationLength }}）
          </div>
        </cell>
        <cell class="e-user" v-for="(eva, index) in productInfo.productEvaluation" :key="index">
          
          <div slot="title" class="e-user-name">
            <img :src="eva.eUserHeadImg" class="e-user-headimg">
            <span>{{ eva.eUserName }}</span>
            
          </div>
          <div slot="inline-desc" class="e-content">
            
            <p>{{ eva.eTime }}</p>
            <p>[{{ eva.eRate }}星]{{ eva.eContent }}</p>
            <p v-if="eva.eReply">客户回复：{{ eva.eReply }}</p>
          </div>
        </cell>
      </group>

      <div class="b-divider" id="product-details">
        <divider><yd-icon name="video" size=".24rem"></yd-icon>详情</divider>
      </div>

      <div class="b-details">
        <div v-for="(src, index) in productInfo.productDetailsImg" :key="index" class="details-img">
          <x-img :src="src.img" @on-success="success" @on-error="error" class="ximg-demo" error-class="ximg-error" :offset="-100"></x-img>
        </div>
      </div>
        
      <div class="b-divider">
        <divider>已经到底了</divider>
      </div>
    </div>
    
    <yd-backtop></yd-backtop>

    <van-goods-action>
      <van-goods-action-mini-btn :icon="(collection)? 'like' : 'like-o'" @click="onClickCollet">
        收藏
      </van-goods-action-mini-btn>
      <van-goods-action-mini-btn icon="cart">
        购物车
      </van-goods-action-mini-btn>
      <van-goods-action-big-btn>
        加入购物车
      </van-goods-action-big-btn>
      <van-goods-action-big-btn @click="$router.push('/order')" :primary="productInfo.productInventory === 0? false : true" :class="[productInfo.productInventory === 0? 'van-button--disabled' : '']">
        {{ productInfo.productInventory === 0? '暂时无货' : '立即购买' }}
      </van-goods-action-big-btn>
    </van-goods-action>
  </div>
</template>

<script>
import { Swiper, SwiperItem, Cell, CellBox, Group, Divider, XImg, Tab, TabItem, Sticky } from 'vux'
import { productInfoGet } from '@/api/axios'
import { GoodsAction, GoodsActionBigBtn, GoodsActionMiniBtn, Toast } from 'vant'

const accounting = require('accounting')

export default {
  components: {
    Swiper,
    SwiperItem,
    Cell,
    CellBox,
    Group,
    Divider,
    XImg,
    Tab,
    TabItem,
    Sticky,
    [GoodsAction.name]: GoodsAction,
    [GoodsActionBigBtn.name]: GoodsActionBigBtn,
    [GoodsActionMiniBtn.name]: GoodsActionMiniBtn,
    [Toast.name]: Toast
  },
  methods: {
    success (src, ele) {
      // console.log('success load', src)
      const eh = ele.height
      ele.parentNode.style.height = '' + eh + 'px'
    },
    error (src, ele, msg) {
      // console.log('error load', msg, src)
      const eh = ele.height
      ele.parentNode.style.height = '' + eh + 'px'
    },
    onClickCollet () {
      if (this.collection) {
        Toast.fail('取消收藏')
      } else {
        Toast.success('添加收藏')
      }
      this.collection = !this.collection
    },
    onItemClick (index) {
      let total = 0
      let h1 = document.getElementById('product-evaluation').offsetTop - 10
      let h2 = document.getElementById('product-details').offsetTop - 10
      if (index === 0) {
        total = 0
      } else if (index === 1) {
        total = h1
      } else if (index === 2) {
        total = h2
      }
      let distance = document.documentElement.scrollTop || document.body.scrollTop
      // 平滑滚动，时长100ms，每10ms一跳，共50跳
      let step = total / 10
      if (total > distance) {
        smoothDown()
      } else {
        let newTotal = distance - total
        step = newTotal / 10
        smoothUp()
      }
      function smoothDown () {
        if (distance < total) {
          distance += step
          document.body.scrollTop = distance
          document.documentElement.scrollTop = distance
          setTimeout(smoothDown, 10)
        } else {
          document.body.scrollTop = total
          document.documentElement.scrollTop = total
        }
      }
      function smoothUp () {
        if (distance > total) {
          distance -= step
          document.body.scrollTop = distance
          document.documentElement.scrollTop = distance
          setTimeout(smoothUp, 10)
        } else {
          document.body.scrollTop = total
          document.documentElement.scrollTop = total
        }
      }
    },
    onScroll () {
      let scrolled = document.documentElement.scrollTop || document.body.scrollTop
      let h1 = document.getElementById('product-evaluation').offsetTop - 10
      let h2 = document.getElementById('product-details').offsetTop - 10
      if (scrolled >= h2) {
        this.tabIndex = 2
      } else if (scrolled < h2 && scrolled >= h1) {
        this.tabIndex = 1
      } else {
        this.tabIndex = 0
      }
    }
  },
  data () {
    return {
      productInfo: [],
      collection: false,
      tabIndex: 0,
      evaluationLength: 0
    }
  },
  mounted () {
    productInfoGet(this.$route.params.productId, 2).then(res => {
      this.productInfo = res.data.Data
      this.productInfo.productCurrentPrice = accounting.formatMoney(this.productInfo.productCurrentPrice, '¥')
      this.productInfo.productOriginalPrice = accounting.formatMoney(this.productInfo.productOriginalPrice, '¥')
      this.collection = this.productInfo.productCollection
      this.evaluationLength = this.productInfo.productEvaluation.length
      console.log(res.data)
    })
    this.$nextTick(function () {
      window.addEventListener('scroll', this.onScroll)
    })
  }
}
</script>

<style lang="less">
@price: #eb5211;
.b-group {
  .weui-cells {
    margin-top: 0;
    font-size: .3rem;
    .b-cell {
      .b-inline-desc {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .b-activity {
          padding: .1rem 0;
          .activity-link {
            color: @price;
            text-decoration: underline;
          }
        }
        .b-price {
          .current-price {
            font-size: .3rem;
            color: @price;
            display: flex;
            align-items: center;
            padding: .1rem 0;
            em {
              margin-left: .2rem;
              font-size: .2rem;
              border: 1px solid @price;
              border-radius: 3px;
              font-weight: 300;
              padding: 0 1px;
            }
          }
          .original-price {
            padding-left: .2rem;
            font-size: .24rem;
            margin-left: .02rem;
            position: relative;
            color: #8c8c8c;
            &:nth-child(2) {
              padding-left: 0;
            }
            em {
              text-decoration: line-through;
            }
          }
        }
        .b-collect {
          // height: 100%;
          align-self: stretch;
          position: relative;
          padding-left: 15px;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          font-size: .24rem;
          &:before {
            content: '';
            position: absolute;
            left: 0;
            top: 0;
            height: 100%;
            width: 1px;
            background-color: #d9d9d9;
            transform: scaleY(.8)
          }
        }
      }
      .b-sign {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        font-size: .24rem;
        color: #777;
        .sign-item {
          padding-left: .2rem;
          font-weight: 300;
          flex: auto;
          &:first-child {
            padding-left: 0;
          }
        }
      }
    }
  }
}
.b-divider {
  width: 60%;
  margin: 0 auto;
}
.b-evaluation {
  .b-cell {
    .e-title {
      // font-size: .3rem;
    }
  }
  .e-user {
    .e-user-name {
      // padding-left: .2rem;
      font-size: .3rem;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      // padding-bottom: .2rem;
      span {
        padding-left: .2rem;
      }
      .e-user-headimg {
        height: .42rem;
        width: .42rem;
        border-radius: 100%;
      }
    }
    .e-content {
      p {
        padding: .1rem 0;
        &:nth-child(3) {
          padding: .1rem;
          background-color:#d9d9d9;
          // box-shadow: 1px 1px 2px rgba(0, 0, 0, .2) inset,-1px -1px 2px rgba(0, 0, 0, .2) inset;
          border-radius: 3px;
        }
      }
    }
  }
}
.b-details {
  .details-img {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
.ximg-demo {
  width: 100%;
  height: auto;
}
.ximg-error {
  background-color:#d9d9d9;
}
.ximg-error:after {
  content: '加载失败';
  color: #000;
}
</style>

