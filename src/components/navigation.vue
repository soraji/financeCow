<template>
  <div class="nav">
    <div class="headerLeft" >
      <router-link to="main" tag="li"><img src="../assets/logo.png" alt="로고"></router-link>
    </div>
    <div class="headerRight">
      <router-link tag="li" to="main"><li>홈</li></router-link>
      <router-link tag="li" to="sevenCows"><li>7 COWS?</li></router-link>
      <router-link tag="li" to="cate"><li>재무설계 항목</li></router-link>
      <router-link tag="li" to="review"><li>고객후기</li></router-link>
      <router-link tag="li" to="example"><li>재테크 사례</li></router-link>
      <router-link tag="li" to="test"><li>내 재테크 알아보기</li></router-link>
    </div>
  </div>
</template>

<script>
import mainPage from './main.vue';
import sevenCows from './sevenCows.vue';
import cate from './cate.vue';
import review from './review.vue';
import example from './example.vue';
import test from './test.vue';
export default {
  components: {
    mainPage,sevenCows,cate,review,example,test
  }
}
</script>

<style scoped>

.nav{
  width:100%;
  margin:0px auto;
  padding-top:30px;
  height:60px;
  color:#fff;
  border-bottom:1px solid #575757;
}
.headerLeft{
  color: fff;
  float:left;
  padding: 5px 8px 0 5px;
  
}
.headerLeft img{
  margin-top:-18px;
  margin-left: 40px;
}
.headerLeft li{
  margin-right:3px;
  list-style: none;
  float:left;
  padding:3px;
  cursor: pointer;
}

.headerLeft a{
  color:#fff;
  text-decoration: none;
  padding-right:50px;
  cursor: pointer;
}
.headerRight{
  color: fff;
  float:right;
  padding: 5px 20px 0 20px;
  
}
.headerRight .router-link-exact-active{
  color: #efc06d;
  font-weight: bold;
}
.headerRight a{
  color:fff;
  text-decoration: none;
  cursor: pointer;
}
.headerRight li{
  width:150px;
  float:left;
  list-style: none;
  text-align: center;
  cursor: pointer;
}
.headerRight li:hover{
  color:#efc06d;
}
.headerRight li .router-link-exact-active{
  color:#efc06d;;
}
a:link{
  color:#fff;
}
a:visited{
  color:#fff;
}
</style>
