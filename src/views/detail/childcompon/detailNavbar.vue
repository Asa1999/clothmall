<template>
  <div>
    <navbar>
      <div slot='left' class="back" @click="backclick">
        <img src="~assets/img/detail/back.svg" alt="">
      </div>
      <div slot='center' class="title">
        <div v-for="(item, index) in titles"
        :class="{active: index === currentIndex}"
        @click="titleclick(index)">
          {{item}}
        </div>
      </div>
    </navbar>
  </div>
</template>

<script>
  import navbar from 'components/common/navbar/Navbar.vue'


  export default {
    name:'detailNavbar',
    components:{
      navbar
    },
    data() {
      return {
        titles: ['商品', '参数', '评论', '推荐'],
        currentIndex: 0
      }
    },
    methods:{
      titleclick(index) {
        this.currentIndex = index
        this.$emit('detailtitleclick',index)
      },
      backclick() {
        this.$router.back()
      }
    }
  }
</script>

<style>
  .title {
    display: flex;
    justify-content: space-around;
    font-size: 13px;
  }

  .back img{
    margin-top: 16px;
  }

  .active {
    color: var(--color-high-text);
  }
</style>
