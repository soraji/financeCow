import Vue from 'vue';
import VueRouter from 'vue-router';
import main from '../components/main.vue';
import sevenCows from '../components/sevenCows.vue';
import cate from '../components/cate.vue';
import review from '../components/review.vue';
import example from '../components/example.vue';
import submit from '../components/submit.vue';
import test from '../components/test.vue';
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
    },
    {
      path:'/sevenCows',
      component:sevenCows,
    },
    {
      path:'/cate',
      component:cate,
    },
    {
      path:'/review',
      component:review,
    },
    {
      path:'/example',
      component:example,
    },
    {
      path:'/test',
      component:test,
    },
    {
      path:'/submit',
      component:submit,
    }
  ]
});