<template>
  <div class="main">
    <div class="mainTitle">저축과 함께 가는 우리의 한 번 뿐인 시간,<br>‘나’에게 맞는<br>가장 효율적인 저축방법을 미리 시뮬레이션 하는 방법!</div>
    <div class="subTitle">현재 7cows 에서 <span id="number">123,456</span>명이 <br>수석 ASSET DIRECTOR 들에게 자산배치도를 받으셨습니다.</div>
    <div class="goBtn" @click="writeForm()"><button type="button">금융사별 내 저축 <b>예상 포트폴리오 받아보기 ></b></button></div>
  </div>
</template>

<script>
export default {
  mounted(){
    this.number();
  },
  methods:{
    number(){
      // let spanNum = document.getElementsByTagName('span');
      let spanNum = document.getElementById('number');
      let num = 25445;
      spanNum.innerHTML = num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
    writeForm(){
      document.location = "/submit";
    }
  }
}
</script>

<style scoped>
.main{
  height:100%;
  width:100%;
  margin:0 auto;
}
.mainTitle{
  margin:80px auto;
  text-align: center;
  font-size:40px;
  color:#fff;
  line-height: 75px;
}
.subTitle{
  width:800px;
  margin:80px auto;
  color:#fff;
  font-size: 24px;
  text-align: center;
  line-height: 50px;
}
.subTitle span{
  font-size: 70px;
  color:#efc06d;
}
.goBtn{
  margin:0 auto 50px auto;
  text-align: center;
  height:200px;
}
button{
  font-size: 20px;
  background-color:#efc06d;
  color:#000;
  border:0;
  padding:15px 30px;
  cursor: pointer;
}
</style>
