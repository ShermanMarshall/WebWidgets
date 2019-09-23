define(function(require) {

	var $ = require('jquery');
	var HTTP = require('http');

	var uploadButton = document.getElementById('upload');
	
	var data = {};

	function readData(event) {
		var files = event.target.files;    
		if (files && (window.File && window.FileReader && window.FileList && window.Blob)) {
			for (var i=0, f; f=files[i]; i++) {
				var r = new FileReader();
				r.onload = (function(f) {
					return function(e) {
						var contents = e.target.result;
						var aFile = {};
						/*
						alert('Data retreived:\n' + 'name: ' + f.name + '\n' +
							'type: ' + f.type + '\n' +
							'size: ' + f.size + ' bytes\n' +
							'data:\n ' + contents);
						*/
						data[f.name] = aFile;
						aFile.size = f.size;
						aFile.type = f.type;
						aFile.content = btoa(contents);
					};  
				}) (f);
				r.readAsBinaryString(f);
				console.log(r);
				console.log(r.result);
				console.log(atob(r.result));
			}   
		} else {
			alert('Failed to load file');
		}   
	}
	document.getElementById('getFile').addEventListener('change', readData, false);
	uploadButton.addEventListener('click', function() {
		/*
		var formData = new FormData(document.forms[0]);
		Array.from(document.getElementsByTagName('input')).map(function(file) {
			if (file.getAttribute('type') === 'file')
				formData.append('upload[]', file.files[0], file.files[0].name);
		});
		//formData.append("keykey", "can");
        	//files.append("upload", document.getElementById('getFile').files[0]);

		console.log(formData);
		console.log(formData.toString());
		console.log(document.getElementById('getFile').files[0]);
		*/
		console.log(data);

		HTTP.POST({
			url: 'https://ivn8oxnaaj.execute-api.us-west-1.amazonaws.com/default/BWProducerData',
				//'https://b4il8kzd93.execute-api.us-west-1.amazonaws.com/default/BWProducerData',
			data: JSON.stringify(data), //formData,
				//JSON.stringify({ email: 'jack@bankerwealth.com', password: 'T2U3iOiGc' }),
				//email: 'me@testing.com', passowrd: 'didntworkandnowdoes' ,
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
	});
});
