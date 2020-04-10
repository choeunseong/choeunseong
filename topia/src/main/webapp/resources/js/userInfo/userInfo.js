/**
 * 
 */
// datepicker
$(function() {
	$(".dateInput").datepicker({
		showOtherMonths: true //빈 공간에 현재월의 앞뒤월의 날짜를 표시
        ,showMonthAfterYear:true //년도 먼저 나오고, 뒤에 월 표시
        ,changeYear: true //콤보박스에서 년 선택 가능
        ,changeMonth: true //콤보박스에서 월 선택 가능                              
        ,yearSuffix: "년" //달력의 년도 부분 뒤에 붙는 텍스트
        ,monthNamesShort: ['1','2','3','4','5','6','7','8','9','10','11','12'] //달력의 월 부분 텍스트
        ,monthNames: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'] //달력의 월 부분 Tooltip 텍스트
        ,dayNamesMin: ['일','월','화','수','목','금','토'] //달력의 요일 부분 텍스트
        ,dayNames: ['일요일','월요일','화요일','수요일','목요일','금요일','토요일'] //달력의 요일 부분 Tooltip 텍스트
		,dateFormat: 'yy-mm-dd' //Input Display Format 변경
	});
	
	$("#drag-ele1").draggable();
});

// 작성상태변경
function modeChange(gubun){
	
	if(gubun == "NEW"){	// 새 이력작성
		if(confirm("새 이력을 작성하시겠습니까?") == true){
			resetInput();	// 모든 입력 창 리셋
			$(".top-header-pannel").find("h5").text("※ 새 이력 작성");
			$("#userIdx").val("0");
			$("#status").val("new");
			$("#userSocialSecunum").prop("disabled",false);
			$(".user-info-list-pannel").css("background-color","#ebf2f1");
		}
	}
	/*else if(gubun == "UPDATE"){
		if(confirm("새 이력을 작성하시겠습니까?") == true){
			$topHeaderStatus.text("※ 등록번호 : " + userIdx + " (수정)");
			$userSocialSecunum.prop("disabled",true);
			$userInfoListPannel.css("background-color","#ebf2f1");
		}
	}*/
}

// 모든 입력 창 리셋
function resetInput(){
	var notElementId = "#userIdx, #userInfoTotalCnt, #userInfoDataSize, #userInfoPageSize, #userInfoPageNo, #personalZipcodeSearchBtn";
	var defaltId = "#careerCnt, #eduCnt, #licenCnt, #qualifiCnt, #skillCnt, #trainingCnt, #pageNo";
	$("input, select").not(notElementId).val("");
	$("textarea").not(notElementId).text("");
	
	$(defaltId).val("1");
	
	$(".flexibleTable").find("tbody").find("tr:not(:first-child)").remove();
	$(".flexibleTable").find(".dateInput").attr("id","").removeClass('hasDatepicker').datepicker();
	$("textarea").each(function(){resize($(this));}) // 새로 불러온 정보 textarea 리사이징
}

// 다음 주소검색 api
function execPostCode() {
	daum.postcode.load(function(){
	    new daum.Postcode({
	        oncomplete: function(data) {
	           // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.
	
	           // 도로명 주소의 노출 규칙에 따라 주소를 조합한다.
	           // 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
	           var fullRoadAddr = data.roadAddress; // 도로명 주소 변수
	           var extraRoadAddr = ''; // 도로명 조합형 주소 변수
	
	           // 법정동명이 있을 경우 추가한다. (법정리는 제외)
	           // 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다.
	           if(data.bname !== '' && /[동|로|가]$/g.test(data.bname)){
	               extraRoadAddr += data.bname;
	           }
	           // 건물명이 있고, 공동주택일 경우 추가한다.
	           if(data.buildingName !== '' && data.apartment === 'Y'){
	              extraRoadAddr += (extraRoadAddr !== '' ? ', ' + data.buildingName : data.buildingName);
	           }
	           // 도로명, 지번 조합형 주소가 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
	           if(extraRoadAddr !== ''){
	               extraRoadAddr = ' (' + extraRoadAddr + ')';
	           }
	           // 도로명, 지번 주소의 유무에 따라 해당 조합형 주소를 추가한다.
	           if(fullRoadAddr !== ''){
	               fullRoadAddr += extraRoadAddr;
	           }
	
	           // 우편번호와 주소 정보를 해당 필드에 넣는다.
	           console.log(data.zonecode);
	           console.log(fullRoadAddr);
	           
	           
	           $("#userZipcode").val(data.zonecode);
	           $("#userAddress").val(fullRoadAddr);
	           
	           /* document.getElementById('signUpUserPostNo').value = data.zonecode; //5자리 새우편번호 사용
	           document.getElementById('signUpUserCompanyAddress').value = fullRoadAddr;
	           document.getElementById('signUpUserCompanyAddressDetail').value = data.jibunAddress; */
	       }
	    }).open();
	});
}

// 불러오기 on/off
function fnHistoryListBtn(status, searchBtn){
	
	if(status == 'block'){	// 불러오기 버튼
		$("#userGender").val($("#genderSelect option:selected").val());
		if(searchBtn == "searchBtn"){
			$("#pageNo").val("1");	// 검색버튼을 누를 때 페이지 1페이지로 설정
			
			if($("#saveStartDate").val() != ""){
				if($("#saveStartDate").val() == $("#saveEndDate").val()){
					alert("동일한 일자는 검색되지 않습니다.\n다시 시도해주세요.");
					return;
				}
			}
		}
		
		var params = $("#historyForm").serialize();
//		alert($("#userCareerLength").val());
		$.ajax({ 
			type: 'POST' 
			, url: '/personalHistory/getHistoryInfo.do'
			, dataType : 'html'
			, data : params
			, success: function(data) { 
//				alert("완료");
				$("#historyListResult").html(data); 
				$("#hisCnt").text($("#historyCnt").val());
			},
			error : function(request, status, error){ //통신 에러시
				alert("code : " +request.status + "\r\nmessage : " + request.reponseText);
			}
			,beforeSend:function(){} //통신을 시작할때 처리
			,complete :function(){}  //통신을 완료한후 처리
		});
	}else if(status == 'none'){
		$("#pageNo").val("1");
		$("#userListSearchPeriod").val("");
		$("#userListSearchWord").val("");
		$("#userInfoDataSize").val("10");
		$("#genderSelect").val("");
		$("#saveStartDate").val("");
		$("#saveEndDate").val("");
		
		if($("#keywordAddBtn").hasClass("keywordMinBtn")){
			$("#keywordAddBtn").click();
		}
	}
	
	$("#drag-ele1").css("display", status);
}

// 연차별 인원정보보기
function fnSkillCareerList(careerDate){
	
	$.ajax({ 
		type: 'POST' 
		, url: '/personalHistory/getSkillCareerInfo.do'
		, dataType : 'html'
		, data : {careerDate : careerDate
				 ,pageNo : $("#pageNo").val()}
		, success: function(data) { 
//			alert("완료");
			$("#pageNo").val("1");
			$("#historyListResult").html(data); 
			$("#hisCnt").text($("#historyCnt").val());
		},
		error : function(request, status, error){ //통신 에러시
			alert("code : " +request.status + "\r\nmessage : " + request.reponseText);
		}
		,beforeSend:function(){} //통신을 시작할때 처리
		,complete :function(){}  //통신을 완료한후 처리
	});
}

// 페이징 번호주기
function fnPage(pageNo){
	$("#pageNo").val(pageNo);
	
	if($("#historyGubun").val() == "history"){	// 그냥 불러오기 일 때 조회
		fnHistoryListBtn('block');
	}else if($("#historyGubun").val() == "skillCareer"){
		fnSkillCareerList($("#c_date").val());
	}
		
}

// 이력카드 저장
function cardSave(){
	var check = regexAndEmptyCheck();	// 유효성검사
//	var inputCheck = fnEmptyInput();	// 비어있는 행추가 입력창이 있는지 검사
	
	if(check == true){	// 유효성검사 완료일 때
		var url = "/personalHistory/cardInsert.do";
		var msg = "저장";
		
		if($("#status").val() == "update"){
			url = "/personalHistory/cardUpdate.do";
			msg = "수정";
		}
		
		if($("#emailDomain option:selected").val() != ""){	// 이메일 선택이 직접입력이 아닐때 작성한 이메일 아이디와 도메인 합쳐서 hidden값에 이메일 넣어줌
			$("#resultEmail").val($("#userEmail").val() + $("#emailDomain option:selected").val());
		}else if($("#emailDomain option:selected").val() == ""){	// 이메일 선택이 직접입력일때 작성한 이메일만 hidden값에 넣어줌
			$("#resultEmail").val($("#userEmail").val());
		}
		
		var params = $("#userInfoForm").serialize();
		
		if(confirm(msg + " 하시겠습니까?") == true){
			$.ajax({ 
				type: 'POST' 
				, url: url
				, dataType : 'json'
				, data : params
				, success: function(data) { 
	//				alert("완료");
	//				$("#historyListResult").html(data); 
					if(data.result == "already"){
						alert("이미 등록되어진 정보입니다.\n저장된 이력카드를 수정해주세요.");
						return;
					}else if(data.result == "success"){
						alert("이력이 " + msg + "되었습니다.");
						if($("#status").val() == "new"){
							location.href = "/card/cardInput.do";
						}else if($("#status").val() == "update"){
							return;
						}
					}else if(data.result == "fail"){
						alert("이력 " + msg + "에 실패하였습니다. 다시시도해주세요");
						return;
					}
				},
				error : function(request, status, error){ //통신 에러시
					alert("code : " +request.status + "\r\nmessage : " + request.reponseText);
				}
				,beforeSend:function(){} //통신을 시작할때 처리
				,complete :function(){}  //통신을 완료한후 처리
			});
		}
		
	}
}

/*// 비어있는 행추가 입력창이 있는지 검사
function fnEmptyInput(){
	var notElementId = "#userIdx, #userInfoTotalCnt, #userInfoDataSize, #userInfoPageSize, #userInfoPageNo, #personalZipcodeSearchBtn";
	var defaltId = "#careerCnt, #eduCnt, #licenCnt, #qualifiCnt, #skillCnt, #trainingCnt, #pageNo";
	$("input, select").not(notElementId).val("");
	$("textarea").not(notElementId).text("");
	
	$(defaltId).val("1");
	
	$(".flexibleTable").find("tbody").find("tr:not(:first-child)").remove();
	$(".flexibleTable").find(".dateInput").attr("id","").removeClass('hasDatepicker').datepicker();
	$("textarea").each(function(){
		if($(this).val() == "" || $(this).val() == null){
			return false;
		}
	}) // 새로 불러온 정보 textarea 리사이징
}*/

// 저장 할 때 유효성 검사
function regexAndEmptyCheck(){
	var val;
	var $obj;
	var regExp;
	var regResult;
	
	var isNew = $("#userIdx").val() == ""?true:false;	// userIdx가 있을 때(false)는 수정이고, 없을때(true)는 새 이력작성모드
	
	// 이름
	$obj = $("#userName");
	val = $obj.val().trim();
	if (val == "") {
		if(!alert("이름은 필수 입력 사항입니다.")) $obj.focus();
		return false;
	};
	
	// 주민등록번호
	if(isNew){ // 새 이력 작성인경우 주민등록번호 유효성 검사
		
		$obj = $("#userSocialSecunum");
		val = $obj.val().trim();
		regExp = new RegExp("^\\d{2}(0[1-9]|1[0-2])(0[1-9]|[12][0-9]|[3][01])\\-?[1-4][0-9]{6}$");
		if (val == ""){
			if(!alert("주민등록번호는 필수 입력 사항입니다.")) $obj.focus();
			return false;
		};
		regResult = regExp.test(val);
		if(!regResult){
			if(!alert("잘못 된 주민등록번호 입니다.")) $obj.focus();
			return false;
		}
				
	}
	
	// 휴대전화번호
	$obj = $("#userTelnumWireless");
	val = $obj.val().trim();
	regExp = /^\d{3}-\d{3,4}-\d{4}$/;
	regResult = regExp.test(val);
	if(!regResult && !isEmpty(val)){
		if(!alert("잘못 된 휴대전화번호 입니다.")) $obj.focus();
		return false;
	}
	
	// 유선전화번호
	$obj = $("#userTelnumWired");
	val = $obj.val().trim();
	regExp = /^\d{2,3}-\d{3,4}-\d{4}$/;
	regResult = regExp.test(val);
	if(!regResult && !isEmpty(val)){
		if(!alert("잘못 된 전화번호 입니다.")) $obj.focus();
		return false;
	}
	
	//이미지
	var inputFile = $("input[name='file']");
	var file = inputFile[0].files
	var fileSize = '';
	if(!isEmpty(file[0])){
		
		fileSize=file[0].size;
		var fileName = inputFile.val()
		var extension = fileName.substr(fileName.lastIndexOf("."),fileName.length)
		if(file[0]==null){
			alert("사진은 필수 입니다.")
			return false;
		}
		
		if(!checkExtension(extension,fileSize)){
			return false;
		}
		
	}else{
		return true;
	}
	// 이메일
	var domain = $("#emailDomain").val();
	if(domain=='직접입력'){
		alert("직접입력")
		$obj = $("#userEmail")
		val = $obj.val().trim();
		regExp = /^[0-9a-zA-Z]$/;
		regResult = regExp.test(val);
		if(!regResult && !isEmpty(val)){
			if(!alert("잘못 된 이메일 입니다.")) $obj.focus();
			return false;
		}
		$obj = $("#userDomain1")
		val = $obj.val().trim();
		regExp = /^@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
		regResult = regExp.test(val);
		if(!regResult && !isEmpty(val)){
			if(!alert("잘못 된 이메일 입니다.")) $obj.focus();
			return false;
		}
	}else{
		alert("직접입력아님")
		$obj = $("#userEmail");
		val = $obj.val().trim();
		regExp = /^[0-9a-zA-Z]$/;
		regResult = regExp.test(val);
		if(!regResult && !isEmpty(val)){
			if(!alert("잘못 된 이메일 입니다.")) $obj.focus();
			return false;
		}
	}
	
	return true;
}

// 불러오기 행 클릭(상세보기)
function fnDetailRow(userIdx){
	if(confirm("해당정보를 가져오시겠습니까?") == true){
//		$("#status").val("update");
		$(".top-header-pannel").find("h5").text("※ 등록번호 : " + userIdx + "(수정)");
		
		$.ajax({ 
			type: 'POST' 
			, url: '/personalHistory/getHistoryInfoDetail.do'
			, dataType: 'json'
			, data : {userIdx : userIdx}
			, success: function(data) {
				resetInput()	// 모든 입력창 리셋
				$("#pageNo").val("1");
				
				fnInfoInput(data.userInfo);			// 기본정보 이력카드에 넣기
				fnEduInput(data.eduList);			// 학력정보 이력카드에 넣기
				fnQualifiInput(data.qualifiList);	// 자격증정보 이력카드에 넣기
				fnCareerInput(data.careerList);		// 경력정보 이력카드에 넣기
				fnTrainingInput(data.trainingList);	// 교육정보 이력카드에 넣기
				fnLicenInput(data.licenList);		// 보유기술/외국어 정보 이력카드에 넣기
				fnSkillInput(data.skillList);		// 프로젝트정보 이력카드에 넣기
			},
			error : function(request, status, error){ //통신 에러시
				alert("code : " +request.status + "\r\nmessage : " + request.reponseText);
			}
			,beforeSend:function(){} //통신을 시작할때 처리
			,complete :function(){
				
			}  //통신을 완료한후 처리
		});
	}
}

//상세보기 후 input에 기본정보넣기
function fnInfoInput(userInfo){
	$("#status").val("update");
	$("#userIdx").val(userInfo.userIdx);
	$("#userSocialSecunum").prop("disabled", true);
	
	if(userInfo.userEmail != ''){
		var email_domain = userInfo.userEmail.split("@");
		var email = email_domain[0];
		var domain = "@" + email_domain[1];
		
		$("#userEmail").val(email);
		$("#emailDomain").val(domain);
		
		if($("#emailDomain").val() == null){
			$("#userEmail").val(userInfo.userEmail);
			$("#emailDomain").val("");
		}
	}
	
//	var compEnterDate = userInfo.userCompEnterdate.split(" ")[0];
//	var ArmyServEnterDate = userInfo.userArmyServEnter.split(" ")[0];
//	var ArmyServLeaveDate = userInfo.userArmyServLeave.split(" ")[0];
	
	$("#userName").val(userInfo.userName);
	$("#userSocialSecunum").val(userInfo.userSocialSecunum);
	$("#userSex").val(userInfo.userSex);
	$("#userComp").val(userInfo.userComp);
	$("#userCompEnterdate").val(userInfo.userCompEnterdate);
	$("#userDept").val(userInfo.userDept);
	$("#userSpot").val(userInfo.userSpot);
	$("#userArmyServ").val(userInfo.userArmyServ);
	$("#userMaritalStatus").val(userInfo.userMaritalStatus);
	$("#userArmyServEnter").val(userInfo.userArmyServEnter);
	$("#userArmyServLeave").val(userInfo.userArmyServLeave);
	$("#userArmyServPeriod").val(userInfo.userArmyServPeriod);
	$("#userTelnumWireless").val(userInfo.userTelnumWireless);
	$("#userTelnumWired").val(userInfo.userTelnumWired);

	$("#userZipcode").val(userInfo.userZipcode);
	$("#userAddress").val(userInfo.userAddress);
}

// 상세보기 후 프로젝트경력정보 넣기
function fnSkillInput(skillList){
	var skillTable = $("#skillTable");
	if(isEmpty(skillList) == true){	// 배열이 빈값일 때 check
		fnDatePicker(skillTable);
		return;
	}
	
	$("#skillCnt").val(skillList.length);		// 교육 리스트 갯수만큼 career hidden값 넣기
	var html = "";
	
	for(var i = 0; i < skillList.length; i++){
		html += '<tr>' +
					'<td><textarea data="skillProjectName" name="skillList[' + i + '].skillProjectName" class="skillProjectName">' + skillList[i].skillProjectName + '</textarea></td>' +
					'<td><input type="text" data="skillStartdate" name="skillList[' + i + '].skillStartdate" class="skillStartdate dateInput prevDate" value="' + skillList[i].skillStartdate + '"></td>' +
					'<td><input type="text" data="skillEnddate" name="skillList[' + i + '].skillEnddate" class="skillEnddate dateInput laterDate" value="' + skillList[i].skillEnddate + '"></td>' +
					'<td><textarea data="skillCustomerComp" name="skillList[' + i + '].skillCustomerComp" class="skillCustomerComp">' + skillList[i].skillCustomerComp + '</textarea></td>' +
					'<td><textarea data="skillWorkComp" name="skillList[' + i + '].skillWorkComp" class="skillWorkComp">' + skillList[i].skillWorkComp + '</textarea></td>' +
					'<td><textarea data="skillIndustry" name="skillList[' + i + '].skillIndustry" class="skillIndustry">' + skillList[i].skillIndustry + '</textarea></td>' +
					'<td><textarea data="skillApplied" name="skillList[' + i + '].skillApplied" class="skillApplied">' + skillList[i].skillApplied + '</textarea></td>' +
					'<td><textarea data="skillRole" name="skillList[' + i + '].skillRole" class="skillRole">' + skillList[i].skillRole + '</textarea></td>' +
					'<td><textarea data="skillModel" name="skillList[' + i + '].skillModel" class="skillModel">' + skillList[i].skillModel + '</textarea></td>' +
					'<td><textarea data="skillOs" name="skillList[' + i + '].skillOs" class="skillOs">' + skillList[i].skillOs + '</textarea></td>' +
					'<td><textarea data="skillLang" name="skillList[' + i + '].skillLang" class="skillLang">' + skillList[i].skillLang + '</textarea></td>' +
					'<td><textarea data="skillDbms" name="skillList[' + i + '].skillDbms" class="skillDbms">' + skillList[i].skillDbms + '</textarea></td>' +
					'<td><textarea data="skillTool" name="skillList[' + i + '].skillTool" class="skillTool">' + skillList[i].skillTool + '</textarea></td>' +
					'<td><textarea data="skillComm" name="skillList[' + i + '].skillComm" class="skillComm">' + skillList[i].skillComm + '</textarea></td>' +
					'<td><textarea data="skillEtc" name="skillList[' + i + '].skillEtc" class="skillEtc">' + skillList[i].skillEtc + '</textarea></td>' +
					'<td style="display:none;" class="removeTrBtn"><button type="button" id="skillBtn' + i + '"  class="skill">-</button></td>' +
				'</tr>';
		
	}
	
	skillTable.find("tbody").html(html);
	fnDatePicker(skillTable);
	flexibleTableTrEve(); // 추가된 삭제버튼에 이벤트 할당
	$("#skillBtn0").parent().remove();	// 상세보기 정보 넣은 후 첫번째 행의 -버튼 지우기
	
	skillTable.find("tbody").find("input").each(function(){	// value값에 null로 들어간것들 빈값으로 초기화
		if($(this).val() == "null"){
			$(this).val("");
		}
	});
	skillTable.find("tbody").find("textarea").each(function(){	// value값에 null로 들어간것들 빈값으로 초기화
		if($(this).val() == "null"){
			$(this).val("");
		}
	});
}

// 상세보기 후 보유기술,외국어능력 정보 넣기
function fnLicenInput(licenList){
	if(isEmpty(licenList) == true){	// 배열이 빈값일 때 check
		return;
	}
	
	$("#licenCnt").val(licenList.length);		// 교육 리스트 갯수만큼 career hidden값 넣기
	var licenTable = $("#licenTable");
	var html = "";
	
	for(var i = 0; i < licenList.length; i++){
		html += '<tr>' +
					'<td><input type="text" data="licenName" name="licenList[' + i + '].licenName" class="licenName" value="' + licenList[i].licenName + '"></td>' +
					'<td><input type="text" data="licenSkillLevel" name="licenList[' + i + '].licenSkillLevel" class="licenSkillLevel" value="' + licenList[i].licenSkillLevel + '"></td>' +
					'<td style="display:none;" class="removeTrBtn"><button type="button" id="licenBtn' + i + '"  class="licen">-</button></td>' +
				'</tr>';
		
	}
	
	licenTable.find("tbody").html(html);
	flexibleTableTrEve(); // 추가된 삭제버튼에 이벤트 할당
	$("#licenBtn0").parent().remove();	// 상세보기 정보 넣은 후 첫번째 행의 -버튼 지우기
}

// 상세보기 후 교육정보 넣기
function fnTrainingInput(trainingList){
	var trainingTable = $("#trainingTable");
	
	if(isEmpty(trainingList) == true){	// 배열이 빈값일 때 check
		fnDatePicker(trainingTable);
		return;
	}
	
	$("#trainingCnt").val(trainingList.length);		// 교육 리스트 갯수만큼 career hidden값 넣기
	var html = "";
	
	for(var i = 0; i < trainingList.length; i++){
		html += '<tr>' +
					'<td><input type="text" data="trainingName" name="trainingList[' + i + '].trainingName" class="trainingName" value="' + trainingList[i].trainingName + '"></td>' +
					'<td><input type="text" data="trainingStartdate" name="trainingList[' + i + '].trainingStartdate" class="trainingStartdate dateInput prevDate" value="' + trainingList[i].trainingStartdate + '"></td>' +
					'<td><input type="text" data="trainingEnddate" name="trainingList[' + i + '].trainingEnddate" class="trainingEnddate dateInput laterDate" value="' + trainingList[i].trainingEnddate + '"></td>' +
					'<td><input type="text" data="trainingAgency" name="trainingList[' + i + '].trainingAgency" class="trainingAgency" value="' + trainingList[i].trainingAgency + '"></td>' +
					'<td style="display:none;" class="removeTrBtn"><button type="button" id="trainingBtn' + i + '"  class="training">-</button></td>' +
				'</tr>';
	}
	
	trainingTable.find("tbody").html(html);
	fnDatePicker(trainingTable);
	flexibleTableTrEve(); // 추가된 삭제버튼에 이벤트 할당
	
	$("#trainingBtn0").parent().remove();	// 상세보기 정보 넣은 후 첫번째 행의 -버튼 지우기
	
	trainingTable.find("tbody").find("input").each(function(){	// value값에 null로 들어간것들 빈값으로 초기화
		if($(this).val() == "null"){
			$(this).val("");
		}
	});
}

// 상세보기 후 자격증정보 넣기
function fnQualifiInput(qualifiList){
	var qualifiTable = $("#qualifiTable");
	
	if(isEmpty(qualifiList) == true){	// 배열이 빈값일 때 check
		fnDatePicker(qualifiTable);
		return;
	}

	$("#qualifiCnt").val(qualifiList.length);		// 자격증 리스트 갯수만큼 career hidden값 넣기
	var html = "";
	
	for(var i = 0; i < qualifiList.length; i++){
		
		html += '<tr>' +
					'<td><input type="text" data="qualifiName" name="qualifiList[' + i + '].qualifiName" class="qualifiName" value="' + qualifiList[i].qualifiName + '"></td>' +
					'<td><input type="text" data="qualifiGetdate" name="qualifiList[' + i + '].qualifiGetdate" class="qualifiGetdate dateInput" value="' + qualifiList[i].qualifiGetdate + '"></td>' +
					'<td style="display:none;" class="removeTrBtn"><button type="button" id="qualifiBtn' + i + '"  class="qualifi">-</button></td>' +
				'</tr>';
		
	}
	
	qualifiTable.find("tbody").html(html);
	fnDatePicker(qualifiTable);
	flexibleTableTrEve(); // 추가된 삭제버튼에 이벤트 할당
	$("#qualifiBtn0").parent().remove();	// 상세보기 정보 넣은 후 첫번째 행의 -버튼 지우기
	
	qualifiTable.find("tbody").find("input").each(function(){	// value값에 null로 들어간것들 빈값으로 초기화
		if($(this).val() == "null"){
			$(this).val("");
		}
	});

}

// 상세보기 후 학력정보넣기
function fnEduInput(eduList){
	if(isEmpty(eduList) == true){	// 배열이 빈값일 때 check
		return;
	}
	
	$("#eduCnt").val(eduList.length);		// 경력 리스트 갯수만큼 career hidden값 넣기
	var eduTable = $("#eduTable");
	var html = "";
	
	for(var i = 0; i < eduList.length; i++){
		html += '<tr>' +
					'<td><input type="text" data="eduSchoolName" name="eduList[' + i + '].eduSchoolName" class="eduSchoolName" value="' + eduList[i].eduSchoolName + '"></td>' +
					'<td>' +
						'<select data="eduStatus" name="eduList[' + i + '].eduStatus" class="eduStatus">' +
							'<option value="">선택없음</option>' +
							'<option value="입학">입학</option>' +
							'<option value="재학">재학</option>' +
							'<option value="졸업">졸업</option>' +
							'<option value="졸업예정">졸업예정</option>' +
						'</select>' +
					'</td>' +
					'<td><input type="text" data="eduYear" name="eduList[' + i + '].eduYear" placeholder="" class="eduYear" value="' + eduList[i].eduYear + '"></td>' +
					'<td>년</td>' +
					'<td><input type="text" data="eduMonth" name="eduList[' + i + '].eduMonth" placeholder="" class="eduMonth" value="' + eduList[i].eduMonth + '"></td>' +
					'<td>월</td>' +
					'<td style="display:none;" class="removeTrBtn"><button type="button" id="eduBtn' + i + '"  class="edu">-</button></td>' +
				'</tr>';
		
	}
	
	eduTable.find("tbody").html(html);
	flexibleTableTrEve(); // 추가된 삭제버튼에 이벤트 할당
	$("#eduBtn0").parent().remove();	// 상세보기 정보 넣은 후 첫번째 행의 -버튼 지우기
	
	for(var i = 0; i < eduList.length; i++){	// 이 for문은 위의 for문에서 학력 정보를 넣은 후 select박스 옵션을 설정해주기 위한 for문
		$('select[name="eduList[' + i + '].eduStatus"]').val(eduList[i].eduStatus).prop("selected", true);
	}
	
	eduTable.find("tbody").find("input").each(function(){	// value값에 null로 들어간것들 빈값으로 초기화
		if($(this).val() == "null"){
			$(this).val("");
		}
	});
}

// 상세보기 후  경력정보넣기
function fnCareerInput(careerList){
	var careerTable = $("#careerTable");
	
	if(isEmpty(careerList) == true){	// 배열이 빈값일 때 check
		fnDatePicker(careerTable);
		return;
	}
	
	$("#careerCnt").val(careerList.length);		// 경력 리스트 갯수만큼 career hidden값 넣기
	var html = "";
	
	for(var i = 0; i < careerList.length; i++){
//		alert(careerList[i].careerCompName);
		html += '<tr>' +
					'<td><input type="text" data="careerCompName" name="careerList[' + i + '].careerCompName" class="careerCompName" value="' + careerList[i].careerCompName + '"></td>' +
					'<td><input type="text" data="careerEnterdate" name="careerList[' + i + '].careerEnterdate" class="careerEnterdate dateInput prevDate hasDatepicker" value="' + careerList[i].careerEnterdate + '"></td>' +
					'<td><input type="text" data="careerLeavedate" name="careerList[' + i + '].careerLeavedate" class="careerLeavedate dateInput laterDate hasDatepicker" value="' + careerList[i].careerEnterdate + '"></td>' +
					'<td><input type="text" data="careerSpot" name="careerList[' + i + '].careerSpot" class="careerSpot" value="' + careerList[i].careerSpot + '"></td>' +
					'<td><input type="text" data="careerResponsib" name="careerList[' + i + '].careerResponsib" class="careerResponsib" value="' + careerList[i].careerSpot + '"></td>' +
					'<td style="display:none;" class="removeTrBtn"><button type="button" id="careerBtn' + i + '"  class="career">-</button></td>' +
				'</tr>';
			
	}
	
	careerTable.find("tbody").html(html);
	fnDatePicker(careerTable);
	
	$("#careerBtn0").parent().remove();	// 상세보기 정보 넣은 후 첫번째 행의 -버튼 지우기
	careerTable.find("tbody").find("input").each(function(){	// value값에 null로 들어간것들 빈값으로 초기화
		if($(this).val() == "null"){
			$(this).val("");
		}
	});
}

// 연차별 인원보기
function fnGroupInfo(){
	$.ajax({ 
		type: 'POST' 
		, url: '/personalHistory/getGroupInfo.do'
		, dataType: 'html'
		, data : {}
		, success: function(data) {
			$("#historyListResult").html(data);
		},
		error : function(request, status, error){ //통신 에러시
			alert("code : " +request.status + "\r\nmessage : " + request.reponseText);
		}
		,beforeSend:function(){} //통신을 시작할때 처리
		,complete :function(){
			
		}  //통신을 완료한후 처리
	});
}

// 테이블 안의 데이트피커 재정의
function fnDatePicker(obj){
	obj.find("tr").find(".dateInput").attr("id","").removeClass('hasDatepicker').datepicker({
		showOtherMonths: true //빈 공간에 현재월의 앞뒤월의 날짜를 표시
		,showMonthAfterYear:true //년도 먼저 나오고, 뒤에 월 표시
		,changeYear: true //콤보박스에서 년 선택 가능
		,changeMonth: true //콤보박스에서 월 선택 가능                              
		,yearSuffix: "년" //달력의 년도 부분 뒤에 붙는 텍스트
			,monthNamesShort: ['1','2','3','4','5','6','7','8','9','10','11','12'] //달력의 월 부분 텍스트
	,monthNames: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'] //달력의 월 부분 Tooltip 텍스트
	,dayNamesMin: ['일','월','화','수','목','금','토'] //달력의 요일 부분 텍스트
	,dayNames: ['일요일','월요일','화요일','수요일','목요일','금요일','토요일'] //달력의 요일 부분 Tooltip 텍스트
	,dateFormat: 'yy-mm-dd' //Input Display Format 변경
	}); 	// datepicker 재정의
}









