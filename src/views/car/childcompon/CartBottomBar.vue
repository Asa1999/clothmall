<template>
  <div class="cartbottombar">
    <div class="bottombarcheck">
      <check-button
          :is-check='isSelectAll'
          @click.native='checkAll'></check-button>
      <div class="bottomword">全选</div>
    </div>

    <div class="bottomtotal">合计:{{totalPrice}}元</div>

    <div class="bottompay">去结算({{payLength}})</div>
  </div>
</template>

<script>
  import CheckButton from 'components/content/checkbutton/CheckButton.vue'



  export default {
    name:'CartBottomBar',
    components: {
      CheckButton
    },
    methods:{
      checkAll() {
        if (this.isSelectAll) {
          this.$store.state.cartList.forEach(item => item.checked = false)
        } else {
          this.$store.state.cartList.forEach(item => item.checked = true)
        }
      }
    },
    computed: {
      totalPrice() {
        return this.$store.state.cartList
        .filter(item => item.checked).reduce((preValue, item) => {
          return preValue + item.price * item.count
        }, 0).toFixed(2)
      },
      payLength() {
        return this.$store.state.cartList.filter(item => item.checked).length
      },
      isSelectAll() {
        if(this.$store.state.cartList.length ===0 ) return false
        // return !this.$store.state.cartList.filter(item => !item.checked).length
        return !this.$store.state.cartList.find(item => !item.checked)

      }
    }
  }
</script>

<style>
  .cartbottombar {
    height: 30px;
    background-color: #eee;
    position: relative;
    padding-left: 10px;
    display: flex;
    justify-content: space-between;
    font-size: 14px;
  }

  .bottombarcheck {
    display: flex;
    width: 60px;
    justify-content: center;
    align-items: center;
    line-height: 30px;
  }

  .bottomword {
    padding-left: 5px;
    color: #000000;

  }

  .bottomtotal {
    color: #000000;
    padding-top: 5px;


  }

  .bottompay {
    width: 90px;
    background-color: darkorange;
    color: #fff;
    display: flex;

    justify-content: center;
    align-items: center;
  }
</style>
