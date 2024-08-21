/**
 * basic.js
 * 
 */

//document.addEventListener('DOMContentLoaded', function() {
$(document).ready(function() {
	//jquery객체 vs. dom객체.
	let obj = $('.show');
	obj[0].innerHTML = ('Hello');// dom객체 
	//obj.eq(0).html('Hello');
	obj.eq(1).html('world');

	//obj = document.getElementById('show');

	console.log(obj);

	//jquery 객체 생성.
	$('#show').append($('<button />').html('삭제')); //<button>삭제</button>
})  

//})

