<template>
  <div class="submit">
    <div class="sub_submit1">
      <img src="../assets/img_txt_list_yes.jpg" alt="간략설명">
    </div>
    <div class="sub_submit2">
      <img src="../assets/btn_portfolio_done.jpg" alt="포트폴리오 확인하기">
    </div>
    <div class="submitForm">
      <form class="gform" id="gform" method="post" action="https://script.google.com/macros/s/AKfycbwoySb8ToFKGspyzINjwXyWoNuohU0NT1kZyb71/exec" target="iframe1">
        <table class="formTable">
          <tr>
            <td colspan="2" style="text-align:center;">이민영 똥멍청이는 이 문구를 수정합니다</td>
          </tr>
          <tr>
            <td></td>
          </tr>
          <tr>
            <td>이름&nbsp;<font color="#ff0000">*</font></td>
            <td><input type="text" name="name" id="name"></td>
          </tr>
          <tr>
            <td>성별</td>
            <td>
              <input type="radio" name="gender" id="male">남성
              <input type="radio" name="gender" id="female">여성
            </td>
          </tr>
          <tr>
            <td>직업</td>
            <td>
              <select name="job" id="job" class="c_job01">
								<option selected="selected" value="">선택하세요</option>
								<option value="사무직">사무직</option>
								<option value="연구/개발직">연구/개발직</option>
								<option value="기술직">기술직</option>
								<option value="경영/관리직">경영/관리직</option>
								<option value="영업/마케팅">영업/마케팅</option>
								<option value="전문직">전문직</option>
								<option value="자영업">자영업</option>
								<option value="판매직">판매직</option>
								<option value="노무직">노무직</option>
								<option value="서비스직">서비스직</option>
								<option value="농업">농업</option>
								<option value="축산업">축산업</option>
								<option value="임업">임업</option>
								<option value="수산업">수산업</option>
								<option value="공무원">공무원</option>
								<option value="군경">군경</option>
								<option value="교직">교직</option>
								<option value="회사원">회사원</option>
								<option value="주부">주부</option>
								<option value="의료인">의료인</option>
								<option value="법조인">법조인</option>
								<option value="종교인">종교인</option>
								<option value="언론인">언론인</option>
								<option value="예술인">예술인</option>
								<option value="광고업">광고업</option>
								<option value="무직">무직</option>
								<option value="기타">기타</option>
							</select>
            </td>
          </tr>
          <tr>
            <td>휴대전화&nbsp;<font color="#ff0000">*</font></td>
            <td>
              <input type="text" name="tel1" id="tel1" onKeyup="this.value=this.value.replace(/[^0-9]/g,'');">-
              <input type="text" name="tel2" id="tel2" onKeyup="this.value=this.value.replace(/[^0-9]/g,'');">-
              <input type="text" name="tel3" id="tel3" onKeyup="this.value=this.value.replace(/[^0-9]/g,'');">
            </td>
          </tr>
          <tr>
            <td>생년월일</td>
            <td>						
							<select name="byear" id="byear" class="c_birth01">
								<option selected="selected" value="">선택</option>
								<option value="1957">1957년</option><option value="1958">1958년</option><option value="1959">1959년</option><option value="1960">1960년</option><option value="1961">1961년</option><option value="1962">1962년</option><option value="1963">1963년</option><option value="1964">1964년</option><option value="1965">1965년</option><option value="1966">1966년</option><option value="1967">1967년</option><option value="1968">1968년</option><option value="1969">1969년</option><option value="1970">1970년</option><option value="1971">1971년</option><option value="1972">1972년</option><option value="1973">1973년</option><option value="1974">1974년</option><option value="1975">1975년</option><option value="1976">1976년</option><option value="1977">1977년</option><option value="1978">1978년</option><option value="1979">1979년</option><option value="1980">1980년</option><option value="1981">1981년</option><option value="1982">1982년</option><option value="1983">1983년</option><option value="1984">1984년</option><option value="1985">1985년</option><option value="1986">1986년</option><option value="1987">1987년</option><option value="1988">1988년</option><option value="1989">1989년</option><option value="1990">1990년</option><option value="1991">1991년</option><option value="1992">1992년</option><option value="1993">1993년</option><option value="1994">1994년</option><option value="1995">1995년</option><option value="1996">1996년</option><option value="1997">1997년</option><option value="1998">1998년</option><option value="1999">1999년</option><option value="2000">2000년</option><option value="2001">2001년</option><option value="2002">2002년</option><option value="2003">2003년</option><option value="2004">2004년</option><option value="2005">2005년</option><option value="2006">2006년</option><option value="2007">2007년</option><option value="2008">2008년</option><option value="2009">2009년</option><option value="2010">2010년</option><option value="2011">2011년</option><option value="2012">2012년</option><option value="2013">2013년</option><option value="2014">2014년</option><option value="2015">2015년</option><option value="2016">2016년</option><option value="2017">2017년</option><option value="2018">2018년</option><option value="2019">2019년</option>
							</select>
							<select name="bmonth" id="bmonth" style="width:64px;" class="c_birth02">
								<option selected="selected" value="">선택</option>
								<option value="1">1월</option><option value="2">2월</option><option value="3">3월</option><option value="4">4월</option><option value="5">5월</option><option value="6">6월</option><option value="7">7월</option><option value="8">8월</option><option value="9">9월</option><option value="10">10월</option><option value="11">11월</option><option value="12">12월</option>
							</select>
							<select name="bday" id="bday" style="width:63px;" class="c_birth03">
								<option selected="selected" value="">선택</option>
								<option value="1">1일</option><option value="2">2일</option><option value="3">3일</option><option value="4">4일</option><option value="5">5일</option><option value="6">6일</option><option value="7">7일</option><option value="8">8일</option><option value="9">9일</option><option value="10">10일</option><option value="11">11일</option><option value="12">12일</option><option value="13">13일</option><option value="14">14일</option><option value="15">15일</option><option value="16">16일</option><option value="17">17일</option><option value="18">18일</option><option value="19">19일</option><option value="20">20일</option><option value="21">21일</option><option value="22">22일</option><option value="23">23일</option><option value="24">24일</option><option value="25">25일</option><option value="26">26일</option><option value="27">27일</option><option value="28">28일</option><option value="29">29일</option><option value="30">30일</option><option value="31">31일</option>
							</select>
						</td>
          </tr>
          <tr>
            <td>이메일</td>
            <td>						
							<input name="email1" id="email1" type="text" maxlength="50" value="" size="12" class="email01">
							<span class="bl_a"><img src="http://img.leaderscpa.com/lineforinvest/sub/bl_a.jpg" alt=""></span>
							<input type="text" name="email3" id="email3" class="email02" maxlength="50" value="">
							<select name="email2" id="email2" class="email03" onchange="isEmpty('consultForm01',this)">
								<option value="etc">직접입력</option>
								<option value="naver.com">naver.com</option>
								<option value="nate.com">nate.com</option>
								<option value="daum.net">daum.net</option>
								<option value="hanmail.net">hanmail.net</option>
								<option value="gmail.com">gmail.com</option>
							</select>
						</td>
          </tr>
          <tr>
            <td>주거지역</td>
            <td>
              <select name="area" id="area" class="c_area01">
								<option value="">선택하세요</option>
								<option value="서울">서울</option>
								<option value="경기">경기</option>
								<option value="인천">인천</option>
								<option value="대전">대전</option>
								<option value="부산">부산</option>
								<option value="울산">울산</option>
								<option value="광주">광주</option>
								<option value="대구">대구</option>
								<option value="세종">세종</option>
								<option value="강원">강원</option>
								<option value="경남">경남</option>
								<option value="경북">경북</option>
								<option value="전남">전남</option>
								<option value="전북">전북</option>
								<option value="충남">충남</option>
								<option value="충북">충북</option>
								<option value="제주">제주</option>
							</select>
            </td>
          </tr>
          <tr>
            <td>상담가능시간</td>
            <td>
              <select name="calltime" id="calltime" class="c_calltime" >
								<option selected="selected" value="">선택하세요</option>
								<option value="언제나 통화 가능">언제나 통화 가능</option>
								<option value="오전 09:00~10:00">오전 09:00 ~ 10:00</option>
								<option value="오전 10:00~11:00">오전 10:00 ~ 11:00</option>
								<option value="오전 11:00~12:00">오전 11:00 ~ 12:00</option>
								<option value="점심 12:00~01:00">점심 12:00 ~ 01:00</option>
								<option value="오후 01:00~02:00">오후 01:00 ~ 02:00</option>
								<option value="오후 02:00~03:00">오후 02:00 ~ 03:00</option>
								<option value="오후 03:00~04:00">오후 03:00 ~ 04:00</option>
								<option value="오후 04:00~05:00">오후 04:00 ~ 05:00</option>
								<option value="오후 05:00~06:00">오후 05:00 ~ 06:00</option>
								<option value="오후 06:00~07:00">오후 06:00 ~ 07:00</option>
							</select>
            </td>
          </tr>
          <tr>
            <td>계획</td>
            <td>
              <select name="tujaamout" id="tujaamout" >
								<option selected="selected" value="">선택</option>
								<option value="30만원 ~ 50만원">매 월 30만원 ~ 50만원</option>
								<option value="50만원 ~ 100만원">매 월 50만원 ~ 100만원</option>
								<option value="100만원 ~ 150만원">매 월 100만원 ~ 150만원</option>
								<option value="150만원 ~ 200만원">매 월 150만원 ~ 200만원</option>
								<option value="200만원 ~ 300만원">매 월 200만원 ~ 300만원</option>
								<option value="300만원 이상">매 월 300만원 이상</option>
							</select>
            </td>
          </tr>
          <tr>
            <td></td>
          </tr>
          <tr>
            <td colspan="2">
              <button type="button" @click="checkForm()">재무설계 및 포트폴리오 신청</button>
            </td>
          </tr>
        </table> 
      </form>
    </div>
    <div class="agree">
      <input type="checkbox" name="agree" id="agree">개인정보 수집 및 정보공개에 동의합니다
    </div>
    <iframe name="iframe1" style="display:none;"></iframe>
  </div>
</template>

<script>
export default {
  methods:{
    checkForm(){
      let name = document.getElementById('name').value;
      let tel1 = document.getElementById('tel1').value;
      let tel2 = document.getElementById('tel2').value;
      let tel3 = document.getElementById('tel3').value;
      const checkBox = document.getElementById('agree').checked;
      if(name.length == 0){
        alert('성함을 입력해주세요');
        document.getElementById('name').focus();
      }else{
        if(tel1.length < 3 || tel1.length > 3 || tel2.length < 3 || tel2.length > 5 || tel3.length > 5 || tel3.length < 4){
          alert('핸드폰 번호를 정확히 입력해주세요');
          document.getElementById('tel1').focus();  
        }else{
          if(checkBox == false){
            alert('개인정보 수집에 동의해 주세요');
          }else{
            document.getElementById('gform').submit();
            alert('등록되었습니다. 빠른시일안에 연락드리겠습니다');
          }
        }
      }
      
      
      
    }
  }
}
</script>

<style scoped>
.submit{
  background-color:#fff;
  margin:0 auto;
  border:1px solid #fff;
}
.sub_submit1{
  width:990px;
  margin: 0 auto;
}
.sub_submit1 img{
  margin: 100px auto 50px auto;
}
.sub_submit2{
  width:659px;
  margin: 0 auto 50px auto;
}
.submitForm{
  width: 720px;
  margin:50px auto;
  border: 2px solid #696969;
  border-radius: 10px;
  padding:30px;
}
.formTable{
  width:100%;
}
.formTable tr td{
  height:40px;
}
input{
  border: 0;
  outline: 0;
  background: transparent;
  border-bottom: 1px solid black;
}
.agree{
  margin: 0 auto 40px auto;
  width:100%;
  text-align: center;
}
button{
  font-size: 20px;
  background-color:#efc06d;
  color:#000;
  border:0;
  padding:15px 30px;
  cursor: pointer;
  border-radius: 5px;
  width:100%;
}
checkbox[name="agree"]{
  margin:0 auto;
}
</style>