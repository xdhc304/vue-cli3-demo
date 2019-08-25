import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from './util/http';

Vue.prototype.$axios = axios;
Vue.prototype.$message = message;

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
