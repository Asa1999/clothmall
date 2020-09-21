<template>
  <div class="tab-control">
    <div v-for="(item, index) in title" @click="itemclick(index)" class="tab-control-item" :class="{active: index === currentIndex}">
      <span>{{item}}</span>
    </div>

  </div>
</template>

<script>
  export default {
    name:'TabControl',
    props:{
      title: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data(){
      return{
        currentIndex: 0
      }
    },
    methods:{
      itemclick(index){
        this.currentIndex = index;
        this.$emit('tabclick', index)
      }
    }
  }
</script>

<style>
  .tab-control {
    display: flex;
    text-align: center;
    justify-content: space-around;
    font-size: 15px;
    height: 40px;
    line-height: 40px;
    background-color: #FFF;
    width: 100%;
  }

  .tab-control-item {
    width: 40px;
  }
  .active {
    color: var(--color-high-text);

  }
  .active span {
    padding: 5px;
    border-bottom: solid 3px var(--color-high-text);
  }
</style>
