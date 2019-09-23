define(function(require) {

	var $ = require('jquery');
	var HTTP = require('http');

	var arry = [{'a': 'b'}, 1, 'testing', {'other':[1]}]

	var bwLoginTest = {
		email:  'jack@bankerwealth.com',
		password: 'T2U3iOiGc',
		session_key: arry
	};

	console.log(bwLoginTest);
	console.log(JSON.parse(JSON.stringify(bwLoginTest)));

	//bwLoginTest = {'test': 'ytest'};

	HTTP.POST({
		url: 'https://b5rteeu9ff.execute-api.us-west-1.amazonaws.com/default/BWHTTPTestLambda',
			//'https://raxdv5w0v1.execute-api.us-west-1.amazonaws.com/default/BWLogin',
			//'https://r95iab8v8d.execute-api.us-west-1.amazonaws.com/default'
		data: JSON.stringify(bwLoginTest),
			//JSON.stringify({ test: 'testing' }),
			//JSON.stringify({ email: 'jack@bankerwealth.com', password: 'T2U3iOiGc' }),
			//email: 'me@testing.com', passowrd: 'didntworkandnowdoes' }),
		success: (data) => {
			console.log(data);
			console.log(JSON.parse(data));
			//console.log(JSON.parse(JSON.parse(data)));
			//console.log(data.json());
			//var body = data
		}, error: (xhr)=> {
			console.log(xhr);
		}
	});
});
