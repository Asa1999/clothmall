<template>
  <tabbar>
    <tabbaritem path="/home">
      <img slot='baricon' src="~assets/img/tabbar/home-1.svg" alt="">
      <img slot='baricon-active' src="~assets/img/tabbar/home-2.svg" alt="">
      <div slot='bartext'>首页</div>
    </tabbaritem>
    <tabbaritem path="/type">
      <img slot='baricon' src="~assets/img/tabbar/type-1.svg" alt="">
       <img slot='baricon-active' src="~assets/img/tabbar/type-2.svg" alt="">
      <div slot='bartext'>分类</div>
    </tabbaritem>
    <tabbaritem path="/car">
      <img slot='baricon' src="~assets/img/tabbar/car-1.svg" alt="">
      <img slot='baricon-active' src="~assets/img/tabbar/car-2.svg" alt="">
      <div slot='bartext'>购物车</div>
    </tabbaritem>
    <tabbaritem path="/my">
      <img slot='baricon' src="~assets/img/tabbar/my-1.svg" alt="">
      <img slot='baricon-active' src="~assets/img/tabbar/my-2.svg" alt="">
      <div slot='bartext'>我的</div>
    </tabbaritem>
  </tabbar>
</template>

<script>
  import Tabbar from 'components/common/tabbar/TabBar.vue'
  import Tabbaritem from 'components/common/tabbar/TabBaritem.vue'
  export default {
    name: 'MainTabbar',
    components: {
      Tabbar,
      Tabbaritem
    }
  }
</script>

<style>
</style>
