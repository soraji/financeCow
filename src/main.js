import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { router } from './routes/routes.js';

Vue.use(VueRouter);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
