<template>
  <div class="bottombar">
    <div class="bottombar-left">
      <div>
        <img src="~assets/img/detail/kefu.svg" alt="">
        <h4>客服</h4>
      </div>
      <div>
        <img src="~assets/img/detail/shop.svg" alt="">
        <h4>店铺</h4>
      </div>
      <div>
        <img src="~assets/img/detail/star.svg" alt="">
        <h4>收藏</h4>
      </div>
    </div>
    <div class="bottombar-right">
      <div class="detailcar" @click="addToCar">加入购物车</div>
      <div class="detailbuy">购买</div>
    </div>
  </div>
</template>

<script>
  export default {
    name:'detailbar',
    methods: {
      addToCar() {
        this.$emit('addtocar')
      }
    }
  }
</script>

<style>
  .bottombar {
    height: 49px;
    background-color: #fff;
    position: relative;
    display: flex;
  }

  .bottombar-left {
    flex: 1;
    display: flex;
    justify-content: space-around;
    padding-top: 5px;
  }

  .bottombar-left img {
    height: 20px;
  }

  .bottombar-left h4 {
    text-align: center;
    font-size: 11px;
  }
  .bottombar-right {
    flex: 1;
    display: flex;
    justify-content: space-around;
    text-align: center;
    font-size: 14px;
    line-height: 49px;
    color: #000000;
  }

  .detailcar {
    flex: 1;
    background-color: #FFFF00;
  }

  .detailbuy {
    flex: 1;
    background-color: #FF8198;
  }
</style>
