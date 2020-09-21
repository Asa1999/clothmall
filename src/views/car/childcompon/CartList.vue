<template>
  <div class="cart-list">
    <scroll class="cartscroll" ref='scroll'>
      <cart-list-item v-for="(item, index) in cartList" :product='item' :key='index'>
      </cart-list-item>

    </scroll>

  </div>
</template>

<script>
  import Scroll from 'components/common/scroll/scroll.vue'


  import CartListItem from './CartListItem.vue'
  import {mapGetters} from 'vuex'

  export default {
    name:'CartList',
    components: {
      Scroll,
      CartListItem,

    },
    computed: {
      ...mapGetters(['cartList'])
    },
    activated() {
      this.$refs.scroll.refresh()
    }

  }
</script>

<style>
  .cart-list {
    height: calc(100% - 93px - 30px);
  }
  .cartscroll {
    height: 100%;
    overflow: hidden;
  }
</style>
