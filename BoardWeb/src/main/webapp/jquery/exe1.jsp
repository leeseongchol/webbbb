<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>exe1</title>
<script
	src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
<script>
	$(document).ready(function() {$('#addBtn').on('click',function() {
	let btn = $('<button>삭제</button>').on('click',function() {
			//console.log(this);
			$(this).parent().hide();
				})

		let newElem = $('<li />').html($('#userVal').val() + " ").append(btn);
			$('#list').append(newElem);
			$('#userVal').val('');
						})
				//홀수
				$('#oddBtn').on('click', function() {
					$('#list li:even').css('color', 'red');

				})
				//짝수
				$('#evenBtn').on('click', function() {
					$('#list li:odd').css('color', 'blue');

				})
				//3번째이후
				$('#tBtn').on('click', function() {
					$('#list li:gt(2)').css('color', 'green');

				})
				//4번째이전
				$('#fBtn').on('click', function() {
					$('#list li:lt(3)').css('color', 'pink');

				})
				
				$('#cBtn').on('click', function() {
					$('#list li:not(:has(span))').css('color', 'white');

				})
			});
</script>
</head>
<body>
	입력:
	<input id="userVal">
	<!-- val() -->
	<button id="addBtn">추가</button>
	<button id="oddBtn">홀수</button>
	<button id="evenBtn">짝수</button>
	<button id="tBtn">3번째이후</button>
	<button id="fBtn">4번째이전</button>
	<button id="cBtn">사과4</button>

	<div id="show">
		<ul id="list">
			<li>사과1
				<button>삭제<span>span</span></button>
			</li>
			<li>사과2
				<button>삭제</button>
			</li>
			<li>사과3
				<button>삭제</button>
			</li>
			<li>사과4
				<button>삭제</button>
			</li>
			<li>사과5
				<button>삭제</button>
			</li>
			<li>사과6
				<button>삭제</button>
			</li>
			<li>사과7
				<button>삭제</button>
			</li>
			<li>사과8
				<button>삭제</button>
			</li>
			<li>사과9
				<button>삭제</button>
			</li>
			<li>사과10
				<button>삭제</button>
			</li>
		</ul>
	</div>
</body>
</html>