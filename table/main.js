define(function(require) {

	var $ = require('jquery');
	var json = require('ips');
	var table = require('table');

	console.log(json);

	var t = new table.table(json.prefixes);
	console.log(t);

	var ele = document.querySelector('#table-content');
	ele.innerHTML = t.writeTable();

	console.log(ele.innerHTML);

/*
	$.ajax({ 
		type: 'GET', 
		url: './ip-ranges.json', 
		success: function(data) { 
			console.log(data); 
		}, 
		error: function() { 
			alert('err'); 
		}
	}).then(function(data) { 
		console.log('deferred');
		console.log(data);
	});
*/
});
