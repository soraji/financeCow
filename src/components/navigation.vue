<template>
  <div>
    <div class="headerLeft" >
      <router-link tag="li" to="konggo" ><img src="../assets/App.png" alt="메인로고"></router-link>
    </div>
    <div class="headerRight">
      <router-link to="open" tag="li" ><img src="../assets/home_on.png" alt="메인"></router-link>&nbsp;
      <router-link to="open" tag="li" >재테크 라인?</router-link>
      <router-link to="open" tag="li" >재테크 재무설계 항목</router-link>
      <router-link to="open" tag="li" >후기</router-link>
      <router-link to="open" tag="li" >재테크 사례</router-link>
      <router-link to="open" tag="li" >재테크 테스트</router-link>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.headerLeft{
  color: black;
  float:left;
  padding: 5px 8px 0 5px;
}
.headerLeft li{
  margin-right:3px;
  list-style: none;
  float:left;
  padding:3px;
  cursor: pointer;
}
.headerLeft .router-link-exact-active{
  color: #35495e;
  padding: 1px 8px;
}
.headerLeft a{
  color:black;
  text-decoration: none;
  padding-right:50px;
}
.headerRight{
  color: black;
  float:right;
  padding: 5px 20px 0 20px;
  
}
.headerRight .router-link-exact-active{
  color: #35495e;
}
.headerRight a{
  color:black;
  text-decoration: none;
}
.headerRight li{
  width:50px;
}
</style>
