if ('serviceWorker' in navigator) {
	navigator.serviceWorker.register('/sw.js')
		.then(function() { console.log('Service worker up and running!'); })
		.catch(function(error) { console.log('Failed to register service worker', error); });
}
