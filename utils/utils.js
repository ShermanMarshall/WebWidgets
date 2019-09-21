define(function(require) {
	var JSUtils = {};
	
	JSUtils.getJS = function(url, key) {
		var docBody = document.querySelector('body');
		var json = document.createElement('script');

                json.setAttribute('src', url);
                docBody.appendChild(json);

                //console.log(docBody);

                setTimeout(() => { 
                        //console.log(window.localStorage.getItem('obj'));
                        //console.log(window.hereiam);
                }, 1000);
	}
	
	return {
	}
});
