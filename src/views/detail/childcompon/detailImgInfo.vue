<template>
  <div class="imginfo">
    <div class="topkuang">
      <div class="black"></div>
      <div class="word">****************************</div>
    </div>
    <div class="desc">{{detailInfo.desc}}</div>
    <div class="bottonkuang">
      <div class="bblack"></div>
      <div class="bword">*****************************</div>
    </div>
    <div class="puton" v-if="detailInfo.detailImage">{{detailInfo.detailImage[0].key}}</div>
    <div v-if="detailInfo.detailImage">
      <img :src="item" alt="" class="detaillistimg"
      v-for="(item, index) in detailInfo.detailImage[0].list"
      @load='imgload' :key='index'>

    </div>

  </div>
</template>

<script>
  export default {
    name: 'detailImgInfo',
    props: {
      detailInfo: {
        type: Object,
        default () {
          return {}
        }
      }
    },
    data(){
      return {
        counter: 0,
        imagesLength: 0,

      }
    },
    methods: {
      imgload() {
        if (++this.counter === this.imagesLength) {
          this.$emit('imageLoad')
        }
      }
    },
    watch: {
      detailInfo() {
        this.imagesLength = this.detailInfo.detailImage[0].list.length
      }
    }
  }
</script>

<style>
  .imginfo {
    background-color: #fff;
    
  }
  .desc {
    padding: 10px;
    font-size: 15px;
  }

  .puton {
    padding-left: 10px;
  }

  .detaillistimg {
    width: 100%;
  }

  .detaillistimg img{
    margin-top: 10px;
    width: 100%;
  }











  .imginfo {

    border-top: 3px solid #F0F0F0;
  }

  .topkuang {
    margin-top: 20px;
    display: flex;
    text-decoration: underline;
    position: relative;
  }

  .black {
    margin-left: 10px;
    width: 5px;
    height: 5px;
    background-color: #000000;
    position: absolute;
    top: 7px;
  }

  .word {
    font-size: 1px;
    color: #fff;
    padding-left: 10px;
  }

  .bottonkuang {

    display: flex;
    justify-content: flex-end;
    text-decoration: underline;
    position: relative;
    padding-right: 10px;
  }

  .bblack {
    position: absolute;
    width: 5px;
    height: 5px;
    background-color: #000000;
    top:6px
  }

  .bword {
    font-size: 1px;
    color: #fff;
    padding-left: 10px;
  }
</style>
