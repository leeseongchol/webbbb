<%@page import="com.yedam.common.PageDTO"%>

<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>

<h3>게시글목록(boardList.jsp)</h3>
<!-- 검색기능. -->
<div class="center">
	<form action="boardList.do">
		<div class="row">
			<div class="col - sm-4">
				<!-- select 목록 -->
				<select name="searchCondition" class="form-control">
					<option value="">선택하세요</option>
					<option value="T" ${searchCondition == 'T' ? 'selected' : ''}>제목</option>
					<option value="W" ${searchCondition == 'W' ? 'selected' : ''}>작성자</option>
					<option value="TW" ${searchCondition == 'TW' ? 'selected' : ''}>제목+ 작성자</option>
				</select>
			</div>
			<div class="col-sm-6">
				<input type="text" name="keyword" class="form-control">
			</div>
			<div class="col-sm-2">
				<input type="submit" value="조회" class="btn btn-primary">
			</div>
		</div>
	</form>
</div>
<table class="table">
	<thead>
		<tr>
			<th>글번호</th>
			<th>제 목</th>
			<th>작성자</th>
			<th>작성일시</th>
		</tr>
	</thead>



	<%
	String name = (String) request.getAttribute("myName");

	PageDTO paging = (PageDTO) request.getAttribute("paging");

	String sc = (String) request.getAttribute("searchCondition");
	String kw = (String) request.getAttribute("keyword");
	%>
	<tbody>


		<c:forEach var="board" items="${boardList }">


			<tr>
				<td>${board.boardNo}</td>
				<td><a href="board.do?page=${paging.page }&bno=${board.boardNo}">${board.title}</a></td>
				<td>${board.writer}</td>
				<td>${board.writerDate}</td>
			</tr>
		</c:forEach>

	</tbody>

</table>
<p>${paging }</p>
<!-- 페이징 -->
<nav aria-label="Page navigation example">
	<ul class="pagination justify-content-center">



		<!-- prev 페이지. -->

		<c:if test="${paging.prev }">
			<li class="page-item"><a class="page-link"
				href="boardList.do?searchCondition=${searchCondition}&keyword=${keyword}&page=${paging.startPage - 1}"
				aria-label="Previous"> <span aria-hidden="true">&laquo;</span>
			</a></li>
		</c:if>

		<!-- 페이지 수만큼 링크생성. -->

		<c:forEach var="p" begin="${paging.startPage }"
			end="${paging.endPage }">
			<c:choose>
				<c:when test="${paging.page == p }">

					<li class="page-item active" aria-current="page"><span
						class="page-link">${p} </span></li>
				</c:when>
				<c:otherwise>
					<li class="page-item"><a class="page-link"
						href="boardList.do?searchCondition=${searchCondition }&keyword=${keyword}&page=${p }">
							${p } </a></li>
				</c:otherwise>
			</c:choose>
		</c:forEach>


		<!-- next 페이지. -->




		<c:if test="${paging.next}">
			<li class="page-item"><a class="page-link"
				href="boardList.do?searchCondition=${searchCondition}&keyword=${keyword}&page=${paging.endPage + 1}"
				aria-label="Next"> <span aria-hidden="true">&raquo;</span>
			</a></li>
		</c:if>
	</ul>
</nav>
