<template>
  <div style="height:100%">
    <yd-layout>
      <x-header :left-options="{backText: ''}" slot="navbar">填写订单</x-header>

      <contact></contact>

      <van-card
        title="标题"
        desc="描述"  
        :num="stepper"
        price="2.00"
        thumb="https://img.yzcdn.cn/public_files/2017/10/24/2f9a36046449dafb8608e99990b3c205.jpeg"
      >
      </van-card>
      <van-cell-group>
        <van-cell title="购买数量" class="b-switch-cell">
          <yd-spinner min="1" max="10" unit="1" v-model="stepper"></yd-spinner>          
        </van-cell>
        <van-cell title="支付配送" class="b-switch-cell" :is-link="true" @click="showPayDeliveryDialog">
          <!-- <yd-radio-group v-model="delivery" color="#1296db" size="20" class="b-radio-group">
            <yd-radio class="b-radio" val="0">商家发货</yd-radio>
            <yd-radio class="b-radio" val="1">到店自取</yd-radio>
          </yd-radio-group> -->
          <div class="b-cell-value">
            <p>{{ payMode }}</p>
            <p>{{ deliveryMode }}</p>
            <p>{{ serviceDate }} {{ timeMode }}</p>
          </div>
        </van-cell>
        
        <van-cell v-if="needAnZhuang" title="安装服务" class="b-switch-cell">
          <yd-switch v-model="serviceSwitch1"></yd-switch>
        </van-cell>
        <van-cell v-if="needBaoYang" title="保养服务" class="b-switch-cell">
          <yd-switch v-model="serviceSwitch2"></yd-switch>
        </van-cell>
      </van-cell-group>
      <yd-popup v-model="payDeliveryDialog" :close-on-masker="false" position="right" width="90%" height="100%" class="b-popup">
        <van-cell-group>
          <van-cell title="支付方式">
            <yd-radio-group v-model="payMode" color="#1296db" size="20" class="b-radio-group">
              <yd-radio class="b-radio" val="微信支付">微信支付</yd-radio>
              <yd-radio class="b-radio" val="货到付款">货到付款</yd-radio>
            </yd-radio-group>
          </van-cell>
          <van-cell title="配送方式">
            <yd-radio-group v-model="deliveryMode" color="#1296db" size="20" class="b-radio-group">
              <yd-radio class="b-radio" val="商家发货">商家发货</yd-radio>
              <yd-radio class="b-radio" val="到店自取">到店自取</yd-radio>
            </yd-radio-group>
          </van-cell>
          <van-cell>
            <inline-calendar
              ref="calendar"
              @on-change="onDateChange"
              @on-view-change="onViewChange"
              class="inline-calendar-demo"
              v-model="serviceDate"
              :start-date="startDate"
              :end-date="endDate"
              :range="false"
              :show-last-month="true"
              :show-next-month="true"
              :highlight-weekend="true"
              :return-six-rows="true"
              :hide-header="false"
              :hide-week-list="false"
              :replace-text-list="{'TODAY':'今'}"
              :weeks-list="['日', '一', '二', '三', '四', '五', '六 ']"
              :disable-past="true"
              :disable-future="false"
              :disable-weekend="false">
            </inline-calendar>
          </van-cell>
          <van-cell title="服务日期">
            {{ serviceDate }}
          </van-cell>
          <van-cell title="服务时间">
            <yd-radio-group v-model="timeMode" color="#1296db" size="20" class="b-radio-group">
              <yd-radio class="b-radio" val="上午" :disabled="morningDisabled">上午</yd-radio>
              <yd-radio class="b-radio" val="下午" :disabled="afternoonDisabled">下午</yd-radio>
            </yd-radio-group>
          </van-cell>
        </van-cell-group>
        <div class="b-popup-button">
          <van-button type="primary" bottom-action @click="onPayDeliveryConfirm">确认</van-button>
        </div>
      </yd-popup>


      <div slot="tabbar" class="b-submit">
        <p class="b-total">实付款：<em>¥{{ totalPrice }}</em></p>
        <van-button type="primary" bottomAction class="b-button">提交订单</van-button>
      </div>
    </yd-layout>
  </div>
</template>

<script>
  import { XHeader, Group, Calendar, InlineCalendar } from 'vux'
  import { Card, Cell, CellGroup, Button, Popup } from 'vant'
  import Contact from './../../components/order/contact'
  const moment = require('moment')

  export default {
    components: {
      XHeader,
      Group,
      Calendar,
      InlineCalendar,
      [Card.name]: Card,
      [Cell.name]: Cell,
      [CellGroup.name]: CellGroup,
      [Button.name]: Button,
      [Popup.name]: Popup,
      Contact
    },
    data () {
      return {
        stepper: 1,
        payMode: '微信支付',
        deliveryMode: '商家发货',
        timeMode: '上午',
        morningDisabled: false,
        afternoonDisabled: false,
        needAnZhuang: true,
        needBaoYang: true,
        serviceSwitch1: true,
        serviceSwitch2: true,
        serviceDate: moment().format('YYYY-MM-DD'),
        startDate: moment().format('YYYY-MM-DD'),
        endDate: moment().add(3, 'M').format('YYYY-MM-DD'),
        payDeliveryDialog: false
      }
    },
    computed: {
      totalPrice () {
        const price = 300
        return (price * this.stepper).toFixed(2)
      }
    },
    mounted () {
      // this.serviceDate = moment().format('YYYY-MM-DD')
      let hour = moment().format('HH')
      // console.log(hour)
      if (hour > 17) {
        this.serviceDate = moment().add(1, 'd').format('YYYY-MM-DD')
      }
      if (this.serviceDate === moment().format('YYYY-MM-DD')) {
        if (hour > 17) {
          this.timeMode = '下午'
        }
      }
    },
    methods: {
      onDateChange (val) {
        console.log(val)
        if (val === moment().format('YYYY-MM-DD')) {
          // if (hour > 17) {
          //   this.timeMode = '下午'
          // }
          console.log('今天')
          let hour = moment().format('HH')
          if (hour > 17) {
            this.timeMode = ''
            this.morningDisabled = true
            this.afternoonDisabled = true
          } else if (hour >= 12) {
            this.timeMode = '下午'
            this.morningDisabled = true
          } else {
            this.timeMode = '上午'
            this.morningDisabled = false
            this.afternoonDisabled = false
          }
        } else {
          this.timeMode = '上午'
          this.morningDisabled = false
          this.afternoonDisabled = false
        }
      },
      onViewChange (val) {
        console.log(val)
      },
      showPayDeliveryDialog () {
        // console.log(1)
        this.payDeliveryDialog = true
      },
      onPayDeliveryConfirm () {
        if (this.timeMode === '') {
          this.$dialog.toast({
            mes: '未选择服务时间',
            timeout: 1500,
            icon: 'error'
          })
          return false
        }
        this.payDeliveryDialog = false
      }
    }
  }
</script>

<style lang="less">
@price: #eb5211;
.b-radio-group {
  display: flex;
  justify-content: flex-end;
  .b-radio {
    display: flex;
    align-items: center;
  }
}
.b-submit {
  display: flex;
  justify-content: flex-end;

  background-color: #ffffff;
  .b-button {
    width: 35%;
  }
  .b-total {
    display: inline-block;
    align-self: center;
    font-size: 15px;
    padding: 0 .24rem;
    em {
      color: @price;
    }
  }
}
.b-switch-cell {
  display: flex;
  justify-content: space-between;
  align-items: center;
  .van-cell__value {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
}
.b-popup {
  .yd-popup-content > div {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: stretch;
    .b-popup-button {
      padding: 0 100px;
    }
  }
}
</style>

