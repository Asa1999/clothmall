<template>
    <swiper class="detail-swiper">
      <swiper-item class="detail-image" v-for='(item, index) in topImages' :key='index'>
        <img :src="item" alt="">
      </swiper-item>
    </swiper>
</template>

<script>
  import {Swiper, SwiperItem} from 'components/common/swiper'


  export default {
    name: 'detailSwiper',
    components:{
      Swiper,
      SwiperItem
    },
    props: {
      topImages: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style>
  .detail-swiper {
    height: 400px;
  

 }

 .detail-image {
   height: 400px;
  
 }
  .detail-swiper img{
    height: 100%;

  }
</style>
