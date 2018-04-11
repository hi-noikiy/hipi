<template>
  <group class="c-group">
    <cell :is-link="true" class="c-cell" link="/address">
      <div slot="title" class="c-title">
        <span>联系人</span>
        <span>18587748417</span>
        <yd-badge type="danger">默认</yd-badge>
      </div>
      <span slot="inline-desc">广西南宁市青秀区桃源路39号钱币博物馆</span>
      <yd-icon slot="icon" size=".3rem" name="location"></yd-icon>
    </cell>
  </group>
</template>

<script>
  import { Cell, Group } from 'vux'

  export default {
    components: {
      Cell,
      Group
    }
  }
</script>

<style lang="less">
.c-group {
  .weui-cells {
    &:first-child {
      margin-top: 0;
    }
  }
  .c-cell {
    position: relative;
    &::after {
      position: absolute;
      border-bottom: 1px solid #B2B2B2;
      -webkit-transform: scaleY(.5);
      transform: scaleY(.5);
      -webkit-transform-origin: 0 100%;
      transform-origin: 0 100%;
      content: '';
      z-index: 0;
      left: 0;
      height: 10px;
      background: linear-gradient(-60deg, #FF9900 25%, #00a2e9 0, #00a2e9 50%, #FF9900 0, #FF9900 75%, #00a2e9 0);
      background-size: 60px 60px;
      width: 100%;
      bottom: 0;
    }
    .weui-cell__hd {
      // padding-right: 10px;
      align-self: flex-end;
    }
    .c-title {
      display: flex;
      // justify-content: space-between;
      align-items: center;
      font-size: 15px;
      line-height: .6rem;
      span:nth-child(2) {
        padding: 0 15px;
      }
    }
  }
}

</style>

