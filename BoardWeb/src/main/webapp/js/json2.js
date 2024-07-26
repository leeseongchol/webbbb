/**
 * json2
 */

document.querySelector('div.container-fluid>div:nth-of-type(2)').remove();
document.querySelector('div.container-fluid>table').remove();

let json = `[{"id":1,"first_name":"Owen","last_name":"Nears","email":"onears0@blinklist.com","gender":"Male","salary":8084},
{"id":2,"first_name":"Joannes","last_name":"Swinburn","email":"jswinburn1@foxnews.com","gender":"Female","salary":4504},
{"id":3,"first_name":"Alie","last_name":"Dillinger","email":"adillinger2@arstechnica.com","gender":"Female","salary":3265},
{"id":4,"first_name":"Fritz","last_name":"Balassi","email":"fbalassi3@blogtalkradio.com","gender":"Male","salary":1904},
{"id":5,"first_name":"Delcine","last_name":"Ruff","email":"druff4@mtv.com","gender":"Agender","salary":6038},
{"id":6,"first_name":"Nevin","last_name":"Fane","email":"nfane5@google.co.jp","gender":"Male","salary":6086},
{"id":7,"first_name":"Redd","last_name":"Halsho","email":"rhalsho6@go.com","gender":"Male","salary":1475},
{"id":8,"first_name":"Justino","last_name":"O'Hingerty","email":"johingerty7@qq.com","gender":"Male","salary":1583},
{"id":9,"first_name":"Rossie","last_name":"Draper","email":"rdraper8@hud.gov","gender":"Male","salary":8724},
{"id":10,"first_name":"Thorin","last_name":"Cotta","email":"tcotta9@wikispaces.com","gender":"Male","salary":1423},
{"id":11,"first_name":"Nelly","last_name":"Wolford","email":"nwolforda@over-blog.com","gender":"Female","salary":6502},
{"id":12,"first_name":"Hillard","last_name":"Rothman","email":"hrothmanb@constantcontact.com","gender":"Male","salary":8528},
{"id":13,"first_name":"Alida","last_name":"Gabbatiss","email":"agabbatissc@fda.gov","gender":"Female","salary":2836},
{"id":14,"first_name":"Jeralee","last_name":"Hallford","email":"jhallfordd@furl.net","gender":"Female","salary":6680},
{"id":15,"first_name":"Moira","last_name":"Spataro","email":"mspataroe@yelp.com","gender":"Female","salary":1594},
{"id":16,"first_name":"Felic","last_name":"Bohling","email":"fbohlingf@networkadvertising.org","gender":"Male","salary":8432},
{"id":17,"first_name":"Marylinda","last_name":"Frugier","email":"mfrugierg@bigcartel.com","gender":"Female","salary":7498},
{"id":18,"first_name":"Paul","last_name":"Stoffers","email":"pstoffersh@meetup.com","gender":"Male","salary":1703},
{"id":19,"first_name":"Catherin","last_name":"Labusquiere","email":"clabusquierei@va.gov","gender":"Polygender","salary":3135},
{"id":20,"first_name":"Ingaberg","last_name":"Bernardoni","email":"ibernardonij@newsvine.com","gender":"Female","salary":1128}]`;


let employees = JSON.parse(json);
console.log(employees);

document.querySelector('#searchGender').addEventListener('change', function(e){
	initList();
})

function initList() {
	let target = document.getElementById('empList');
	target.innerHTML = ''; // 화면을 호출하면 기본값을 보여주고, 바뀌면 바뀐값이 호출되어야해서 비어줌
	let selValue = document.querySelector('#searchGender').value;
	employees.forEach(emp => {
		if(selValue == 'All' || emp.gender == selValue ){
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


