define(function(require) {

	var json = require('passwords');
	var table = require('table');

	var t = new table.table(json);

	var ele = document.querySelector('#table-content');
	var stuff = t.writeTable();
	
	console.log(stuff);
	ele.innerHTML = `<div id='' class='container-fluid'>${stuff}</div>`;

});
