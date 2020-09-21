<template>
  <div class="recommend">
    <div v-for="item in recommends" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name:'HomeRecommend',
    props:{
      recommends: {
        tyre: Array,
        default(){
          return []
        }
      }
    }
  }
</script>

<style>
  .recommend {
    display: flex;
    justify-content: space-around;
    font-size: 12px;
    text-align: center;
    padding: 10px 0 20px;
    border-bottom: 5px solid #eee;
  }

  .recommend .recommend-item img {
    width: 70px;
    height: 70px;
    margin-bottom: 5px;
  }
</style>
