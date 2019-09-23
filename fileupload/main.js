define(function(require) {

	var $ = require('jquery');
	var HTTP = require('http');

	//var files = new FormData(document.forms[0]);
        //files.append("upload", document.getElementById('getFile').files[0]);

	HTTP.GET({
		url: 'https://lephhw4skc.execute-api.us-west-1.amazonaws.com/test/t',
			//'https://lephhw4skc.execute-api.us-west-1.amazonaws.com/test/t',
			//'https://vgwu7v6r7l.execute-api.us-west-1.amazonaws.com/default/OptionsTest', 
			//'https://raxdv5w0v1.execute-api.us-west-1.amazonaws.com/services',
		data: '', //files,
		success: (data) => {
			console.log(data);
		}, error: (xhr)=> {
			console.log(xhr);
		}
	});
});
