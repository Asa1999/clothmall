<template>
  <div v-if='comments.user'>
    <div class="commenttitle">
      <span>用户评价</span>
      <span>更多</span>
    </div>
    <div class="commentuser" v-if="comments.user">
      <img  :src="comments.user.avatar" alt="">
      <span>{{comments.user.uname}}</span>
    </div>
    <div class="commentcontent">
      {{comments.content}}
    </div>
    <div class="commentstyle">
      <span>{{comments.created | showDate}}</span>
      {{comments.style}}

    </div>

    <div v-if="comments.images" class="commentimg">
      <img :src="item" v-for="(item, index) in comments.images" :key='index' alt="">
    </div>
  </div>

</template>

<script>
  import {formatDate} from 'common/utils.js'

  export default {
    name: 'detailComment',
    props: {
      comments: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    filters: {
      showDate(value) {
        const date = new Date(value * 1000)

        return formatDate(date, 'yyyy-MM-dd')
      }
    }
  }
</script>

<style>
  .commenttitle {
    display: flex;
    justify-content: space-between;
    padding: 10px 10px;
    color: #000000;
    font-size: 13px;
    border-top: 3px solid #F0F0F0;
    border-bottom: 1px solid #F0F0F0;
  }

  .commentuser {
    display: flex;
    padding: 5px;

  }

  .commentuser img {
    display: block;
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
  .commentuser span {
    padding: 10px;
    font-size: 13px;
    color: #000000;
  }

  .commentcontent {
    padding: 10px;
    font-size: 12px;
  }

  .commentstyle {
    padding: 10px;
    font-size: 10px;
  }

  .commentimg {
    display: flex;

    padding-left: 10px;
    padding-bottom: 10px;
  }
  .commentimg img{
    width: 60px;
    margin-left: 5px;
  }
</style>
