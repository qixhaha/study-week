import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
<<<<<<< HEAD
import Vuelidate from 'vuelidate';
Vue.use(Vuelidate);

Vue.config.productionTip = false;

=======
import { ValidationProvider } from 'vee-validate';
Vue.config.productionTip = false;
Vue.component('ValidationProvider', ValidationProvider);
>>>>>>> 30c4ff9cb089730afaf873771ff9b174ab761085
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
