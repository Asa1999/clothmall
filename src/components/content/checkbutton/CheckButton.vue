<template>
  <div class="check-button" :class="{check:isCheck}">
    <img src="~assets/img/cart/check1.svg" alt="">
  </div>
</template>

<script>
  export default {
    name:'CheckButton',
    props: {
      isCheck: {
        type:Boolean,
        default: false
      }
    }
  }
</script>

<style>
  .check-button{

    border-radius: 50%;
  }

  .check-button img {
    display: block;
  }

  .check {
    background-color: #000000;
  }
</style>
