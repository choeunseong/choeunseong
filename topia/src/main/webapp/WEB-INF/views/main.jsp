<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page session="false" %>

<html>
<head>

	<script src="../resources/compnent/jquery-3.3.1.js"></script>
	<script src="../resources/compnent/jquery-3.3.1.min.js"></script>
	<script src="../resources/compnent/jquery-ui-1.12.1.custom/jquery-ui.min.js"></script>
	
	<script src="../resources/compnent/jquery-loading-master/dist/jquery.loading.min.js"></script>
	<script src="../resources/compnent/jqueryPrint/jqueryPrint.js"></script>

	<script src="http://dmaps.daum.net/map_js_init/postcode.v2.js?autoload=false"></script>
	
	<script src="../resources/js/util/util.js"></script>
	<script src="../resources/js/util/newUtil.js"></script>
	<script src="../resources/js/userInfo/userInfo.js"></script>
	
	
	<link rel="stylesheet" type="text/css" href="../resources/compnent/jquery-ui-1.12.1.custom/jquery-ui.min.css">
	<link rel="stylesheet" type="text/css" href="../resources/compnent/jquery-loading-master/dist/jquery.loading.min.css">
	<link rel="stylesheet" type="text/css" href="../resources/css/personalHistory/personalHistory.css?ver=1">

	<title>Home</title>
	<style type="text/css">
	#pop{
		width:300px; height:400px; background:#3d3d3d; color: #fff;
		position: absolute; top: 10px; left: 100px; text-align: center;
		border: 2px solid #000;
	}
	</style>
	
	<script>
		// 병역일자 선택
		function fnServDate(){
			if($("#userArmyServEnter").val() == ''){
				alert("입대일자를 먼저 선택해 주세요"); 
				$("#userArmyServLeave").val("");
				$("#userArmyServEnter").focus();
				return;
			}
			if($("#userArmyServLeave").val() != ''){
				if($("#userArmyServEnter").val() >= $("#userArmyServLeave").val()){
					alert("입대일자가 제대일자보다 크거나 같을 수 없습니다.\n다시 선택해주세요");   
					$("#userArmyServLeave").val("");
					$("#userArmyServLeave").focus();
					return; 
				}
			}
			
		}
		
		$(document).ready(function(){ 
			$(".keywordAddBtn").click(function(){
				if($("#keywordAddBtn").hasClass("keywordAddBtn") == true){
					$(".keywordInputPannel").removeClass("keyword-input-pannel-invisible");
					$(".keywordInputPannel").addClass("keyword-input-pannel-visible");
					
					$("#keywordAddBtn").removeClass("keywordAddBtn");
					$("#keywordAddBtn").addClass("keywordMinBtn");
					
					$("#keywordAddBtn").html("-")
					$(".keywordInputPannel").find("input").focus();
				}else if($("#keywordAddBtn").hasClass("keywordMinBtn") == true){
					$(".keywordInputPannel").removeClass("keyword-input-pannel-visible");
					$(".keywordInputPannel").addClass("keyword-input-pannel-invisible");
					
					$("#keywordAddBtn").removeClass("keywordMinBtn");
					$("#keywordAddBtn").addClass("keywordAddBtn");

					$("#keywordAddBtn").html("+")
					$(".keywordInputPannel").find("input").val("");
				}
			});
		});
		
		// 핸드폰번호 하이픈 넣기
		function phoneHyphen(obj){
		    var number = obj.value.replace(/[^0-9]/g, "");
		    var phone = "";
		    
			if(number.length < 4) {
			    return number;
			} else if(number.length < 7) {
			    phone += number.substr(0, 3);
			    phone += "-";
			    phone += number.substr(3);
			} else if(number.length < 11) {
			    phone += number.substr(0, 3);
			    phone += "-";
			    phone += number.substr(3, 3);
			    phone += "-";
			    phone += number.substr(6);
			} else {
			    phone += number.substr(0, 3);
			    phone += "-";
			    phone += number.substr(3, 4);
			    phone += "-";
			    phone += number.substr(7);
			}
			obj.value = phone;
		}
		
		// 전화번호 하이픈넣기
		function telHyphen(obj){
		    var number = obj.value.replace(/[^0-9]/g, "");
		    var tel = "";

		    // 서울 지역번호(02)가 들어오는 경우
		    if(number.substring(0, 2).indexOf('02') == 0) {
		        if(number.length < 3) {
		            return number;
		        } else if(number.length < 6) {
		            tel += number.substr(0, 2);
		            tel += "-"; 
		            tel += number.substr(2);
		        } else if(number.length < 10) {
		            tel += number.substr(0, 2);
		            tel += "-";
		            tel += number.substr(2, 3);
		            tel += "-";
		            tel += number.substr(5);
		        } else {
		            tel += number.substr(0, 2);
		            tel += "-";
		            tel += number.substr(2, 4);
		            tel += "-";
		            tel += number.substr(6);
		        }
		    
		    // 서울 지역번호(02)가 아닌경우 
		    } else {
		        if(number.length < 4) {
		            return number;
		        } else if(number.length < 7) {
		            tel += number.substr(0, 3);
		            tel += "-";
		            tel += number.substr(3);
		        } else if(number.length < 11) {
		            tel += number.substr(0, 3);
		            tel += "-";
		            tel += number.substr(3, 3);
		            tel += "-";
		            tel += number.substr(6);
		        } else {
		            tel += number.substr(0, 3);
		            tel += "-";
		            tel += number.substr(3, 4);
		            tel += "-";
		            tel += number.substr(7);
		        }
		    }

		    obj.value = tel;
		}
	</script>
</head>

<body>
	<input type="hidden" id="status" value="${ status }">
	<input type="hidden" id="careerCnt" value="1">
	<input type="hidden" id="eduCnt" value="1">
	<input type="hidden" id="licenCnt" value="1">
	<input type="hidden" id="qualifiCnt" value="1">
	<input type="hidden" id="skillCnt" value="1">
	<input type="hidden" id="trainingCnt" value="1">
	
	<!-- <div id="pop">
		<div style="height: 370px;">
			레이어 팝업 Test<br>
			<a><b>a,b 태그</b></a>
		</div>
		<div>
			<div id="close" style="width: 100px; margin: auto;">close</div>
		</div>
	</div> -->
	<div class="custom-loading"><div class="loading-image"></div></div>
	<%-- 새 작성건의 경우 해당 인풋값은 비어있고 수정 및 조회건은 들어감 --%>
	<div class="user-info-list-pannel">
		<div class="personal-history-title-pannel">
			<h3>개 인 이 력 카 드</h3>
		</div>
		
		<div class="top-header-pannel">
			
			<div class="status-display-pannel">
				<h5>※ 새 이력 작성</h5>
			</div>
			
			<div class="function-btn-pannel">
				<button type="button" class="printBtn" onclick="fnPrint()">
					출력
				</button>
				<button class="personalHistoryListBtn" onclick="fnHistoryListBtn('block')">
					불러오기
				</button>
				<button class="newHistoryCreateBtn" onclick="modeChange('NEW')">
					새로작성
				</button>
				<!-- <button class="personalHistoryResetBtn">
					초기화
				</button> -->
				<button type="button" class="personalHistorySaveBtn" onclick="cardSave()">
					저장
				</button>
			</div>
		</div>
		
		<form id="userInfoForm" name="userInfoForm">
			<input type="hidden" id="resultEmail" name="userEmail">
			<input type="hidden" id="userIdx" name="userIdx" value="0">
			
			<table class="user-info-table1">
				<tbody>
					<tr>
						<td>*성명</td>
						<td>
							<input type="text" id="userName" name="userName">
						</td>
						<td>*주민등록번호</td>
						<td colspan="3">
							<input type="password" id="userSocialSecunum" name="userSocialSecunum" maxlength="13" placeholder='  "-" 제외한 숫자만 입력'>
						</td> 
						<td>성별</td>
						<td>
							<select id="userSex" name="userSex">
								<option value="">선택없음</option>
								<option value="남성">남성</option>
								<option value="여성">여성</option>
							</select>
						</td>   
						<td style="display: none;" rowspan="3">  
							<div id="imgDiv" > 
								<img id="thumbNail" name="thumbNail" width="120" height="120" />
							</div>
						</td>
					</tr>
					
					<tr>
						<td>소속회사</td>
						<td colspan="5"><input type="text" id="userComp" name="userComp"></td>
						<td>입사일</td>
						<td><input type="text" id="userCompEnterdate" name="userCompEnterdate" class="dateInput"></td>
 					</tr>
					
					<tr>
						<td>부서</td>
						<td><input type="text" id="userDept" name="userDept"></td>
						<td>직위</td>
						<td><input type="text" id="userSpot" name="userSpot"></td>
						<td>병역</td>
						<td><input type="text" id="userArmyServ" name="userArmyServ"></td>
						<td>결혼</td>
						<td>
							<select id="userMaritalStatus" name="userMaritalStatus">
								<option value="">선택없음</option>
								<option value="기혼">기혼</option>
								<option value="미혼">미혼</option>
							</select>
						</td>
					</tr>
					
					<tr>
						<td>병역<br> 입대 ~ 제대일</td>
						<td colspan="2"><input type="text" id="userArmyServEnter" name="userArmyServEnter" class="dateInput prevDate" onchange="fnServDate()"></td>
						<td> ~ </td>
						<td colspan="2"><input type="text" id="userArmyServLeave" name="userArmyServLeave" class="dateInput laterDate" onchange="fnServDate()"></td>
						<td>역종/병과</td>
						<td><input type="text" id="userArmyServPeriod" name="userArmyServPeriod"></td>
						<td style="display: none;">
							<input type="file" name="file">
							<!-- <input type="hidden" name="userIdx"> -->
							<!-- <input type="hidden" name="userName" > -->
						</td>
					</tr>
				</tbody>
				
			</table>
		
			<table class="user-info-table2">
	
				<tbody>
					<tr>
						<td>전화</td>
						<td><input type="tel" placeholder='   휴대전화 "-" 포함' id="userTelnumWireless" name="userTelnumWireless" maxlength="13" onKeyUp="phoneHyphen(this);"></td>
						<td colspan="2"><input type="tel" placeholder='   유선 "-" 포함' id="userTelnumWired" name="userTelnumWired" maxlength="13" onKeyUp="telHyphen(this);"></td>
					</tr>
					
					<tr>
						<td>E-Mail</td>
						<td><input type="email" id="userEmail"></td>
						<td>
							<select id="emailDomain" style="width: 100%;">
								<option disabled="disabled" selected="selected">선택하세요</option>
								<option value="@naver.com">@naver.com</option>
								<option value="@gmail.com">@gmail.com</option>
								<option value="@daum.net">@daum.net</option>
								<option value="">직접입력</option>
							</select>
						</td>
						<td id="test12" style="display: none;">
							<input type="text" id="emailDomain1" />
						</td>
					</tr>
					
					<tr>
						<td>주소</td>
						<td>
							<div>
								<input type="text" id="userZipcode" name="userZipcode" placeholder="우편번호" readonly>
								<input type="button" id="personalZipcodeSearchBtn" value="우편번호 찾기" onclick="execPostCode()" />
								<div class="clear-pannel"></div>
							</div>
						</td>
						<td colspan="2">
							<input type="text" id="userAddress" name="userAddress" placeholder="   주소" readonly>
							<!-- <input type="text" id="userAddress"> -->
						</td>
					</tr>
				</tbody>
			</table>
		
			<%-- 학력 / 자격증 --%>
			<div class="edu-and-qualifi-pannel">
				<div class="edu-table-pannel">
					<table class="edu-table flexibleTable" tb="edu" id="eduTable">
						<thead>
							<tr>
								<td>학교명</td>
								<td>상태</td>
								<td colspan="2">년</td>
								<td colspan="2">월</td>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td><input type="text" data="eduSchoolName" name="eduList[0].eduSchoolName" class="eduSchoolName"></td>
								<td>
									<select data="eduStatus" name="eduList[0].eduStatus" class="eduStatus">
										<option value="">선택없음</option>
										<option value="입학">입학</option>
										<option value="재학">재학</option>
										<option value="졸업">졸업</option>
										<option value="졸업예정">졸업예정</option>
									</select>
								</td>
								<td><input type="text" data="eduYear" name="eduList[0].eduYear" placeholder="" class="eduYear"></td>
								<td>년</td>
								<td><input type="text" data="eduMonth" name="eduList[0].eduMonth" placeholder="" class="eduMonth"></td>
								<td>월</td>
							</tr>
						</tbody>
						
					</table>
					
					<div class="add-row-btn-pannel">
						<button type="button" class="add-row-btn addRowBtn" onclick="fnAddEdu()">+</button>
					</div>
				</div>
				
				<div class="qualifi-table-pannel">
					<table class="qualifi-table flexibleTable" tb="qualifi" id="qualifiTable">
					
						<thead>
							<tr>
								<td>
									자격증명
								</td>
								<td>
									취득일
								</td>
							</tr>
						</thead>
						
						<tbody>
							<tr>
								<td><input type="text" data="qualifiName" name="qualifiList[0].qualifiName" class="qualifiName"></td>
								<td><input type="text" data="qualifiGetdate" name="qualifiList[0].qualifiGetdate" class="qualifiGetdate dateInput"></td>
							</tr>
						</tbody>
						
					</table>
					
					<div class="add-row-btn-pannel">
						<button type="button" class="add-row-btn addRowBtn" onclick="fnAddQualifi()">+</button>
					</div>
					
				</div>
			</div>
	
			<div class="clear-pannel"></div>
			
			<div class="career-info-pannel">
				<table class="career-info flexibleTable" tb="career" id="careerTable">
					<thead>
						<tr>
							<td rowspan="2">회사명</td>
							<td colspan="2">재직기간</td>
							<td rowspan="2">직위</td>
							<td rowspan="2">담당업무</td>
						</tr>
						<tr>
							<td>시작일</td>
							<td>종료일</td>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td><input type="text" data="careerCompName" name="careerList[0].careerCompName" class="careerCompName"></td>
							<td><input type="text" data="careerEnterdate" name="careerList[0].careerEnterdate" class="careerEnterdate dateInput prevDate"></td>
							<td><input type="text" data="careerLeavedate" name="careerList[0].careerLeavedate" class="careerLeavedate dateInput laterDate"></td>
							<td><input type="text" data="careerSpot" name="careerList[0].careerSpot" class="careerSpot"></td>
							<td><input type="text" data="careerResponsib" name="careerList[0].careerResponsib" class="careerResponsib"></td>
						</tr>
					</tbody>
				</table>
				
				<div class="add-row-btn-pannel">
					<button type="button" class="add-row-btn addRowBtn" onclick="fnAddCareer()">+</button>
				</div>
				
			</div>
			
			<%-- 학력 / 자격증 --%>
			<div class="training-and-licen-pannel">
				<div class="training-table-pannel">
					<table class="training-table flexibleTable" tb="training" id="trainingTable">
						<thead>
							<tr>
								<td>
									교육명
								</td>
								<td>
									시작일
								</td>
								<td>
									종료일
								</td>
								<td>
									기관
								</td>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td><input type="text" data="trainingName" name="trainingList[0].trainingName" class="trainingName"></td>
								<td><input type="text" data="trainingStartdate" name="trainingList[0].trainingStartdate" class="trainingStartdate dateInput prevDate"></td>
								<td><input type="text" data="trainingEnddate" name="trainingList[0].trainingEnddate" class="trainingEnddate dateInput laterDate"></td>
								<td><input type="text" data="trainingAgency" name="trainingList[0].trainingAgency" class="trainingAgency"></td>
							</tr>
						</tbody>
					</table>
					
					<div class="add-row-btn-pannel">
						<button type="button" class="add-row-btn addRowBtn" onclick="fnAddTraining()">+</button>
					</div>
					
				</div>
				
				<div class="training-table-pannel">
					<table class="licen-table flexibleTable" tb="licen" id="licenTable">
						<thead>
							<tr>
								<td>
									보유기술 및 외국어능력
								</td>
								<td>
									숙련도<br>(A,B,C)
								</td>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td><input type="text" data="licenName" name="licenList[0].licenName" class="licenName"></td>
								<td><input type="text" data="licenSkillLevel" name="licenList[0].licenSkillLevel" class="licenSkillLevel"></td>
							</tr>
						</tbody>
					</table>
					
					<div class="add-row-btn-pannel">
						<button type="button" class="add-row-btn addRowBtn" onclick="fnAddLicen()">+</button>
					</div>
					
				</div>
			</div>
			
			<div class="clear-pannel"></div>
			
			<div class="skill-inventory-table-pannel">
				<table class="skill-inventory-table flexibleTable" tb="skill" id="skillTable">
					<thead>
						<tr>
							<td rowspan="2">프로젝트명<br>업무명</td>
							<td colspan="2">참여기간</td>
							<td rowspan="2">고객사</td>
							<td rowspan="2">근무회사</td>
							<td colspan="2">개발분야</td>
							<td rowspan="2">역할</td>
							<td colspan="7">개발환경</td>
						</tr>
						<tr>
							<td>시작일</td>
							<td>종료일</td>
							<td>산업</td>
							<td>응용</td>
							<td>기종</td>
							<td>O.S</td>
							<td>언어</td>
							<td>DBMS</td>
							<td>TOOL</td>
							<td>통신</td>
							<td>기타</td>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td><textarea data="skillProjectName" name="skillList[0].skillProjectName" class="skillProjectName"></textarea></td>
							<td><input type="text" data="skillStartdate" name="skillList[0].skillStartdate" class="skillStartdate dateInput prevDate"></td>
							<td><input type="text" data="skillEnddate" name="skillList[0].skillEnddate" class="skillEnddate dateInput laterDate"></td>
							<td><textarea data="skillCustomerComp" name="skillList[0].skillCustomerComp" class="skillCustomerComp"></textarea></td>
							<td><textarea data="skillWorkComp" name="skillList[0].skillWorkComp" class="skillWorkComp"></textarea></td>
							<td><textarea data="skillIndustry" name="skillList[0].skillIndustry" class="skillIndustry"></textarea></td>
							<td><textarea data="skillApplied" name="skillList[0].skillApplied" class="skillApplied"></textarea></td>
							<td><textarea data="skillRole" name="skillList[0].skillRole" class="skillRole"></textarea></td>
							<td><textarea data="skillModel" name="skillList[0].skillModel" class="skillModel"></textarea></td>
							<td><textarea data="skillOs" name="skillList[0].skillOs" class="skillOs"></textarea></td>
							<td><textarea data="skillLang" name="skillList[0].skillLang" class="skillLang"></textarea></td>
							<td><textarea data="skillDbms" name="skillList[0].skillDbms" class="skillDbms"></textarea></td>
							<td><textarea data="skillTool" name="skillList[0].skillTool" class="skillTool"></textarea></td>
							<td><textarea data="skillComm" name="skillList[0].skillComm" class="skillComm"></textarea></td>
							<td><textarea data="skillEtc" name="skillList[0].skillEtc" class="skillEtc"></textarea></td>
						</tr>
					</tbody>
				</table>
				
				<div class="add-row-btn-pannel">
					<button type="button" class="add-row-btn addRowBtn" onclick="fnAddSkill()">+</button>
				</div>
			</div>
		</form>
	</div>
	
	<div class="pop-user-register-pannel" id="drag-ele1"> 
		<form id="historyForm" name="historyForm">
			<input type="hidden" id="pageNo" name="pageNo" value="1">
		
			<!-- 검색창 패널 -->
			<div class="pop-user-search-pannel">
				
				<input type="hidden" id="userInfoTotalCnt">
				<input type="hidden" id="userInfoPageSize" value="10">
				<input type="hidden" id="userInfoPageNo" value="1">
				
				<select id="userListSearchPeriod" name="userListSearchPeriod">
					<option value="">검색조건</option>
					<option value="userName">이름</option>
					<option value="userComp">소속회사</option>
					<option value="userDept">부서</option>
				</select>
				
				<input type="text" id="userListSearchWord" name="userListSearchWord" onkeypress="if( event.keyCode == 13 ){fnHistoryListBtn('block');}">
				
				<select id="userCareerLength" name="userCareerLength">
					<option value="">경력사항</option>
					<option value="1">1년이상</option>
					<option value="2">2년이상</option>
					<option value="3">3년이상</option>
					<option value="4">4년이상</option>
					<option value="5">5년이상</option>
					<option value="6">6년이상</option>
					<option value="7">7년이상</option>
					<option value="8">8년이상</option>
					<option value="9">9년이상</option>
					<option value="10">10년이상</option>
				</select>
				
				<select id="userInfoDataSize" name="userInfoDataSize">
					<option value="10">10개씩</option>
					<option value="20">20개씩</option>
				</select>
				<select id="genderSelect">
					<option value="" selected="selected">선택없음</option>
					<option value="남성">남성</option>
					<option value="여성">여성</option>
				</select>
				<input type="hidden" id="userGender" name="userGender">
				<button type="button" id="userListSearchBtn" class="user-list-search-btn" onclick="fnHistoryListBtn('block', 'searchBtn')">검색</button>
				<div class="search-cnt-pannel">
					<span class="search-cnt-prev">검색결과 : <b id="hisCnt"></b></span>
					<span class="search-cnt-cnt"></span>
					<span class="search-cnt-later"> 건</span>
				</div>
				<div>
					<input type="text" class="dateInput" id="saveStartDate" name="saveStartDate" readonly> ~ 
					<input type="text" class="dateInput" id="saveEndDate" name="saveEndDate" readonly>
				</div>
				<!-- <button id="downloadExel">엑셀 다운로드</button> -->
				
			</div>		
			
			<!-- 불러오기 최소화 버튼 -->
			<div class="pop-user-top-btn-pannel minimizeUserPannelBtn" onclick="fnHistoryListBtn('none')">
				<div class="pop-user-minimize-btn">
				</div>
			</div>
			
			<div class="clear-pannel"></div>
			
			<div class="keyword-add-pannel">			
				<div class="keywordInputPannel keyword-input-pannel keyword-input-pannel-invisible">#<input maxlength="16" name="searchKeyword" onkeypress="if( event.keyCode == 13 ){fnHistoryListBtn('block');}"></div>
				<div class="pop-keyword-add-btn-pannel keywordAddPannelBtn tooltip">
					<div class="pop-user-keyword-add-btn keywordAddBtn" id="keywordAddBtn">
						+
					</div>
					<span class="tooltiptext">진행 했던 프로젝트의 개발환경을 키워드로 추가하여 조회</span>
				</div>
				<div style="float: right;">
					<button type="button" id="getUserCountByCareerDate" onclick="fnGroupInfo()">연차별 인원보기</button>
				</div>
			</div>
		</form>
		<div class="pop-register-list-pannel" id="historyListResult">
		
			<!-- <table class="pop-register-list">
				<thead>
					<tr>
						<td>등록번호</td>
						<td>성명</td>
						<td>소속회사</td>
						<td>부서</td>
						<td>성별</td>
						<td>경력</td>
						<td>등록날짜</td>
					</tr>
				</thead>
				<tbody>
				</tbody>
			</table>
			
			<div class="pop-paging-pannel">
			</div> -->
		</div>
	</div>
</body>
</html>
