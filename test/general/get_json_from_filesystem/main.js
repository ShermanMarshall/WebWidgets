define(function(require) {
	let i = 0;
	setInterval(function() {
		var iframe = document.querySelector('#iframe-window');
		var arry = ['red.html', 'blue.html', 'green.html'];
		iframe.setAttribute('src', arry[i++ % 3]);
		console.log(iframe);
	}, 500);
});
