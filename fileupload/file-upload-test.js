define(function(require) {
	var HTTP = require('http');

	var data = {};
	function readData(event) {
		var files = event.target.files;			
			//var attr = document.getElementById('getFile').attr('name');
			//attr = attr.substr(0, attr.length);
			//alert(attr);
		if (files && (window.File && window.FileReader && window.FileList && window.Blob)) {
			for (var i=0, f; f=files[i]; i++) {
				var r = new FileReader();
				r.onload = (function(f) {
					return function(e) {
						var contents = e.target.result;
						/*
						alert('Data retreived:\n' + 'name: ' + f.name + '\n' +
							'type: ' + f.type + '\n' +
							'size: ' + f.size + ' bytes\n' +
							'data:\n ' + contents);
						*/
						data[f.name] = {
							'content': btoa(contents)
						};
					};
				}) (f);
				//r.readAsText(f);
				r.readAsBinaryString(f);
			}
		} else {
			alert('Failed to load file');
		}
	}
	document.getElementById('getFile').addEventListener('change', readData, false);

	document.getElementById('send').addEventListener('click', ()=> {
		console.log(JSON.stringify(data));
		HTTP.POST({
			url: 'https://9uxm4canbh.execute-api.us-west-1.amazonaws.com/services/a/b/c',
				//'https://9uxm4canbh.execute-api.us-west-1.amazonaws.com/default/RestTest',
			data: JSON.stringify({'file_uploads': data }),
			success: (content)=> {
				console.log(content);
			},
			error: (content)=> {
				console.log(content);
			}
		});		
	});
});
