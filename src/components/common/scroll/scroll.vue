<template>
  <div class="wrapper" ref='wrapper'>
    <div class="content">
      <slot>

      </slot>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'


  export default {
    name: 'scroll',
    props:{
      probeType: {
        type: Number,
        default: 0
      },
      pullUpLoad: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        scroll: null,

      }
    },
    mounted() {
      this.scroll = new BScroll(this.$refs.wrapper,{
        click: true,
        probeType: this.probeType,
        pullUpLoad: this.pullUpLoad
      })

      this.scroll.on('scroll', (position) => {
        this.$emit('scrollposition',position)
      })

      this.scroll.on('pullingUp', () => {
        this.$emit('load')
      })

    },
    methods: {
      scrollTo(x, y, time) {
         this.scroll.scrollTo(x, y, time)
         
      },
      finishload() {
        this.scroll.finishPullUp()

      },
      refresh() {

        this.scroll && this.scroll.refresh()
      }
    }
  }
</script>

<style>
</style>
