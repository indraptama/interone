import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import VueScrollReveal from 'vue-scroll-reveal';

import './registerServiceWorker'

Vue.config.productionTip = false

// const srConfig = {
//     class: 'v-scroll-reveal',
//     duration: 800,
//     scale: 1,
//     distance: '10px',
//     mobile: false
//   }



new Vue({
  VueScrollReveal,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
