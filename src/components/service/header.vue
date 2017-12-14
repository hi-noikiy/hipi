<template>
  <div>
    <x-header :left-options="{showBack: true}">{{ titleName }}<a slot="right" @click="showAlert = true"><icon type="info-circle"></icon></a></x-header>
    <div v-transfer-dom>
      <alert v-model="showAlert" :title="tipsTitle" :content="tipsContent"></alert>
    </div>
  </div>
</template>

<script>
  import { Alert, XHeader, TransferDomDirective as TransferDom, Icon } from 'vux'

  const BInfo = [{
    content: '送装'
  },
  {
    content: '维修'
  },
  {
    content: '保养'
  },
  {
    content: '其他'
  }]

  export default {
    directives: {
      TransferDom
    },
    components: {
      Alert,
      XHeader,
      Icon
    },
    data () {
      return {
        tipsTitle: '提示',
        tipsContent: '',
        showAlert: false,
        titleName: this.$route.name
      }
    },
    mounted () {
      if (this.$route.name === '送装服务') {
        this.tipsContent = BInfo[0].content
      } else if (this.$route.name === '维修服务') {
        this.tipsContent = BInfo[1].content
      } else if (this.$route.name === '保养服务') {
        this.tipsContent = BInfo[2].content
      } else if (this.$route.name === '其他服务') {
        this.tipsContent = BInfo[3].content
      } else {
        this.tipsContent = '提示内容'
      }
    }
  }
</script>

<style>
.weui-icon-info-circle {
  color: #ffffff!important;
}
</style>
