<template>
  <div style="height:100%">
    <yd-layout>
      <x-header :left-options="{backText: ''}" slot="navbar" >
        地址列表
        <div slot="right" @click="onManageClick">
          管理
        </div>
      </x-header>
      <group class="address-group">
        <cell class="address-cell" v-for="i in 5" :key="i">
          <div slot="title" class="address-title">
            <span>联系人{{ i }}</span>
            <span>1858774841{{ i }}</span>                        
          </div>
          <span slot="inline-desc"><em v-if="i === 1" class="address-default">[默认地址]</em>广西壮族自治区南宁市青秀区桃源路{{ i }}号钱币博物馆</span>
        </cell>
      </group>
    </yd-layout>
  </div>
</template>

<script>
  import { XHeader, Group, Cell } from 'vux'
  import { Button } from 'vant'

  export default {
    components: {
      XHeader,
      Group,
      Cell,
      [Button.name]: Button
    },
    methods: {
      onManageClick () {
        this.$router.push('/addressEdit')
      }
    }
  }
</script>

<style lang="less">
.address-group {
  .weui-cells {
    &:first-child {
      margin-top: 0;
    }
  }
  .address-cell {
    .address-title {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .address-default {
      color: #eb5211;
    }
  }
}
</style>
