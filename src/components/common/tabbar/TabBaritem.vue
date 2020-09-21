<template>
  <div class="tab-bar-item" @click="itemclick">
<!--      <img src="../../assets/imgs/tabbar/home-1.svg" alt="">
      <div>首页</div> -->
    <div v-if="!isactive"><slot name="baricon">  </slot></div>
    <div v-else><slot name="baricon-active"></slot></div>
    <div id='text' :style="activestyle"><slot name="bartext">  </slot></div>

  </div>
</template>

<script>
  export default {
    name: 'tabbaritem',
    props:{
      path: String,
      activecolor: {
        type: String,
        default: 'red'
      }
    },
    data(){
      return{
        // isactive: true
      }
    },
    computed: {
      isactive() {
        return this.$route.path.indexOf(this.path) !== -1
      },
      activestyle(){
        return this.isactive ? {color: this.activecolor} : {}
      }
    },
    methods:{
      itemclick(){
        this.$router.push(this.path)
      }
    }
  }
</script>

<style>
  .tab-bar-item {
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
    position: relative;
  }
  .tab-bar-item img {
    width: 26px;
    height: 26px;
    display: block;
    position: absolute;
    left: 50%;
    margin-top: 3px;
    margin-left: -13px;
  }
  .tab-bar-item #text {
    margin-top: 30px;
  }
  .activeclass {
    color: #FF0000;
  }
</style>
