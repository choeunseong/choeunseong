// 학력 행추가
function fnAddEdu(){
	var eduCnt = $("#eduCnt").val();
	var addCnt = parseInt(eduCnt) + 1;
	var eduTable = $("#eduTable");
	var html = "";
	
	$("#eduCnt").val(addCnt)
	
	html = '<tr>' +
				'<td><input type="text" data="eduSchoolName" name="eduList[' + eduCnt + '].eduSchoolName" class="eduSchoolName"></td>' +
				'<td>' +
					'<select data="eduStatus" name="eduList[' + eduCnt + '].eduStatus" class="eduStatus">' +
						'<option value="">선택없음</option>' +
						'<option value="입학">입학</option>' +
						'<option value="재학">재학</option>' +
						'<option value="졸업">졸업</option>' +
						'<option value="졸업예정">졸업예정</option>' +
					'</select>' +
				'</td>' +
				'<td><input type="text" data="eduYear" name="eduList[' + eduCnt + '].eduYear" placeholder="" class="eduYear"></td>' +
				'<td>년</td>' +
				'<td><input type="text" data="eduMonth" name="eduList[' + eduCnt + '].eduMonth" placeholder="" class="eduMonth"></td>' +
				'<td>월</td>' +
				'<td style="display:none;" class="removeTrBtn"><button type="button"  class="edu">-</button></td>' +
			'</tr>';
	
	eduTable.find("tbody").append(html);
	flexibleTableTrEve(); // 추가된 삭제버튼에 이벤트 할당
} 

// 자격증 행추가
function fnAddQualifi(){
	var qualifiCnt = $("#qualifiCnt").val();
	var addCnt = parseInt(qualifiCnt) + 1;
	var qualifiTable = $("#qualifiTable");
	var html = "";
	
	$("#qualifiCnt").val(addCnt)
	
	html = '<tr>' +
				'<td><input type="text" data="qualifiName" name="qualifiList[' + qualifiCnt + '].qualifiName" class="qualifiName"></td>' +
				'<td><input type="text" data="qualifiGetdate" name="qualifiList[' + qualifiCnt + '].qualifiGetdate" class="qualifiGetdate dateInput"></td>' +
				'<td style="display:none;" class="removeTrBtn"><button type="button"  class="qualifi">-</button></td>' +
			'</tr>';
	
	qualifiTable.find("tbody").append(html);
	flexibleTableTrEve(); // 추가된 삭제버튼에 이벤트 할당
	qualifiTable.find("tr").find(".dateInput").attr("id","").removeClass('hasDatepicker').datepicker({
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
	});	// datepicker 재정의
}

// 경력 행추가
function fnAddCareer(){
	var careerCnt = $("#careerCnt").val();
	var addCnt = parseInt(careerCnt) + 1;
	var careerTable = $("#careerTable");
	var html = "";
	
	$("#careerCnt").val(addCnt)
	
	html = '<tr>' +
				'<td><input type="text" data="careerCompName" name="careerList[' + careerCnt + '].careerCompName" class="careerCompName"></td>' +
				'<td><input type="text" data="careerEnterdate" name="careerList[' + careerCnt + '].careerEnterdate" class="careerEnterdate dateInput prevDate hasDatepicker"></td>' +
				'<td><input type="text" data="careerLeavedate" name="careerList[' + careerCnt + '].careerLeavedate" class="careerLeavedate dateInput laterDate hasDatepicker"></td>' +
				'<td><input type="text" data="careerSpot" name="careerList[' + careerCnt + '].careerSpot" class="careerSpot"></td>' +
				'<td><input type="text" data="careerResponsib" name="careerList[' + careerCnt + '].careerResponsib" class="careerResponsib"></td>' +
				'<td style="display:none;" class="removeTrBtn"><button type="button"  class="career">-</button></td>' +
			'</tr>';
	
	careerTable.find("tbody").append(html);
	flexibleTableTrEve(); // 추가된 삭제버튼에 이벤트 할당
	careerTable.find("tr").find(".dateInput").attr("id","").removeClass('hasDatepicker').datepicker({
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

// 교육 행추가
function fnAddTraining(){
	var trainingCnt = $("#trainingCnt").val();
	var addCnt = parseInt(trainingCnt) + 1;
	var trainingTable = $("#trainingTable");
	var html = "";
	
	$("#trainingCnt").val(addCnt)
	
	html = '<tr>' +
				'<td><input type="text" data="trainingName" name="trainingList[' + trainingCnt + '].trainingName" class="trainingName"></td>' +
				'<td><input type="text" data="trainingStartdate" name="trainingList[' + trainingCnt + '].trainingStartdate" class="trainingStartdate dateInput prevDate"></td>' +
				'<td><input type="text" data="trainingEnddate" name="trainingList[' + trainingCnt + '].trainingEnddate" class="trainingEnddate dateInput laterDate"></td>' +
				'<td><input type="text" data="trainingAgency" name="trainingList[' + trainingCnt + '].trainingAgency" class="trainingAgency"></td>' +
				'<td style="display:none;" class="removeTrBtn"><button type="button"  class="training">-</button></td>' +
			'</tr>';
	
	trainingTable.find("tbody").append(html);
	flexibleTableTrEve(); // 추가된 삭제버튼에 이벤트 할당
	trainingTable.find("tr").find(".dateInput").attr("id","").removeClass('hasDatepicker').datepicker({
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

// 보유기술/언어능력 행추가
function fnAddLicen(){
	var licenCnt = $("#licenCnt").val();
	var addCnt = parseInt(licenCnt) + 1;
	var licenTable = $("#licenTable");
	var html = "";
	
	$("#licenCnt").val(addCnt)
	
	html = '<tr>' +
				'<td><input type="text" data="licenName" name="licenList[' + licenCnt + '].licenName" class="licenName"></td>' +
				'<td><input type="text" data="licenSkillLevel" name="licenList[' + licenCnt + '].licenSkillLevel" class="licenSkillLevel"></td>' +
				'<td style="display:none;" class="removeTrBtn"><button type="button"  class="licen">-</button></td>' +
			'</tr>';
	 
	licenTable.find("tbody").append(html);
	flexibleTableTrEve(); // 추가된 삭제버튼에 이벤트 할당
}

// 보유기술/언어능력 행추가
function fnAddSkill(){
	var skillCnt = $("#skillCnt").val();
	var addCnt = parseInt(skillCnt) + 1;
	var skillTable = $("#skillTable");
	var html = "";
	
	$("#skillCnt").val(addCnt)
	
	html = '<tr>' +
				'<td><textarea data="skillProjectName" name="skillList[' + skillCnt + '].skillProjectName" class="skillProjectName"></textarea></td>' +
				'<td><input type="text" data="skillStartdate" name="skillList[' + skillCnt + '].skillStartdate" class="skillStartdate dateInput prevDate"></td>' +
				'<td><input type="text" data="skillEnddate" name="skillList[' + skillCnt + '].skillEnddate" class="skillEnddate dateInput laterDate"></td>' +
				'<td><textarea data="skillCustomerComp" name="skillList[' + skillCnt + '].skillCustomerComp" class="skillCustomerComp"></textarea></td>' +
				'<td><textarea data="skillWorkComp" name="skillList[' + skillCnt + '].skillWorkComp" class="skillWorkComp"></textarea></td>' +
				'<td><textarea data="skillIndustry" name="skillList[' + skillCnt + '].skillIndustry" class="skillIndustry"></textarea></td>' +
				'<td><textarea data="skillApplied" name="skillList[' + skillCnt + '].skillApplied" class="skillApplied"></textarea></td>' +
				'<td><textarea data="skillRole" name="skillList[' + skillCnt + '].skillRole" class="skillRole"></textarea></td>' +
				'<td><textarea data="skillModel" name="skillList[' + skillCnt + '].skillModel" class="skillModel"></textarea></td>' +
				'<td><textarea data="skillOs" name="skillList[' + skillCnt + '].skillOs" class="skillOs"></textarea></td>' +
				'<td><textarea data="skillLang" name="skillList[' + skillCnt + '].skillLang" class="skillLang"></textarea></td>' +
				'<td><textarea data="skillDbms" name="skillList[' + skillCnt + '].skillDbms" class="skillDbms"></textarea></td>' +
				'<td><textarea data="skillTool" name="skillList[' + skillCnt + '].skillTool" class="skillTool"></textarea></td>' +
				'<td><textarea data="skillComm" name="skillList[' + skillCnt + '].skillComm" class="skillComm"></textarea></td>' +
				'<td><textarea data="skillEtc" name="skillList[' + skillCnt + '].skillEtc" class="skillEtc"></textarea></td>' +
				'<td style="display:none;" class="removeTrBtn"><button type="button"  class="skill">-</button></td>' +
			'</tr>';  
	
	skillTable.find("tbody").append(html);
	flexibleTableTrEve(); // 추가된 삭제버튼에 이벤트 할당
	skillTable.find("tr").find(".dateInput").attr("id","").removeClass('hasDatepicker').datepicker({
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

// 행 삭제버튼 이벤트 추가와 클릭 이벤트
function flexibleTableTrEve(){
/*	$(".removeTrBtn").unbind().click(function(){
		
		var $btnSelf = $(this);
		var $parentTr = $btnSelf.parent().parent();
		var $parentTbody = $parentTr.parent();
//		console.log($parentTr);
		$parentTr.remove();
		
	});*/
	
	// 여기는 행 삭제버튼 클릭이벤트
	$(".edu").unbind().click(function(){
		
		var $btnSelf = $(this); 
		var $parentTr = $btnSelf.parent().parent();
		var $parentTbody = $parentTr.parent();
		
		var eduCnt = $("#eduCnt").val();
		var minCnt = parseInt(eduCnt) - 1;
		$("#eduCnt").val(minCnt);
		
		$parentTr.remove();
		
		var i = 0;
		
		$('input[data="eduSchoolName"]').each(function () { 
			$(this).attr('name', 'eduList[' + i + '].eduSchoolName'); 
			if(i != eduCnt-1){
				i++;
			}
		});
		i=0;
		$('select[data="eduStatus"]').each(function () { 
			$(this).attr('name', 'eduList[' + i + '].eduStatus'); 
			if(i != eduCnt-1){
				i++;
			}
		});
		i=0;
		$('input[data="eduYear"]').each(function () { 
			$(this).attr('name', 'eduList[' + i + '].eduYear'); 
			if(i != eduCnt-1){
				i++;
			}
		});
		i=0;
		$('input[data="eduMonth"]').each(function () { 
			$(this).attr('name', 'eduList[' + i + '].eduMonth'); 
			if(i != eduCnt-1){
				i++;
			}
		});
	});
	$(".qualifi").unbind().click(function(){
		
		var $btnSelf = $(this);
		var $parentTr = $btnSelf.parent().parent();
		var $parentTbody = $parentTr.parent();
		
		var qualifiCnt = $("#qualifiCnt").val();
		var minCnt = parseInt(qualifiCnt) - 1;
		$("#qualifiCnt").val(minCnt);
		
		$parentTr.remove();

		var i = 0;
		
		$('input[data="qualifiName"]').each(function () { 
			$(this).attr('name', 'qualifiList[' + i + '].qualifiName'); 
			if(i != qualifiCnt-1){
				i++;
			}
		});
		i = 0;
		$('input[data="qualifiGetdate"]').each(function () { 
			$(this).attr('name', 'qualifiList[' + i + '].qualifiGetdate'); 
			if(i != qualifiCnt-1){
				i++;
			}
		});
	});
	$(".career").unbind().click(function(){
		
		var $btnSelf = $(this);
		var $parentTr = $btnSelf.parent().parent();
		var $parentTbody = $parentTr.parent();

		var careerCnt = $("#careerCnt").val();
		var minCnt = parseInt(careerCnt) - 1;
		$("#careerCnt").val(minCnt);
		
		$parentTr.remove();

		var i = 0;
		
		$('input[data="careerCompName"]').each(function () { 
			$(this).attr('name', 'careerList[' + i + '].careerCompName'); 
			if(i != careerCnt-1){
				i++;
			}
		});
		i = 0;
		$('input[data="careerEnterdate"]').each(function () { 
			$(this).attr('name', 'careerList[' + i + '].careerEnterdate'); 
			if(i != careerCnt-1){
				i++;
			}
		});
		i = 0;
		$('input[data="careerLeavedate"]').each(function () { 
			$(this).attr('name', 'careerList[' + i + '].careerLeavedate'); 
			if(i != careerCnt-1){
				i++;
			}
		});
		i = 0;
		$('input[data="careerSpot"]').each(function () { 
			$(this).attr('name', 'careerList[' + i + '].careerSpot'); 
			if(i != careerCnt-1){
				i++;
			}
		});
		i = 0;
		$('input[data="careerResponsib"]').each(function () { 
			$(this).attr('name', 'careerList[' + i + '].careerResponsib'); 
			if(i != careerCnt-1){
				i++;
			}
		});
	});
	$(".training").unbind().click(function(){
		
		var $btnSelf = $(this);
		var $parentTr = $btnSelf.parent().parent();
		var $parentTbody = $parentTr.parent();

		var trainingCnt = $("#trainingCnt").val();
		var minCnt = parseInt(trainingCnt) - 1;
		$("#trainingCnt").val(minCnt);
		
		$parentTr.remove();

		var i = 0;
		
		$('input[data="trainingName"]').each(function () { 
			$(this).attr('name', 'trainingList[' + i + '].trainingName'); 
			if(i != trainingCnt-1){
				i++;
			}
		});
		i = 0;
		$('input[data="trainingStartdate"]').each(function () { 
			$(this).attr('name', 'trainingList[' + i + '].trainingStartdate'); 
			if(i != trainingCnt-1){
				i++;
			}
		});
		i = 0;
		$('input[data="trainingEnddate"]').each(function () { 
			$(this).attr('name', 'trainingList[' + i + '].trainingEnddate'); 
			if(i != trainingCnt-1){
				i++;
			}
		});
		i = 0;
		$('input[data="trainingAgency"]').each(function () { 
			$(this).attr('name', 'trainingList[' + i + '].trainingAgency'); 
			if(i != trainingCnt-1){
				i++;
			}
		});
	});
	$(".licen").unbind().click(function(){
		
		var $btnSelf = $(this);
		var $parentTr = $btnSelf.parent().parent();
		var $parentTbody = $parentTr.parent();

		var licenCnt = $("#licenCnt").val();
		var minCnt = parseInt(licenCnt) - 1;
		$("#licenCnt").val(minCnt);
		
		$parentTr.remove();

		var i = 0;
		
		$('input[data="licenName"]').each(function () { 
			$(this).attr('name', 'licenList[' + i + '].licenName'); 
			if(i != licenCnt-1){
				i++;
			}
		});
		i = 0;
		$('input[data="licenSkillLevel"]').each(function () { 
			$(this).attr('name', 'licenList[' + i + '].licenSkillLevel'); 
			if(i != licenCnt-1){
				i++;
			}
		});
	});
	$(".skill").unbind().click(function(){
		var $btnSelf = $(this);
		var $parentTr = $btnSelf.parent().parent();
		var $parentTbody = $parentTr.parent();

		var skillCnt = $("#skillCnt").val();
		var minCnt = parseInt(skillCnt) - 1;
		
		$("#skillCnt").val(minCnt);
		
		$parentTr.remove();

		var i = 0;
		
		$('textarea[data="skillProjectName"]').each(function () { 
			$(this).attr('name', 'skillList[' + i + '].skillProjectName'); 
			if(i != skillCnt-1){
				i++;
			}
		});
		i = 0;
		$('input[data="skillStartdate"]').each(function () { 
			$(this).attr('name', 'skillList[' + i + '].skillStartdate'); 
			if(i != skillCnt-1){
				i++;
			}
		});
		i = 0;
		$('input[data="skillEnddate"]').each(function () { 
			$(this).attr('name', 'skillList[' + i + '].skillEnddate'); 
			if(i != skillCnt-1){
				i++;
			}
		});
		i = 0;
		$('textarea[data="skillCustomerComp"]').each(function () { 
			$(this).attr('name', 'skillList[' + i + '].skillCustomerComp'); 
			if(i != skillCnt-1){
				i++;
			}
		});
		i = 0;
		$('textarea[data="skillWorkComp"]').each(function () { 
			$(this).attr('name', 'skillList[' + i + '].skillWorkComp'); 
			if(i != skillCnt-1){
				i++;
			}
		});
		i = 0;
		$('textarea[data="skillIndustry"]').each(function () { 
			$(this).attr('name', 'skillList[' + i + '].skillIndustry'); 
			if(i != skillCnt-1){
				i++;
			}
		});
		i = 0;
		$('textarea[data="skillApplied"]').each(function () { 
			$(this).attr('name', 'skillList[' + i + '].skillApplied'); 
			if(i != skillCnt-1){
				i++;
			}
		});
		i = 0;
		$('textarea[data="skillRole"]').each(function () { 
			$(this).attr('name', 'skillList[' + i + '].skillRole'); 
			if(i != skillCnt-1){
				i++;
			}
		});
		i = 0;
		$('textarea[data="skillModel"]').each(function () { 
			$(this).attr('name', 'skillList[' + i + '].skillModel'); 
			if(i != skillCnt-1){
				i++;
			}
		});
		i = 0;
		$('textarea[data="skillOs"]').each(function () { 
			$(this).attr('name', 'skillList[' + i + '].skillOs'); 
			if(i != skillCnt-1){
				i++;
			}
		});
		i = 0;
		$('textarea[data="skillLang"]').each(function () { 
			$(this).attr('name', 'skillList[' + i + '].skillLang'); 
			if(i != skillCnt-1){
				i++;
			}
		});
		i = 0;
		$('textarea[data="skillDbms"]').each(function () { 
			$(this).attr('name', 'skillList[' + i + '].skillDbms'); 
			if(i != skillCnt-1){
				i++;
			}
		});
		i = 0;
		$('textarea[data="skillTool"]').each(function () { 
			$(this).attr('name', 'skillList[' + i + '].skillTool'); 
			if(i != skillCnt-1){
				i++;
			}
		});
		i = 0;
		$('textarea[data="skillComm"]').each(function () { 
			$(this).attr('name', 'skillList[' + i + '].skillComm'); 
			if(i != skillCnt-1){
				i++;
			}
		});
		i = 0;
		$('textarea[data="skillEtc"]').each(function () { 
			$(this).attr('name', 'skillList[' + i + '].skillEtc'); 
			if(i != skillCnt-1){
				i++;
			}
		});
		
	});
	
	// 여기는 삭제버튼 이벤트 추가
	$(".flexibleTable").find("tbody").find("tr").unbind().hover(function(){
		var $trSelf = $(this);
		var $childRemoveBtn = $trSelf.find(".removeTrBtn");
		
		$childRemoveBtn.css("display","block");
	},function(){
		var $trSelf = $(this);
		var $childRemoveBtn = $trSelf.find(".removeTrBtn");
		
		$childRemoveBtn.css("display","none");
	});
}

function fnPrint(){
	$("select").each(function(){
		var $self = $(this);
		var $options = $self.find("option"); 
		var $selectedOption = $self.children("option:selected");
		
		$options.removeAttr("selected");
		$selectedOption.attr("selected","selected");
	});
	
	
	
	$(".user-info-list-pannel").print({
        globalStyles : true,
        mediaPrint : true,
        stylesheet : '/resources/css/personalHistory/print.css',
        noPrintSelector : ".no-print",
        iframe : true,
        append : null,
        prepend : null,
        manuallyCopyFormValues : true,
        deferred : $.Deferred(),
        timeout : 750,
        title : null,
        doctype : '<!doctype html>'
    });
}







