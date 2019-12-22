<template>
  <div id="footer">
	<div class="footer_wrap">		
		<!-- 개인정보수집추가 -->
		
		<div class="inner_copyright">
			<dl>
				<dt>[개인정보 수집 및 이용안내] </dt>
				<dd>개인정보 수집주체: (주)비제이피플즈</dd>
				<dd>개인정보 수집항목: 이름,성별,직업,휴대전화,생년월일,이메일,주거지역,상담가능시간,계획 등</dd>
				<dd>개인정보 수집,이용목적: 상담안내 및 서비스 안내 (전화,문자,이메일) </dd>
				<dd>개인정보 보유,이용기간: 수집일로부터 3년(고객 동의 철회시 지체없이 파기)</dd>
			</dl>
			<dl>
				<dt>[개인정보 취급위탁] </dt>
				<dd>당사는 서비스 이행 및 향상을 위해 개인정보 취급업무를 전문업체에 위탁운영하고 있습니다. 또한 개인정보를 안전하게 처리하기 위하여 필요한 사항 등을 명확히 규정하고 있으며, 당해계약 내용을 서면 또는 전자적으로 보관하고 있습니다</dd>
				<dd>위탁업체 및 업무내용</dd>
				<dd>㈜ 비제이피플즈: 고객 DB 및 개인정보에 관련된 문자발송/수집/보관/민원처리</dd>			
			</dl>
		</div>
		<!--// 개인정보수집추가 -->
		<div class="logo_address">
			<p class="ci">7 cows</p>	
      <div class="footer_privacy" align="right"><a href="/merchant/lineforinvest/customer/privacy_up.asp">개인정보취급방침</a></div>	
			<ul class="footer_copyright">
				<li>
					<span class="dt">회사명</span>
					<span class="dd">(주)세븐카우즈&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
					<span class="dt">주소</span>
					<span class="dd">서울 강남구 테헤란로 120</span>
				</li>
				<li>					
					<span class="dt">사업자 등록번호</span>
					<span class="dd">123-45-67895&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
					<span class="dt">법인등록번호</span>
					<span class="dd">1102150-7796913&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
					<span class="dt">팩스번호</span>
					<span class="dd">02-419-8991</span>					
				</li>
				<li>
					<span class="dt">전화번호</span>
					<span class="dd">070-4365-5221&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
					<span class="dt">개인정보담당자</span>
					<span class="dd">이민영</span>
				</li>
				<li>Copyright ⓒ<span class="dd">(주)세븐카우즈.</span> All Right Reserved.</li>
			</ul>
		</div>
	</div>		
</div>
</template>

<script>
export default {

}
</script>

<style scoped>
#footer {width:100%; min-width:1100px; background-color:#000; overflow:hidden;}
#footer .footer_wrap { position:relative; width: 1120px; margin: 0 auto; font-family:'NanumGothic','dotum', sans-serif;}
#footer .footer_wrap .ci {margin-bottom:10px; }
#footer .footer_wrap a.btn_privacy { float:right; }
#footer .info_wrap { margin:0 0 0 130px; color:#c3c3c3; float:left;}
#footer .info_wrap .tit_copy { color:#fde000; font-size:15px; font-weight:bold; }
#footer .info_wrap ul li { margin:10px 0; font-size:14px;}
#footer .info_wrap ul li strong {  margin-left:30px; font-weight:normal;}
#footer .info_wrap ul li span { margin:0 30px; }
#footer .info_wrap .copyright { font-size:14px; color:#c3c3c3; margin-top:8px;}
#footer .info_wrap .copyright strong { color:#fff; font-weight:normal; display:inline-block; vertical-align:top;}

#footer .footer_wrap .footer_copyright { width: 1000px; float:left; text-align:left; font-size:14px; font-family:'NanumGothic' , sans-serif }
#footer .footer_wrap .footer_copyright li { line-height:25px; color:#c2c2c2; list-style: none;}
#footer .footer_wrap .footer_copyright .company { font-weight:bold; color:#111; }
#footer .footer_wrap .footer_copyright .dd { margin-left:6px; color:#fff; }
#footer .footer_wrap .footer_copyright .address .dd { margin-right:25px; }
#footer .footer_wrap .footer_copyright .business .dd { margin-right:38px; }

#footer .footer_wrap .inner_copyright{color:#fff;}
.inner_copyright > dl {
    float: left;
    overflow: hidden;
    width: 45%;
    position: absolute;
    left: 50%;
    top: 70px;
}
.inner_copyright > dl dt {
    font-weight: bold;
    font-size: 15px;
    padding-bottom: 20px;
    display: block;
    padding-left: 35px;
}
.inner_copyright > dl dd {
    font-size: 13px;
    line-height: 23px;
}
.inner_copyright {
    position: relative;
    overflow: hidden;
    color: #c3c3c3;
    height: 270px;
    text-align: left;
}
.inner_copyright > dl:first-child {
    margin-right: 20px;
    position: absolute;
    left: 0;
    top: 70px;
}
.footer_privacy a {
    color: #c3c3c3;
    padding: 10px 30px;
    font-size: 15px;
    border: 1px solid #c3c3c3;
    text-decoration: none;
		margin-right:100px;
}
div.logo_address{
  height:200px;
  margin-bottom:70px;
}
a:link{color: #fff;}
a:visited{color:#fff;}
</style>
