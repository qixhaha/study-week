import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
// import Vuelidate from 'vuelidate';
// Vue.use(Vuelidate);
import axios from 'axios';
import '../local/index';
import PuzzleVerification from 'vue-puzzle-verification';
Vue.config.productionTip = false;
Vue.use(PuzzleVerification);
axios.defaults.baseURL =
  process.env.NODE_ENV !== 'production'
    ? 'http://localhost:3000'
    : 'http://your.domain.com';
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
