define(function(require) {

	var $ = require('jquery');
	var HTTP = require('http');

	var files = new FormData(document.forms[0]);
        files.append("upload", document.getElementById('getFile').files[0]);

	HTTP.POST({
		url: 'https://raxdv5w0v1.execute-api.us-west-1.amazonaws.com/services',
		data: files,
		success: (data) => {
			console.log(data);
		}, error: (xhr)=> {
			console.log(xhr);
		}
	});
});
