<template>
  <yd-layout>
    <yd-checklist v-model="checklist4" :label="true" ref="cartCheckList" color="#f85">
      <yd-checklist-item val="aaa">
          <yd-flexbox style="padding: 15px 0;">
              <img src="//img12.360buyimg.com/n1/jfs/t2122/170/1006550413/171711/de099a6f/56399d01N67907749.jpg" class="demo-checklist-img">
              <yd-flexbox-item align="top">
                  [aaa] 类似购物车 / 类似购物车<br/>
                  <span style="color: blue;">点击这边的内容是禁止选中的</span><br/>
                  <p style="color:#F00;">选中值：{{checklist4}}</p>
                  <yd-spinner v-model="spinner3"></yd-spinner>
              </yd-flexbox-item>
          </yd-flexbox>
      </yd-checklist-item>
      <yd-checklist-item val="bbb">
          <yd-flexbox style="padding: 15px 0;">
              <img src="//img10.360buyimg.com/n1/jfs/t6925/75/2382158459/437865/f3931d24/598be5b1N24d949fe.jpg" class="demo-checklist-img">
              <yd-flexbox-item align="top">
                  [bbb] 南非进口红西柚 6个 单果重约300-330g 新鲜水果
              </yd-flexbox-item>
          </yd-flexbox>
      </yd-checklist-item>
      <yd-checklist-item val="ccc">
          <yd-flexbox style="padding: 15px 0;">
              <img src="//img14.360buyimg.com/n1/jfs/t3232/69/539717695/176729/cf1ff3d8/57baa5d1N901ffea5.jpg" class="demo-checklist-img">
              <yd-flexbox-item align="top">
                  [ccc] 展卉 越南进口红心火龙果 3个装中果 单果约300~350g 新鲜水果
              </yd-flexbox-item>
          </yd-flexbox>
      </yd-checklist-item>
    </yd-checklist>
    <div slot="tabbar" class="b-submit">
      <div class="b-check-all">
        <yd-checkbox v-model="isCheckAll" shape="circle" :change="checkAll" color="#f85">全选</yd-checkbox>
      </div>
      <p class="b-total">合计：{{ accounting.formatMoney(this.productInfo.productCurrentPrice, '¥') }}</p>
      <van-button type="primary" bottomAction class="b-button">按钮</van-button>
    </div>

  </yd-layout>
  
</template>

<script>
import { Button, Row, Col } from 'vant'
export default {
  components: {
    [Button.name]: Button,
    [Row.name]: Row,
    [Col.name]: Col
  },
  methods: {
    change (value, isCheckAll) {
      this.isCheckAll = isCheckAll
    },
    checkAll () {
      this.isCheckAll = !this.isCheckAll
      this.$refs.cartCheckList.$emit('ydui.checklist.checkall', this.isCheckAll)
    }
  },
  data () {
    return {
      checklist4: [],
      spinner3: 0,
      isCheckAll: false
    }
  }
}
</script>

<style lang="less">
.b-submit {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
  .b-check-all {
    padding: 12px;
    height: 50px;
    width: 25%;
    .yd-checkbox {
      display: flex;
      align-items: center;
    }
  }
  .b-button {
    max-width: 40%;
  }
  .b-total {
    display: inline-block;
    font-size: 15px;
    padding: 0 .24rem;
  }
}
</style>

