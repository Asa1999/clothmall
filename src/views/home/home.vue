<template>
  <div id="home">
    <navbar class="homenav">
      <div slot='center'>购物街</div>
    </navbar>

    <tab-control ref='tabcontroltop'
                 :title='title'
                 @tabclick='tabclick'
                 class="tabcontr" v-show="isFixed"></tab-control>

    <scroll class="content" ref='scroll'
    :probe-type='3' :pull-up-load='true'
    @scrollposition='contentscroll'
    @load='loadgoods' >

      <home-swiper :banners="banners" @swiperImgLoad='swiperImgLoad'></home-swiper>
      <home-recommend :recommends="recommends"></home-recommend>
      <week-fashion></week-fashion>
      <tab-control ref='tabcontrol'
                   :title='title'
                   @tabclick='tabclick'
                   ></tab-control>
      <goods-list :goods="showgoods"></goods-list>

    </scroll>

    <back-top @click.native='backClick' v-show="showback"></back-top>

  </div>
</template>

<script>
  import navbar from 'components/common/navbar/Navbar.vue'
  import Scroll from 'components/common/scroll/scroll'


  import HomeSwiper from './childComp/HomeSwiper.vue'
  import HomeRecommend from './childComp/HomeRecommend.vue'
  import WeekFashion from './childComp/WeekFashion.vue'


  import TabControl from 'components/content/TabControl.vue'
  import GoodsList from 'components/content/goods/GoodsList.vue'
  import GoodsItems from 'components/content/goods/GoodsItems.vue'
  import BackTop from 'components/content/backtop/BackTop.vue'

  import {
    getHomeMultidata,
    getHomeGoods
  } from 'network/home.js'
  import {debounce} from 'common/utils.js'
  import {itemListenerMixin} from 'common/mixin.js'


  export default {
    name: 'home',
    components:{
      navbar,
      HomeSwiper,
      HomeRecommend,
      WeekFashion,
      TabControl,
      GoodsList,
      GoodsItems,
      Scroll,
      BackTop
    },
    computed:{
      showgoods(){
        return this.goods[this.currenttype].list
      }
    },
    mixins: [itemListenerMixin],
    data() {
      return{
        banners: [],
        recommends: [],
        title: [
          '流行',
          '新款',
          '精选'
        ],
        goods: {
          'pop': {page: 0, list:[]},
          'new': {page: 0, list:[]},
          'sell': {page: 0, list:[]}
        },
        currenttype: 'pop',
        showback: false,
        tabOffsettop: 0,
        isFixed:false,
        saveY: 0
      }
    },
    created() {
      this.getHomeMultidata()
      this.getHomeGoods('pop')
      this.getHomeGoods('new')
      this.getHomeGoods('sell')
    },
    mounted() {

    },
    activated() {
      this.$refs.scroll.refresh()
      this.$refs.scroll.scrollTo(0, this.saveY, 0)


    },
    deactivated() {
      this.saveY = this.$refs.scroll.scroll.y
    },
    methods: {

      tabclick(index) {
        switch(index) {
          case 0:
            this.currenttype = 'pop'
            break
          case 1:
            this.currenttype = 'new'
            break
          case 2:
            this.currenttype = 'sell'
            break
        }
        this.$refs.tabcontroltop.currentIndex = index
        this.$refs.tabcontrol.currentIndex = index
      },

      swiperImgLoad() {
        this.tabOffsettop = this.$refs.tabcontrol.$el.offsetTop
      },


      backClick() {
        this.$refs.scroll.scrollTo(0,0,500);
      },

      contentscroll(position) {
        this.showback = (-position.y) > 1000
        this.isFixed = (-position.y) > this.tabOffsettop

      },

      loadgoods() {
        this.getHomeGoods(this.currenttype);
        this.$refs.scroll.finishload();
      },


      getHomeMultidata() {
          getHomeMultidata().then(res => {
            this.banners = res.data.banner.list;
            this.recommends = res.data.recommend.list;
          })
        },
        getHomeGoods(type) {
          const page = this.goods[type].page + 1
          getHomeGoods(type, page).then(res => {
            if(res.data){
            this.goods[type].list.push(...res.data.list);}
            this.goods[type].page += 1
          })
        }

      }


  }
</script>

<style scoped>
  #home {
    padding-top: 44px;
    height: 100vh;
    position: relative;
  }
  .homenav{
    background-color: var(--color-tint);
    color: white;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999;
  }

  .tabcontr {
    position: relative;
    z-index: 9;
  }

  .content {
    /* height: calc(100% - 93px); */
    /* overflow: hidden; */
   position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }
</style>
