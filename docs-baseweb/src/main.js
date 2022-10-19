import Vue from 'vue'
import VueMatomo from 'vue-matomo'
import App from './App.vue'
import router from './router'
import store from './store'
import VueCodeHighlight from 'vue-code-highlight'

import { NarrativaScroll} from "../../src/index.js"

import "vue-code-highlight/themes/prism-tomorrow.css";

Vue.config.productionTip = false

Vue.use(VueCodeHighlight)
Vue.use(NarrativaScroll)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

if (process.env.VUE_APP_MATOMO_SITEID != 0) {
  Vue.use(VueMatomo, {
    host: 'https://retru.conacyt.mx/',
    siteId: process.env.VUE_APP_MATOMO_SITEID,
    trackerFileName: 'matomo',
    router: router,
    enableLinkTracking: true,
    requireConsent: false,
    trackInitialView: true,
    debug: true,
  });
}
