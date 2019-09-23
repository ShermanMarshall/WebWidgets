define(function(require) {

	var $ = require('jquery');
	var HTTP = require('http');

	var files = new FormData(document.forms[0]);
        files.append("upload", document.getElementById('getFile').files[0]);

	HTTP.POST({
		url: //'https://raxdv5w0v1.execute-api.us-west-1.amazonaws.com/default/BWLogin',
			'https://r95iab8v8d.execute-api.us-west-1.amazonaws.com/default'
		data: files,
			//JSON.stringify({ email: 'jack@bankerwealth.com', password: 'T2U3iOiGc' }),
			//email: 'me@testing.com', passowrd: 'didntworkandnowdoes' }),
		success: (data) => {
			console.log(data);
			console.log(JSON.parse(data));
			console.log(JSON.parse(JSON.parse(data)));
			//console.log(data.json());
			//var body = data
		}, error: (xhr)=> {
			console.log(xhr);
		}
	});
/*
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
*/
});
