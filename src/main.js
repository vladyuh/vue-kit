import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueBus from "vue-bus";
import Vuebar from 'vuebar';
import VueLazyload from 'vue-lazyload';

Vue.config.productionTip = false

Vue.use(Vuebar)
Vue.use(VueBus)

Vue.use(VueLazyload, {
  observer: true,
  observerOptions: {
    rootMargin: '0px',
    threshold: 0.1
  },
  listenEvents: ['scroll']
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
