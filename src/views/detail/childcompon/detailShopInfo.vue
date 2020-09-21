<template>
  <div class="allshopinfo">
    <div class="shopinfo">
      <img class="logo" :src="shop.logo" alt="">
      <div class="name">{{shop.name}}</div>
    </div>
    <div class="detail">
      <div class="detailleft">
        <div class="sale">
          <span>{{shop.sells}}</span>
          <h4>总销量</h4>
        </div>
        <div class="goodscount">
          <span>{{shop.goodscount}}</span>
          <h4>全部宝贝</h4>
        </div>
      </div>
      <div class="detailright">
        <div v-for="item in shop.score" class="allscore">
          <div class="scorename">{{item.name}}</div>
          <div class="score" :class="{'score-better' : item.isBetter}">{{item.score}}</div>
          <div class="better" :class="{'better-more' : item.isBetter}">{{item.isBetter ? '高':'低'}}</div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  export default {
    name:'detailShopInfo',
    props: {
      shop: {
        type: Object,
        default() {
          return {}
        }
      }
    },

  }
</script>

<style >
  .allshopinfo {
    padding-bottom: 30px;
  }


  .shopinfo {

    display: flex;
    margin-top: 30px;
    padding-left: 20px;

  }
  .logo{
    width: 40px;
    height: 40px;
    border-radius: 50%;

  }
  .name {
    padding-left: 10px;
    line-height: 40px;
    padding-bottom: 25px;
  }

  .detail {
    height: 50px;
    width: 100%;
    text-align: center;
    display: flex;

  }

  .detailleft {
    display: flex;
    justify-content: space-around;
    width: 50%;
    padding-top: 5px;
    border-right: 1px solid #C0C0C0;
  }

  h4 {
    text-decoration: none;
    font-size: 10px;
  }

  .detailright {
    width: 50%;
    font-size: 12px;

  }
  .scorename {
    padding-left: 20px;
  }

  .allscore {
    display: flex;
    justify-content: space-between;
    text-align: center;
  }
  .score {
    color: green;

  }

  .score-better {
    color: red;

  }

  .better {
    background-color: green;
    color: white;
    margin-right: 20px;
  }

  .better-more {
    background-color: red;
    color: white;

  }
</style>
