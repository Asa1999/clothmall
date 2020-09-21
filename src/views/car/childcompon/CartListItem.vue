<template>
  <div class="cartlistitem">
    <div class="cartbutton">
      <check-button :is-check='product.checked'
      @click.native='checkchange'></check-button>
    </div>
    <div class="cartimg">
      <img :src="product.image" alt="">
    </div>
    <div class="cartword">
      <div class="carttitle">{{product.title}}</div>
      <div class="cartdesc">{{product.desc}}</div>
      <div class="cartnum">
        <div class="cartprice">￥{{product.price}}</div>
        <div class="cartneed">x{{product.count}}</div>
      </div>
    </div>
  </div>
</template>

<script>

  import CheckButton from 'components/content/checkbutton/CheckButton.vue'
  export default {
    name:'CartListItem',
    components: {
      CheckButton
    },
    props: {
      product: {
        type:Object,
        default() {
          return {}
        }
      }
    },
    methods: {
      checkchange() {
        this.product.checked = !this.product.checked
      }
    }
  }
</script>

<style>
  .cartlistitem {
    display: flex;
    border-bottom:2px solid #F0F0F0 ;
    padding-top: 8px;
    padding-bottom: 8px;
  }
  .cartbutton {
    display: flex;
    width: 30px;
    justify-content: center;
    align-items: center;
  }
  .cartimg {

  }
  .cartimg img {
    height: 100px;
    border-radius: 3px;
  }

  .cartword {
    width: 70%;
    padding-left: 5px;
    padding-right: 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .cartword .carttitle{
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    width: 100%;
    font-size: 14px;
    color: #000000;
  }
  .cartword .cartdesc{
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    width: 100%;
    font-size: 11px;
  }

  .cartnum {
    display: flex;
    justify-content: space-between;
  }

  .cartnum .cartprice {
    color: darkorange;
  }

  .cartnum .cartneed {
    color: #000000;
  }
</style>
