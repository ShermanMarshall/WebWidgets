define(function(require) {
	var mandatoryKeys = {url: true, success: true};
	var optionalKeys = {data: null, headers: null};
	var defaultContentType = 'application/json';
	
	var makeRequest = function(obj, method) {
		var areMandatoryKeysPresent = true;
		for (var key in mandatoryKeys) {
			var newKey = key.toLowerCase();
			obj[newKey] = obj[key];
			key = newKey
			if (obj[key] == undefined) {
				throw new Error(`${key=='success'?'AJAX':'HTTP'} required element: '${key}' not present`);
			}
		}

		var entityString= obj.data || '';
		var isPriorToRequest = true;

		var request = new XMLHttpRequest();

		request.onreadystatechange = function() {
			//Conditions for success
			if (this.readyState == 4 && (this.status >= 200 && this.status <= 299)) {
				obj.success(this.response, this);
			} else {
				if (!isPriorToRequest && obj.error) {
					console.log('Request error occurred');
					obj.error(this);
				} else {
					console.log(`status code: ${this.status}`);
					obj.error(this);
				}
			}
		}

		request.open(method, obj.url, true);

		//Set request headers
		if (obj.headers) {
			for (var key in obj.headers) {
				request.setRequestHeader(key, obj.headers[key]);
			}
		}
		
		//console.log(request);
		request.send(entityString);
	};

	return { //http object
		GET: function(obj) { 
			makeRequest(obj, 'GET');
		},
		POST: function(obj) {
			makeRequest(obj, 'POST');
		},
		PUT: function(obj) {
			makeRequest(obj, 'PUT');
		},
		DELETE: function(obj) {
			makeRequest(obj, 'DELETE');
		},
		HEAD: function(obj) {
			makeRequest(obj, 'HEAD');
		},
		OPTIONS: function(obj) {
			makeRequest(obj, 'OPTIONS');
		}
	}
});
