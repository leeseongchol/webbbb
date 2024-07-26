/**
 * 
 */
console.log('board.js' + bno);
let page = 1; // 아래쪽 댓글의 페이지를 지정.

//댓글 등록 버튼에 클릭 이벤트 등록
document.querySelector('#addReply').//
	addEventListener('click', function() {
		let content = document.querySelector('#content').value;
		if (!replyer || !content) {
			alert('필수항목을 확인하세요')
			return;
		}
		let replyer = 'geniuslsc';
		let parm = { bno, replyer, content }


		svc.addReply(parm, function() {
			//등록완료 => 화면에 등록된 글 추가.
			let result = JSON.parse(this.responseText);
			console.log(result);
			if (result.retCode == 'Success') {
				replyList.appendChild(makeRow(result.retVal));
			}
		});
	});

//댓글목록출력
svc.replyList({ bno, page }, function() {
	let result = JSON.parse(this.responseText);
	result.forEach(reply => {
		replyList.appendChild(makeRow(reply));
	});
});

// reply => row 생성.
function makeRow(reply = {}) {
	let cloned = document.querySelector('div.reply>div.content li')//
		.cloneNode(true);
	cloned.setAttribute('data-rno', reply.replyNo);
	cloned.style.display = 'block'; // <li style ="display = block";></li>
	cloned.querySelector('span:nth-of-type(1)').innerText = reply.replyNo;
	cloned.querySelector('span:nth-of-type(2)').innerText = reply.replyContent;
	cloned.querySelector('span:nth-of-type(3)').innerText = reply.replyer;
	cloned.querySelector('button').addEventListener('click', deleteReplyFnc);
	return cloned;
}

// 댓글삭제 이벤트핸들러.
function deleteReplyFnc(e) {
	let rno = e.target.parentElement.parentElement.dataset.rno;
	svc.removeReply(rno, function(e) {
		let result = JSON.parse(this.response);
		if (result.retCode == 'Success') {
			alert('성공이다');
			document.querySelector('li[data-rno="' + rno + '"]').remove();
		} else {
			alert('실패다');
		}
	})
}
// paging영역의 a태그ㅓ를 클릭하면......
document.querySelectorAll('div.reply ul.pagination a')//
	.forEach(item => {
		item.addEventListener('click', function(e) {
			page = item.innerHTML;
			svc.replyList({ bno, page }, function() {
				//기존목록을 삭제
				replyList.querySelectorAll('li').forEach((li,idx)=>{
					if(idx !=0){
						li.remove();
					}
				})
				let result = JSON.parse(this.responseText);
				result.forEach(reply => {
					replyList.appendChild(makeRow(reply));
				});
			});
		})
	});