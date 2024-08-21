/**
 * 
 * 
 * boardJquery.js
 */
console.log('jquery start');


let page = 1;

$.ajax({
	url: 'replyList.do', //서버url 호출
	data: { bno: bno, page: page }, //서버에 전달한 parameter.
	dataType: 'json', //서버러 전달받은 content 타입. 
	success: function(result) {
		console.log(result);
		$.each(result, function(i, elem) {
			console.log("요기=>", i, elem);
			let temp = $('#replyList li:eq(0)').clone();
			temp.attr('data-rno', elem.replyNo);
			temp.css('display', 'block'); //속성(attribute) 변경.
			temp.find('span:eq(0)').html(elem.replyNo);
			temp.find('span').eq(1).html(elem.replyContent);
			temp.find('span').eq(2).html(elem.replyer);

			let btn = $('<button>삭제</button>').on('click', deleteRow)

			temp.find('span').eq(3).html(btn);
			$('#replyList').append(temp);
		})
	},
	error: function(err) {
		console.error(err);
	}
}); // $.ajax

function deleteRow() {
	//삭제 ajax
	let li = $(this).parent().parent();
	let rno = li.data('rno');
	$.ajax({
		url: 'removeReply.do',
		data: { rvo: rno },
		dataType: 'json',
		success: function(result) {
			console.log(result);
			if (result.retCode == 'Success') {
				li.remove();
			} else {
				alert('처리중 예외발생.');
			}
		},
		error: function(err) {
			console.error(err);
		}
	});
} // end of deleteRow

$('#addReply').on('click', function() {

	$.ajax({

		url: 'addReply.do',
		data: { replyer: replyer, content: $('#content').val(), bno: bno },
		dataType: 'json',
		success: function(result) {
			console.log(result);
			console.log(result.retVal);
			makerow(result.retVal)
			$('#replyList').prepend(makerow(result.retVal));
			
		},
		error: function(err) {
			console.error(err);
		}
	})

});


function makerow(elem) {

	let temp = $('#replyList li:eq(0)').clone();
	temp.attr('data-rno', elem.replyNo);
	temp.css('display', 'block'); //속성(attribute) 변경.
	temp.find('span:eq(0)').html(elem.replyNo);
	temp.find('span').eq(1).html(elem.replyContent);
	temp.find('span').eq(2).html(elem.replyer);

	let btn = $('<button>삭제</button>').on('click', deleteRow)

	temp.find('span').eq(3).html(btn);

	return temp;
}



