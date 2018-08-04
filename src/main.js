import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import store from './store'

import VueWaypoint from 'vue-waypoint';


import './registerServiceWorker'

Vue.config.productionTip = false

// const srConfig = {
//     class: 'v-scroll-reveal',
//     duration: 800,
//     scale: 1,
//     distance: '10px',
//     mobile: false
//   }

Vue.use(VueWaypoint);


new Vue({
  router,
  // store,
  render: h => h(App)
}).$mount('#app')
