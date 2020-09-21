<template>
  <div class="goods-list">
    <goods-items v-for="(item, index) in goods" :goodsitem="item" :key='index'></goods-items>

  </div>
</template>

<script>
   import GoodsItems from './GoodsItems.vue'

  export default {
    name:'GoodsList',
    components:{
      GoodsItems
    },
    props:{
      goods: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style>
  .goods-list {
    display: flex;
    flex-wrap: wrap;

  }
</style>
