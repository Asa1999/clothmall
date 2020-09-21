<template>
  <div class="item" @click="jumptodetail">
    <img :src="this.goodsitem.image||this.goodsitem.show.img" alt="" @load="imgLoad">
    <div>
      <p>{{goodsitem.title}}</p>
      <div class="words">
      <span class="price">{{goodsitem.price}}</span>
      <span class="collect">{{goodsitem.cfav}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name:'GoodsItems',
    props: {
      goodsitem: {
        type: Object,
        default() {
          return {}
        }
      }
    },
		methods: {
			imgLoad() {       
          this.$bus.$emit('itemImgLoad')
        

			},
      jumptodetail() {
        this.$router.push('/detail/' + this.goodsitem.iid)
      }
		}
  }
</script>

<style>
  .item {
  margin: 2.5%;
  font-size: 12px;
  width: 45%;
  }
  .item img {
    width: 100%;
    border-radius: 8px;
  }
  p {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    width: 100%;
    padding-top: 5px;
  }

  .words {
    text-align: center;
  }
  .price {
    font-size: 12px;
    padding-right: 5px;
  }

  .collect {
    font-size: 12px;
    position: relative;
    padding-left:15px ;
    color: #FF0000;
  }

  .collect::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 30px;
    height: 30px;
    background: url(~assets/img/common/collect.svg) no-repeat;
  }
</style>
