import Vue from 'vue'
import App from './App.vue'

import ZUi from './packages/index'

Vue.config.productionTip = false

Vue.use(ZUi)

new Vue({
  render: h => h(App)
}).$mount('#app')
