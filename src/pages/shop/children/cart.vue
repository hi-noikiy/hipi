<template>
  <yd-layout>
    <yd-checklist v-model="checklist" ref="checklistCart" :callback="change" color="#f85">
      <yd-checklist-item :val="item.id" v-for="(item, index) in goods" :key="index">
          <yd-flexbox style="padding: 15px 0;">
            <img :src="item.thumb" class="demo-checklist-img">
            <yd-flexbox-item align="top" class="b-flexbox-item">
              <p class="b-check-title">{{ item.title }}</p>
              <p>{{ item.desc }}</p>
              <div class="b-row">
                <p class="b-check-price">{{ formatMoney(item.price) }}</p>
                <p>x{{ item.num }}</p>
              </div>
            </yd-flexbox-item>
          </yd-flexbox>
      </yd-checklist-item>
    </yd-checklist>
    <div slot="tabbar" class="b-submit">
      <div class="b-check-all">
        <yd-checkbox v-model="isCheckAll" shape="circle" :change="checkAll" color="#f85">全选</yd-checkbox>
      </div>
      <p class="b-total">合计：<em>{{ formatMoney(totalPrice) }}</em></p>
      <van-button :type="submitType" :loading="submitLoading" bottomAction class="b-button">{{ submitText }}</van-button>
    </div>
  </yd-layout>
</template>

<script type="text/babel">
import { Button } from 'vant'

const accounting = require('accounting')

export default {
  components: {
    [Button.name]: Button
  },
  data () {
    return {
      checklist: [],
      isCheckAll: false,
      // submitLoading: false,
      goods: [
        {
          id: '1',
          title: '进口香蕉进口香蕉进口香蕉进口香蕉进口',
          desc: '约250g，2根',
          price: 2.00,
          num: 1,
          thumb: 'https://img.yzcdn.cn/public_files/2017/10/24/2f9a36046449dafb8608e99990b3c205.jpeg'
        },
        {
          id: '2',
          title: '陕西蜜梨',
          desc: '约600g',
          price: 6.90,
          num: 1,
          thumb: 'https://img.yzcdn.cn/public_files/2017/10/24/f6aabd6ac5521195e01e8e89ee9fc63f.jpeg'
        },
        {
          id: '3',
          title: '美国伽力果',
          desc: '约680g/3个',
          price: 26.80,
          num: 1,
          thumb: 'https://img.yzcdn.cn/public_files/2017/10/24/320454216bbe9e25c7651e1fa51b31fd.jpeg'
        }
      ]
    }
  },
  methods: {
    change (value, isCheckAll) {
      this.isCheckAll = isCheckAll
    },
    checkAll () {
      this.isCheckAll = !this.isCheckAll
      this.$refs.checklistCart.$emit(
        'ydui.checklist.checkall',
        this.isCheckAll
      )
    },
    formatMoney (val) {
      return accounting.formatMoney(val, '¥')
    }
  },
  computed: {
    submitText () {
      const count = this.checklist.length
      return '结算' + (count ? `(${count})` : '')
    },
    totalPrice () {
      return this.goods.reduce((total, item) => {
        return total + (this.checklist.indexOf(item.id) !== -1 ? item.price : 0)
      }, 0)
    },
    submitLoading () {
      return this.checklist.length === 0
    },
    submitType () {
      return this.checklist.length === 0 ? 'disabled' : 'primary'
    }
  }
}
</script>

<style lang="less">
@price: #eb5211;
.b-submit {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
  .b-check-all {
    padding: 12px;
    height: 50px;
    width: 30%;
    .yd-checkbox {
      display: flex;
      align-items: center;
    }
  }
  .b-button {
    max-width: 35%;
  }
  .b-total {
    display: inline-block;
    font-size: 15px;
    padding: 0 .24rem;
    em {
      color: @price;
    }
  }
}
.b-flexbox-item {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  .b-row {
    align-self: stretch;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    .b-check-price {
      color: @price;
    }
  }
  .b-check-title {
    font-size: .26rem;
  }
}
</style>
