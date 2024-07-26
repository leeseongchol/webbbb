/**
 * 
 */
//선택삭제
document.getElementById('delBtn').addEventListener('click', delBtnfnc);
function delBtnfnc(e) {
	let cnkCnt = document.querySelectorAll('div.container-fluid>table>tbody input[type="checkbox"]:checked')
	cnkCnt.forEach(function(item) {
				
		item.parentElement.parentElement.remove();
	})
}



//thead에 있는 체크박스 이벤트 등록
document.querySelector('div.container-fluid>table>thead input[type="checkbox"]')//
	.addEventListener('change', changeFnc);

function changeFnc(e) {
	console.log(e.target.checked);
	console.log(document.querySelectorAll('div.container-fluid>table>tbody input[type="checkbox"]:checked')//
		.length);
	//찾으려는 대상 체크박스.
	document.querySelectorAll('div.container-fluid>table>tbody input[type="checkbox"]')//
		.forEach(function(item) {
			console.log(item);
			item.checked = e.target.checked;
		})
}
//수정 버튼에 클릭이벤트 
document.getElementById('modBtn').addEventListener('click', modBtnfnc);

//modBtnFnc 이벤트 핸들러.
function modBtnfnc(e) {

	//화면상에 있는 tr 을 대상으로 변경을 해야하니까
	document.querySelectorAll('#list tr').forEach(function(tr) {
		//tr의 첫번쨰 자식요소의 innerHTML : 이름. 비교 fname의 value 같을때
		// faddress, height의 value를 tr의 두번째, 세번째 자식요소의 innerHTML에 대입.
		if (tr.children[0].innerHTML == document.querySelector('#fname').value) {
			tr.children[1].innerHTML = document.querySelector('#faddress').value;
			tr.children[2].innerHTML = document.querySelector('#height').value;
		}
	});
}; // end of modBtnFnc(e)

//등록 버튼에 클릭이벤트 추가.

document.getElementById('addBtn').addEventListener('click', addBtnFnc)
//addBtnFnc 핸들러
function addBtnFnc(e) {
	let name = document.getElementById('fname').value;
	let address = document.getElementById('faddress').value;
	let height = document.getElementById('height').value;

	if (!name || !address || !height) {
		alert('값을 입력하세여')
		return;
	}

	let friend = { name, address, height };

	let tr = makeTr(friend);

	alert('OK');

	fname.value = '';
	faddress.value = '';
	height.value = '';
	document.getElementById('list').appendChild(tr);
}
const friends = [
	{ name: "제갈몽순", address: "방촌동888번지", height: 65 },
	{ name: "선우가락", address: "방촌동777번지", height: 140 },
	{ name: "독고행배", address: "방촌동666번지", height: 30 }
]

makeList();
function makeList() {
	//<tr><td>값1</td><td>값2</td><td>값3</td><td><button>삭제</button></td></tr>
	friends.forEach(function(friend) {

		let tr = makeTr(friend);

		document.getElementById('list').appendChild(tr);
	});
}
function detailCallback(e) {
	e.stopPropagation();
	console.log(e);
	let tr = e.target.parentElement; //이벤트를 대상으로 tr영역을 찾아가야함
	//this : 1) 함수영역세 window 2) 이벤트 대상  3)객체에서는 객체.
	tr = this;
	document.getElementById('fname').value = tr.children[0].innerHTML;
	document.getElementById('faddress').value = tr.children[1].innerHTML;
	document.getElementById('height').value = tr.children[2].innerHTML;
}//end of detailCallback

//friend =? tr 생성.
function makeTr(friend = { name: 'hong', addres: 'seoul', height: 170 }) {



	//tr만드는 부분.
	let tr = document.createElement('tr');
	tr.addEventListener('click', detailCallback, false);
	//tr.addEventListener('mouseover', detailCallback);



	for (let prop in friend) {
		let td = document.createElement('td');
		td.innerHTML = friend[prop];
		tr.appendChild(td);
	}
	//삭제버튼
	let td = document.createElement('td');
	let btn = document.createElement('button');
	btn.setAttribute('class', 'btn btn-danger');
	btn.addEventListener('click', function(e) {
		console.log(e);
		e.stopPropagation();//click : button 이벤트가 상위로 올라가는 것을 차단 > td > tr > table ....
		e.target.parentElement.parentElement.remove();
	}, false);

	btn.innerHTML = '삭제';
	td.appendChild(btn);
	tr.appendChild(td);

	// 체크박스 완성된 html은 -- > <td><input type="checkbox"></td>	 의 상위요소 tr에 붙이기.
	td = document.createElement('td');
	let inp = document.createElement('input');
	inp.setAttribute('type', 'checkbox');
	inp.addEventListener('change', function(e) {
		let allCnt = document.querySelectorAll('div.container-fluid>table>tbody input[type="checkbox"]').length;
		let cnkCnt = document.querySelectorAll('div.container-fluid>table>tbody input[type="checkbox"]:checked').length;

		let headCk = document.querySelector('div.container-fluid>table>thead input[type="checkbox"]');
		if (allCnt == cnkCnt) {
			headCk.checked = true;
		} else {
			headCk.checked = false;
		}
	})

	td.appendChild(inp);
	tr.appendChild(td);


	return tr;


}
