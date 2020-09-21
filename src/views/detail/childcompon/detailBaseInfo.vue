<template>
  <div  class="baseinfo">
    <div class="title">
    {{goods.title}}
    </div>
    <div>
      <span class="newprice">{{goods.newPrice}}</span>
      <span class="oldprice">{{goods.oldPrice}}</span>
      <span v-if="goods.discount" class="discount">{{goods.discount}}</span>
    </div>
    <div class="columns">
    <div v-for="item in goods.columns">
      {{item}}
    </div>
    </div>


    <div class="services">
      <div v-for="item in goods.services">
        <img :src="item.icon" alt="">
        <span>{{item.name}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name:'detailBaseInfo',
    props:{
      goods: {
        type:Object,
        default() {
          return []
        }
      }
    }
  }
</script>

<style >
  .title {
    padding: 5px;
    font-size: 15px;
    text-indent: 10px;

    color: #000000;
  }

  .newprice {
    padding-left: 5px;
    color: var(--color-tint);
    font-size: 20px;
  }

  .oldprice {
    text-decoration: line-through;
    font-size: 10px;
    color: #808080;
    padding-left: 5px;
  }

  .discount {
    margin-left: 5px;
    padding-left: 2px;
    padding-right: 2px;
    color: #F0F0F0;
    font-size: 12px;
    background-color: var(--color-high-text);
    border-radius: 7px;


  }
  .columns {
    display: flex;
    padding: 5px;
    justify-content: space-between;
    margin-top: 10px;
    font-size: 10px;
    color: #808080;
  }
  .services {
    display: flex;
    font-size: 10px;
    justify-content: space-between;
    padding: 15px 5px 15px;
    border-top: 3px solid #F0F0F0;
    border-bottom: 3px solid #F0F0F0;
  }

  .services img {
    height: 10px;
    width: 10px;
  }
</style>
