import {debounce} from 'common/utils.js'

export const itemListenerMixin = {
  mounted() {
    let refresh = debounce(this.$refs.scroll.refresh,200)    
    this.$bus.$on('itemImgLoad', () => {
            refresh()
            
          })
  }
}
