import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import './axios'
import VueCookie from 'vue-cookies';
import store from './vuex/vuex.js'

Vue.config.productionTip = false
Vue.use(VueCookie)
new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
