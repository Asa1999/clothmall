<template>
  <div v-show="isShow" class="toast">
    <div >{{message}}</div>
  </div>
</template>

<script>
  export default {
    name:'Toast',
    data() {
      return {
        message:'',
        isShow:false
      }
    },
    methods: {
      show(message, delay) {
        this.message = message
        this.isShow = true

        setTimeout(() => {
          this.isShow = false
        },delay)
      }
    }
  }
</script>

<style>
  .toast {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    padding: 5px;
    color: #fff;
    border-radius: 5px;
    background-color: rgba(50,50,50,0.9);
    z-index: 99999999;
  }
</style>
