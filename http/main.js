define(function(require) {

	var HTTP = require('http');
	var dataStr = JSON.stringify({ 
		//'session_key': 'dJySYbOFFHTnDKOmy0+v5WTfsrZ4pH482S8LoLDc9f0=',
		//'6S/56HFf3ZTu21SlML81JdE2YGvOb6+/U4og+1gumks=' });
		isConsoleTest:true,
		'aws-console-test':'snl-55999'
	});
	HTTP.GET({
		url: 	'https://6m12icqwhb.execute-api.us-west-1.amazonaws.com/content/extra/path/params?query=string&param=another',
		data: dataStr,
		headers: {'is-console-test':'true', 'aws-console-test': 'snl-55999'},
		success: (data)=> {
			console.log(data);
		},
		error: (xhr)=> {
			console.log(xhr);
			alert('err');
		}
	});

});
