import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import './axios.js'
import store from './vuex/vuex.js'
import VueRouter from 'vue-router';

Vue.use(VueRouter)
Vue.config.productionTip = false
new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
