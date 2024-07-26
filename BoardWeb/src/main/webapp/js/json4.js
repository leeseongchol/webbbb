/**
 
json4.js*/
document.querySelector('#show').remove();
document.querySelector('div.container-fluid>div:nth-of-type(2)').remove();
document.querySelector('div.container-fluid>table').remove();
//등록이벤트 
document.querySelector('#addBtn').addEventListener('click', addRowFnc);

function addRowFnc(e) {
	let sno = document.querySelector('#sno').value;
	let sname = document.querySelector('#sname').value;
	let phone = document.querySelector('#phone').value;

	let addHtp = new XMLHttpRequest();
	addHtp.open('get', 'addStudent.do?sno=' + sno + '&sname=' + sname + '&phone=' + phone);
	addHtp.send();
	addHtp.onload = function(e) {
		console.log(addHtp.response);
		let result = JSON.parse(addHtp.response);
		if (result.retCode == 'Success') {
			let tr = makeRow(result.retVal)
			document.getElementById('stdList').appendChild(tr);
		}
	}
}
// Asynchronous javascript And Xml (AJAX)
let students;
let xhtp = new XMLHttpRequest();
//xhtp.open('get','data/MOCK_DATA.json'); // 특정페이지 요청 //
xhtp.open('get', 'studentJson.do'); // 특정페이지 요청 //
xhtp.send();
xhtp.onload = function(e) {
	console.log(xhtp.response);
	let json = xhtp.response;
	students = JSON.parse(json);
	console.log(students);
	initList();
}


function initList() {
	let target = document.getElementById('stdList');
	target.innerHTML = '';
	students.forEach(student => {
		target.appendChild(makeRow(student));
	});
}


// 사원정보 => row 생성
function makeRow(emp = {}) {
	let fields = ['stdNo', 'stdName', 'stdPhone'];
	let tr = document.createElement('tr');
	tr.setAttribute('data-sno', emp.stdNo)
	fields.forEach(field => {
		let td = document.createElement('td');
		td.innerHTML = emp[field];
		tr.appendChild(td);
	})

	// 삭제버튼
	let td = document.createElement('td');
	let btn = document.createElement('button');
	// 클릭이벤트
	btn.addEventListener('click', deleteRowFnc);

	btn.setAttribute('class', 'btn btn-danger'); // <button class="btn btn-danger">삭제</button>

	btn.innerHTML = '삭제';
	td.appendChild(btn);
	tr.appendChild(td);


	return tr;
} //end of makeList(emp = {})

function deleteRowFnc(e) {
	console.log(e.target.parentElement.parentElement.firstChild.innerText);
	let tr = e.target.parentElement.parentElement;
	let sno = e.target.parentElement.parentElement.firstChild.innerText;
	sno = e.target.parentElement.parentElement.dataset.sno;  // ← getAttribute("data-sno")
	const delHtp = new XMLHttpRequest();
	delHtp.open('get', 'removeStudent.do?sno=' + sno);
	delHtp.send();
	delHtp.onload = function() {
		let result = JSON.parse(delHtp.responseText); // {"retCode": "Success"}
		if (result.retCode == 'Success') {
			alert("성공!");
			tr.remove();
			console.log(e.target.parentElement.parentElement)
		} else if (result.retCode == 'Fall') {
			alert("관리자에게 문의하세요");

		}
	}
}
