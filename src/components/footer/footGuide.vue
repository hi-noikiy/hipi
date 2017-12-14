<template>
  <tabbar @on-index-change="onIndexChange">
    <tabbar-item :selected="$route.path === '/home'" link="/home">
      <img slot="icon" src="./../../assets/footer/home.png">
      <img slot="icon-active" src="./../../assets/footer/home_1.png">        
      <span slot="label">Home</span>
    </tabbar-item>
    <tabbar-item show-dot :selected="$route.path === '/shop'" link="/shop">
      <img slot="icon" src="./../../assets/footer/shop.png">
      <img slot="icon-active" src="./../../assets/footer/shop_1.png">        
      <span slot="label">Shop</span>
    </tabbar-item>
    <tabbar-item :selected="$route.path === '/bill'" link="/bill">
      <img slot="icon" src="./../../assets/footer/form.png">
      <img slot="icon-active" src="./../../assets/footer/form_1.png">
      <span slot="label">Bill</span>
    </tabbar-item>
    <tabbar-item badge="2" :selected="$route.path === '/my'" link="/my">
      <img slot="icon" src="./../../assets/footer/my.png">
      <img slot="icon-active" src="./../../assets/footer/my_1.png">
      <span slot="label">My</span>
    </tabbar-item>
  </tabbar>
</template>

<script>
import { Tabbar, TabbarItem, Group, Cell } from 'vux'

export default {
  components: {
    Tabbar,
    TabbarItem,
    Group,
    Cell
  },
  methods: {
    onIndexChange (newIndex, oldIndex) {
      console.log(newIndex, oldIndex)
    }
  }
}
</script>

<style>
.weui-tabbar__item.weui-bar__item_on .weui-tabbar__icon, .weui-tabbar__item.weui-bar__item_on .weui-tabbar__icon > i, .weui-tabbar__item.weui-bar__item_on .weui-tabbar__label {
    color: #1296db!important;
}
</style>
