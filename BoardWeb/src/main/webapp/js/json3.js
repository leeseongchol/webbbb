/**
 * json3.js
 */

document.querySelector('div.container-fluid>div:nth-of-type(2)').remove();
document.querySelector('div.container-fluid>table').remove();

//Asynchronous Javascript And Xml (AJAX)
let employees;
let xhtp = new XMLHttpRequest();
xhtp.open('get', 'data/MOCK_DATA.json'); // 특정페이지 요청.
xhtp.send();
xhtp.onload = function(e) {
	let json = xhtp.response;
	employees = JSON.parse(json);
	console.log(employees);
	initList();
}

document.querySelector('#searchGender').addEventListener('change', function(e) {
	initList();
})

function initList() {
	let target = document.getElementById('empList');
	target.innerHTML = ''; // 화면을 호출하면 기본값을 보여주고, 바뀌면 바뀐값이 호출되어야해서 비어줌
	let selValue = document.querySelector('#searchGender').value;
	employees.forEach(emp => {
		if (selValue == 'All' || emp.gender == selValue) {
			target.appendChild(makeRow(emp));
		}

	});
}
initList();

// 사원정보 => row 생성.
function makeRow(emp = {}) {
	let fields = ['id', 'first_name', 'last_name', 'salary'];
	let tr = document.createElement('tr');
	fields.forEach(field => {
		let td = document.createElement('td');
		td.innerHTML = emp[field];
		tr.appendChild(td);

	})
	return tr;
}


