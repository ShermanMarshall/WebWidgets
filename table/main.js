define(function(require) {

	var $ = require('jquery');
	var json = require('ips');
	var table = require('table');

	var t = new table.table(json.prefixes);

	var ele = document.querySelector('#table-content');
	ele.innerHTML = "<div id='' class='container-fluid'>" + t.writeTable() + "</div>";

});
