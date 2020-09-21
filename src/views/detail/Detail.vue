<template>
  <div id="detail">

    <detail-navbar class="detailbar" @detailtitleclick='detailtitleclick' ref='detailnav'></detail-navbar>
    <scroll class="content"
            ref='scroll'
            :probe-type='3'
            @scrollposition='contentscroll'
            >
      <detail-swiper :top-images='topImages'></detail-swiper>

      <detail-base-info :goods='goods'></detail-base-info>
      <detail-shop-info :shop='shop'></detail-shop-info>
      <detail-params-info ref='detailparams' :tables='tables' :itemParams='itemParams'></detail-params-info>
      <detail-img-info :detail-info='detailInfo' @imageLoad='imageLoad'></detail-img-info>
      <detail-comment ref='detailcomment' :comments='comments'></detail-comment>
      <div class="detailmore" >更多推荐:</div>
      <goods-list ref='detailgoods' :goods='recommends'></goods-list>

    </scroll>
    <back-top @click.native='backClick' v-show="showback"></back-top>
    <detailbar @addtocar='addtocar' ></detailbar>
    <!-- <toast :message='message' :show='show'></toast> -->
  </div>
</template>

<script>
  import detailNavbar from './childcompon/detailNavbar.vue'
  import detailSwiper from './childcompon/detailSwiper.vue'
  import detailBaseInfo from './childcompon/detailBaseInfo.vue'
  import detailShopInfo from './childcompon/detailShopInfo.vue'
  import detailImgInfo from './childcompon/detailImgInfo.vue'
  import detailParamsInfo from './childcompon/detailParamsInfo.vue'
  import detailComment from './childcompon/detailComment.vue'
  import detailbar from './childcompon/detailbar.vue'

  import BackTop from 'components/content/backtop/BackTop.vue'
  import GoodsList from 'components/content/goods/GoodsList.vue'
  import GoodsItems from 'components/content/goods/GoodsItems.vue'

  import Scroll from 'components/common/scroll/scroll'


  import {debounce} from 'common/utils.js'
  import {itemListenerMixin} from 'common/mixin.js'
  import {getDetail, getRecommend, Goods, Shop} from 'network/detail.js'

  import { mapActions } from 'vuex'

  // import Toast from 'components/common/toast/Toast.vue'

  export default {
    name:'Detail',
    components:{
      detailNavbar,
      detailSwiper,
      detailBaseInfo,
      detailShopInfo,
      detailImgInfo,
      Scroll,
      detailParamsInfo,
      detailComment,
      GoodsList,
      GoodsItems,
      BackTop,
      detailbar,
      // Toast
    },

    mixins: [itemListenerMixin],
    data() {
      return {
        iid: null,
        topImages: [],
        goods: {},
        shop: {},
        detailInfo: {},
        itemParams: [],
        tables: {},
        comments: {},
        recommends: [],
        showback: false,
        titleY:[],
        currentIndex: 0,
        // message:'',
        // show:false
      }
    },
    created() {
      this.iid = this.$route.params.iid

      getDetail(this.iid).then(res => {

        const data = res.result;
        this.topImages = data.itemInfo.topImages;

        this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)

        this.shop = new Shop(data.shopInfo)

        this.detailInfo = data.detailInfo

        this.itemParams = data.itemParams.info.set

        this.tables = data.itemParams.rule

         if (data.rate.cRate !== 0) {this.comments = data.rate.list[0]}


      })

      getRecommend().then(res => {

        this.recommends = res.data.list

      })
    },
    methods: {
      ...mapActions(['addToCar']),
      imageLoad() {
        this.$refs.scroll.refresh()
          this.titleY.push(0);
          this.titleY.push(this.$refs.detailparams.$el.offsetTop);
          this.titleY.push(this.$refs.detailcomment.$el.offsetTop);
          this.titleY.push(this.$refs.detailgoods.$el.offsetTop);
      },
      addtocar() {
        const product = {}
        product.image = this.topImages[0]
        product.title = this.goods.title
        product.desc = this.goods.desc
        product.price = this.goods.realPrice
        product.iid = this.iid

        this.addToCar(product).then(res => {
          // this.show = true
          // this.message = res

          // setTimeout(() => {
          //   this.show = false
          // },1000)
          this.$toast.show(res,1000)
        })
      },
      backClick() {
        this.$refs.scroll.scrollTo(0,0,500);

      },
      contentscroll(position) {
        let length = this.titleY.length
        const positionY = -position.y

        for(let i = 0; i < length; i++) {
          if(this.currentIndex !== i && (i < length - 1 && positionY > this.titleY[i] && positionY <= this.titleY[i+1]) || (i === length-1 && positionY >= this.titleY[i])) {
            this.currentIndex = i;

            this.$refs.detailnav.currentIndex = this.currentIndex
          }
        }
        this.showback = (-position.y) > 1000
      },
      detailtitleclick(index) {
        this.$refs.scroll.scrollTo(0, -this.titleY[index], 1000)
      }
    },
  }
</script>

<style scoped>
  #detail {
    position: relative;
    z-index: 99999;
    background-color: #fff;
    height: 100vh;
  }

  .detailbar {
    position: relative;
    z-index: 9999;
    background-color: #fff;
  }
  .content {
    height: calc(100% - 93px);
  }

  .detailmore {
    padding-top: 10px;
    padding-left: 10px;
    border-top: 1px solid #F0F0F0;
    font-size: 13px;
    color: #000000;
  }

</style>
