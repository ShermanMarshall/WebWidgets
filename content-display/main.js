define(function(require) {
	setTimeout(function() {
		var iframe = document.querySelector('#iframe-window');
		iframe.setAttribute('src', 'blue.html');
		console.log(iframe);
	}, 3000);
});
