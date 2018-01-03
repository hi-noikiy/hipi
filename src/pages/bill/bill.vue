<template>
  <yd-layout>
    <x-header slot="navbar" :left-options="{showBack: false}">
      <div class="b-overwrite-title" slot="overwrite-title">
        <button-tab v-model="tabIndex">
          <button-tab-item selected @on-item-click="onTabItemClick()">服务订单</button-tab-item>
          <button-tab-item @on-item-click="onTabItemClick()">商城订单</button-tab-item>
        </button-tab>
      </div>
    </x-header>

    <van-tabs sticky @click="handleTabClick" v-if="tabIndex === 0" class="b-van-tabs">
      <van-tab v-for="index in 4" :key="index" :title="'服务选项 ' + index">
        <group>
          <cell class="b-cell">
            <div slot="title" class="b-cell-title">
              <span>订单号：<em>123</em></span>
            </div>
            <div class="b-default" slot="default">
              <span>已发货</span>
            </div>
          </cell>
          <van-card
            title="标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题"
            desc="描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述"  
            num="2"
            price="2.00"
            thumb="https://img.yzcdn.cn/public_files/2017/10/24/2f9a36046449dafb8608e99990b3c205.jpeg"
          >
            <!-- <div slot="footer">
              <van-button size="mini">按钮</van-button>
              <van-button size="mini">按钮</van-button>
            </div> -->
          </van-card>
          <cell>
            <div slot="default">
              <yd-button size="small" type="hollow" shape="circle">查看物流</yd-button>
              <yd-button size="small" type="hollow" shape="circle" color="#f85">确认收货</yd-button>
            </div>
          </cell>
        </group>
      </van-tab>
    </van-tabs>


    <van-tabs sticky @click="handleTabClick" v-if="tabIndex === 1" class="b-van-tabs">
      <van-tab v-for="index in 4" :key="index" :title="'商城选项 ' + index">
        商城内容 {{ index }}
      </van-tab>
    </van-tabs>

    <foot-guide slot="tabbar"></foot-guide>
  </yd-layout>
</template>

<script>
import { XHeader, ButtonTab, ButtonTabItem, Group, Cell } from 'vux'
import footGuide from './../../components/footer/footGuide'
import { Tab, Tabs, Card } from 'vant'

export default {
  components: {
    XHeader,
    ButtonTab,
    ButtonTabItem,
    Group,
    Cell,
    footGuide,
    [Tab.name]: Tab,
    [Tabs.name]: Tabs,
    [Card.name]: Card
  },
  methods: {
    onTabItemClick () {
      console.log(this.tabIndex)
    },
    handleTabClick (index) {
      console.log('tab' + index)
    }
  },
  data () {
    return {
      tabIndex: 0
    }
  }
}
</script>

<style lang="less">
@hpblue: #1296db;
.b-overwrite-title {
  margin-top: 5px;
  .vux-button-group {
    .vux-button-tab-item {
      background: #eeeeee;
    }
    .vux-button-group-current {
      color: @hpblue;
      background: #ffffff;
      font-weight: 700;
      box-shadow: 1px 1px 5px rgba(0, 0, 0, .3) inset, -1px -1px 5px rgba(0, 0, 0, .3) inset;
    }
    .vux-button-tab-item-first {
      &::after {
        border-color: @hpblue;
        color: @hpblue;
      }
    }
    .vux-button-tab-item-last {
      &::after {
        border-color: @hpblue;
        color: @hpblue;
      }
    }
  }
}
.b-van-tabs {
  .van-tab--active {
    color: @hpblue;
  }
  .van-tabs__nav-bar {
    background-color: @hpblue;
  }
  .b-cell {
    font-size: .26rem;
    .b-cell-title {
      // font-size: .26rem;
    }
    .b-default {
      color: #f85;
    }
  }
  .van-card {
    &:not(:first-child) {
      margin-top: 0;
    }
  }
}

</style>

