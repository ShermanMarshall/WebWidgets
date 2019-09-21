define(function(require) {
	var HTTP = require('http');
	var arry = [{'a': 'b'}, 1, 'testing', {'other':[1]}];

	var bwLoginTest = {
		email:  'jack@bankerwealth.com',
		password: 'T2U3iOiGc',
		session_key: '6S/56HFf3ZTu21SlML81JdE2YGvOb6+/U4og+1gumks=',
		//getHTTPState: true
	};

	console.log(bwLoginTest);

	HTTP.GET({
		url: //'https://raxdv5w0v1.execute-api.us-west-1.amazonaws.com/default/BWLogin',
			//'https://rqhrldn92h.execute-api.us-west-1.amazonaws.com/services/producers',
			//'https://01hrg5h6gd.execute-api.us-west-1.amazonaws.com/services/producers',
			'https://b5rteeu9ff.execute-api.us-west-1.amazonaws.com/default/BWHTTPTestLambda',
		data: JSON.stringify(bwLoginTest),
		success: (data) => {
			console.log(data);
			console.log(JSON.parse(data));
		}, error: (xhr)=> {
			console.log(xhr);
		}
	});
});
