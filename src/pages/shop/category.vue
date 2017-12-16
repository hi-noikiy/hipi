<template>
  <yd-layout>
    <x-header :left-options="{backText: ''}" slot="navbar">
      商品分类
    </x-header>
    <yd-scrolltab>
        <yd-scrolltab-panel v-for="(item, index) in slist" :key="index" :label="item.label" :icon="item.icon" :active="item.active">
            <yd-list theme="5">
              <yd-list-item v-for="(item, key) in list" :key="key">
                  <img slot="img" :src="item.img">
                  <span slot="title">{{item.title}}</span>
                  <yd-list-other slot="other">
                      <div>
                          <span class="list-price"><em>¥</em>{{item.price}}</span>
                          <span class="list-del-price">¥{{item.w_price}}</span>
                      </div>
                      <div>content</div>
                  </yd-list-other>
              </yd-list-item>
            </yd-list>
        </yd-scrolltab-panel>
        <yd-backtop></yd-backtop>
    </yd-scrolltab>
  </yd-layout>
</template>

<script>
  import { XHeader } from 'vux'

  export default {
    components: {
      XHeader
    },
    data () {
      return {
        slist: [
          {label: '空调', icon: 'demo-icons-category1', color: 'gray'},
          {label: '冰箱', icon: 'demo-icons-category2', color: 'blue'},
          {label: '洗衣机', icon: 'demo-icons-category3', color: 'yellow'},
          {label: '热水器', icon: 'demo-icons-category4', color: 'green'},
          {label: '厨房大家电', icon: 'demo-icons-category5', color: 'saddlebrown'},
          {label: '厨房小家电', icon: 'demo-icons-category6', color: 'darkgoldenrod'},
          {label: '生活家电', icon: 'demo-icons-category7', color: 'indianred'},
          {label: '风扇', icon: 'demo-icons-category8', color: 'aqua'}
        ],
        list: [
          {img: '//img1.shikee.com/try/2016/06/23/14381920926024616259.jpg', title: '标题111标题标题标题标题标题111标题标题标题标题', price: 156.23, w_price: 89.36},
          {img: '//img1.shikee.com/try/2016/06/21/10172020923917672923.jpg', title: '标题222标题标题标题标题', price: 256.23, w_price: 89.36},
          {img: '//img1.shikee.com/try/2016/06/23/15395220917905380014.jpg', title: '标题333标题标题标题标题', price: 356.23, w_price: 89.36},
          {img: '//img1.shikee.com/try/2016/06/25/14244120933639105658.jpg', title: '标题444标题标题标题标题', price: 456.23, w_price: 89.36},
          {img: '//img1.shikee.com/try/2016/06/26/12365720933909085511.jpg', title: '标题555标题标题标题标题', price: 556.23, w_price: 89.36},
          {img: '//img1.shikee.com/try/2016/06/19/09430120929215230041.jpg', title: '标题666标题标题标题标题', price: 656.23, w_price: 89.36}
        ]
      }
    }
  }
</script>
