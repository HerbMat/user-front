import Vue from 'vue';
import axios from 'axios';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;
Vue.prototype.$http = axios;
axios.defaults.baseURL = 'http://localhost:8081';

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
