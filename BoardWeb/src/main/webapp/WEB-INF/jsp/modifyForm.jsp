
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>

<h3>수정(modifyForm.jsp)</h3>
${board.boardNo }

<form action="updateBoard.do">
<input type="hidden" name ="bno" value="${board.boardNo }">
	<table class="table">
		<tr>
			<th>제목</th>
			<td><input class="form-control" type="text" name="title"
				value="${board.title}"></td>
		</tr>
		<tr>
			<th>내용</th>
			<td><textarea class="form-control" name="content">${board.content}</textarea></td>
		</tr>
		<tr>
			<th>작성자</th>
			<td>${board.writer}</td>
		</tr>

		<tr>
			<td colspan="2" align="center">
			<input class="btn btn-primary"type="submit" value = "수정"> 
			</td>
		</tr>
	</table>
</form>
