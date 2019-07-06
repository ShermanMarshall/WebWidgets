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
		}
	} else {
		alert('Failed to load file');
	}
}
//get DOM node for input type=file and add event listener to node
document.getElementById('getFile').addEventListener('change', readData, false);

