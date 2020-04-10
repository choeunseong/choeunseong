<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

<input type="hidden" id="historyCnt" value="${ infoCnt }">
<input type="hidden" id="historyGubun" value="${ historyGubun }">

<c:if test="${ historyGubun eq 'skillCareer' }">
	<input type="hidden" id="c_date" value="${ careerDate }">
</c:if>

<table class="pop-register-list">
	<thead>
		<tr style="text-align: center;">
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
		<c:forEach var="vo" items="${ list }">
			<tr onclick="fnDetailRow('${ vo.userIdx }')">
				<td>${ vo.userIdx }</td>
				<td>${ vo.userName }</td>
				<td>${ vo.userComp }</td>
				<td>${ vo.userDept }</td>
				<td>${ vo.userSex }</td>
				<td>${ vo.careerDate }</td>
				<td>${ vo.userRegisterDate }</td>
			</tr>
		</c:forEach>
	</tbody>
</table>

<div class="pop-paging-pannel">
	<c:if test="${page.curRange ne 1 || page.pageNo ne 1 }">			
		<a href="javascript:;" onClick="fnPage('1')">◀◀</a> 						
	</c:if>
	<c:if test="${page.pageNo ne 1}">									
		<a href="javascript:;" onClick="fnPage('${page.prevPage }')">◀</a> 		
	</c:if>

	<c:forEach var="pageNum" begin="${ page.startPage }" end="${ page.endPage }">
		<c:choose>
			<c:when test="${ pageNum eq page.pageNo }">
				${ pageNum } 
			</c:when>
			<c:otherwise>
				<a href="javascript:;" onclick="fnPage('${pageNum}')">${ pageNum }</a>
			</c:otherwise>
		</c:choose>
	</c:forEach>
	 
	<c:if test="${page.pageNo ne page.pageCnt && page.pageCnt > 0}">
		<a href="javascript:;" onClick="fnPage('${page.nextPage }')">▶</a> 
	</c:if>
	<c:if test="${page.curRange ne page.rangeCnt || page.pageNo < page.pageCnt}">	
		<a href="javascript:;" onClick="fnPage('${page.pageCnt }')">▶▶</a> 					
	</c:if>	
</div>

