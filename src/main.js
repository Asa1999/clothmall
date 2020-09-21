import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import toast from 'components/common/toast/index.js'

Vue.config.productionTip = false

Vue.prototype.$bus = new Vue()

Vue.use(toast)

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
