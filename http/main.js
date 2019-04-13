define(function(require) {

	var $ = require('jquery');
	var HTTP = require('http');

	HTTP.GET({
		url: 'jquery.js',
		data: null,
		success: (data)=> {
			console.log(data);
		},
		error: (xhr)=> {
			console.log(xhr);
			alert('err');
		}
	});
});
