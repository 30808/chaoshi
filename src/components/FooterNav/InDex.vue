<template>
  <div>
    <nav class="footer-nav">
      <router-link
      v-for="(item, index) in menu"
      :key="index"
      :to="item.path"
      active-class="active"
      >
      <img :src="item.icon"  class="icon" />
      <img :src="item.select_icon"  class="icon select_icon" />
      <span>{{item.text}}</span>
      </router-link>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
const menu = reactive([
  {
    path: '/home',
    text: '首页',
    icon: require('@/assets/images/home-select.png'),
    select_icon: require('@/assets/images/home-red.png')
  },
  {
    path: '/classify',
    text: '分类',
    icon: require('@/assets/images/copy.png'),
    select_icon: require('@/assets/images/copyred.png')
  },
  {
    path: '/car',
    text: '购物车',
    icon: require('@/assets/images/baodan.png'),
    select_icon: require('@/assets/images/baodanred.png')
  },
  {
    path: '/mine',
    text: '我的',
    icon: require('@/assets/images/word.png'),
    select_icon: require('@/assets/images/wordred.png')
  }
])
</script>

<style lang="scss" scoped>
.footer-nav {
  display: flex;
  width: 100%;
  flex-direction:row;
  justify-content: center;
  align-content: center;
  position: fixed;
  align-items: center;
  bottom: 0;
  left: 0;
  background: #ffff;
  a{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction:column;
    flex: 1;
    font-size: 0.28rem;
    padding-top: 0.14rem;
    padding-bottom: 0.06rem;
    color: #ccc;
    .icon{
      @include wh(50px,50px);
      margin-bottom: 0.1rem;
    }
    .select_icon{
      display: none;
    }
    &.active{
      color: rgb(102, 32, 32);
      .icon{
      @include wh(50px,50px);
      display: none;
    }
    .select_icon{
      @include wh(50px,50px);
      display: block;
      margin-bottom: 10px;
    }
    }
  }
}
</style>
