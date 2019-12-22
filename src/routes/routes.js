import Vue from 'vue';
import VueRouter from 'vue-router';
import main from '../components/main.vue';
Vue.use(VueRouter);

export const router = new VueRouter({
  mode : 'history',
  routes : [
    {
      path:'/',
      redirect : '/main',
    },
    {
      path:'/main',
      component:main,
    }
  ]
});