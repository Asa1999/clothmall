<template>
  <div class="cart">
    <navbar class="carnavbar">
      <div slot='center'>购物车({{cartLength}})</div>
    </navbar>
    <cart-list></cart-list>
    <cart-bottom-bar></cart-bottom-bar>
  </div>
</template>

<script>
  import Navbar from 'components/common/navbar/Navbar.vue'
  import CartList from './childcompon/CartList.vue'
  import CartBottomBar from './childcompon/CartBottomBar.vue'

  import {mapGetters} from 'vuex'

  export default {
    name: 'car',
    components: {
      Navbar,
      CartList,
      CartBottomBar
    },
    computed: {
      ...mapGetters(['cartLength'])
    }
  }
</script>

<style>
  .cart {
    height: 100vh;
  }
  .carnavbar {
    background-color: var(--color-tint);
    color: #fff;
    font-weight: 500;
  }
</style>
