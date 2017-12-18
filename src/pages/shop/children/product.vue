<template>
  <div>
    <swiper loop auto :list="productInfo.productImg" :aspect-ratio="1" :duration="500" :show-desc-mask="false" dots-position="center" @on-index-change="onIndexChange"></swiper>

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
          <div class="b-collect">
            <yd-icon name="star-outline" size=".3rem" color=""></yd-icon>
            <span>收藏</span>
          </div>
        </div>
        

      </cell>
      <cell class="b-cell">
        <div slot="title" class="b-sign">
          <p class="sign-item"><yd-icon name="warn-outline" size=".3rem"></yd-icon>库存紧缺</p>
          <p class="sign-item"><yd-icon name="checkoff" size=".3rem" color="#eb5211"></yd-icon>商家发货</p>
          <p class="sign-item"><yd-icon name="checkoff" size=".3rem" color="#eb5211"></yd-icon>微信支付</p>
          <p class="sign-item"><yd-icon name="checkoff" size=".3rem" color="#eb5211"></yd-icon>货到付款</p>
        </div>
      </cell>
    </group>
    
    <div class="b-divider">
      <divider><yd-icon name="good" size=".24rem"></yd-icon>评价</divider>
    </div>
      
    <group class="b-group b-evaluation">
      <cell class="b-cell">
        <div slot="title" class="e-title">
          商品评价（{{ productInfo.productEvaluation.length }}）
        </div>
      </cell>
      <cell class="e-user" v-for="(eva, index) in productInfo.productEvaluation" :key="index">
        
        <div slot="title" class="e-user-name">
          <img :src="eva.eUserHeadImg" class="e-user-headimg">
          <span>{{ eva.eUserName }}</span>
        </div>
        <div slot="inline-desc" class="e-content">
          <p>{{ eva.eTime }}</p>
          <p>{{ eva.eContent }}</p>
          <p>客户回复：{{ eva.eReply }}</p>
        </div>
      </cell>
    </group>

    <div class="b-divider">
      <divider><yd-icon name="video" size=".24rem"></yd-icon>详情</divider>
    </div>

    <div class="b-details">
      <div v-for="(src, index) in productInfo.productDetailsImg" :key="index" class="details-img">
        <span style="font-size:20px;">Loading</span>
        <x-img :src="src.img" @on-success="success" @on-error="error" class="ximg-demo" error-class="ximg-error" :offset="-100"></x-img>
      </div>
    </div>
      
  </div>
</template>

<script>
import { Swiper, SwiperItem, Cell, CellBox, Group, Divider, XImg } from 'vux'
import { productInfoGet } from '@/api/axios'

const accounting = require('accounting')

export default {
  components: {
    Swiper,
    SwiperItem,
    Cell,
    CellBox,
    Group,
    Divider,
    XImg
  },
  methods: {
    onIndexChange (index) {
      this.index = index
    },
    success (src, ele) {
      console.log('success load', src)
      const span = ele.parentNode.querySelector('span')
      ele.parentNode.removeChild(span)
      const eh = ele.height
      ele.parentNode.style.height = '' + eh + 'px'
    },
    error (src, ele, msg) {
      console.log('error load', msg, src)
      const span = ele.parentNode.querySelector('span')
      span.innerText = 'load error'
      const eh = ele.height
      ele.parentNode.style.height = '' + eh + 'px'
    }
  },
  data () {
    return {
      productInfo: []
    }
  },
  mounted () {
    productInfoGet(this.$route.params.productId).then(res => {
      this.productInfo = res.data.Data
      this.productInfo.productCurrentPrice = accounting.formatMoney(this.productInfo.productCurrentPrice, '¥')
      this.productInfo.productOriginalPrice = accounting.formatMoney(this.productInfo.productOriginalPrice, '¥')
      console.log(res.data)
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

