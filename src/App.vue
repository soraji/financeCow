<template>
  <div id="app">
    <navigation></navigation>
    <transition name="fade" mode="out-in">
    <router-view></router-view>
    </transition>
    <footerPage></footerPage>
  </div>
</template>

<script>
import navigation from './components/navigation.vue';
// import mainPage from './components/main.vue';
// import sevenCows from './components/sevenCows.vue';
// import cate from './components/cate.vue';
// import review from './components/review.vue';
// import example from './components/example.vue';
// import test from './components/test.vue';
// import submit from './components/submit.vue';
import footerPage from './components/footer.vue';
export default {
  name: 'app',
  components: {
    navigation,
    // mainPage,sevenCows,cate,review,example,test,submit,
    footerPage
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-width: 1100px;
  background:#454545 url('http://img.leaderscpa.com/lineforinvest/main/bg_sub_body.jpg') no-repeat 0 0;
}
html,body{
  margin:0;
  padding:0;
}
.fade-enter,
.fade-leave-active {
  opacity: 0
}
</style>
