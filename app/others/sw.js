const CACHE_NAME = 'bycedric';
const CACHE_URLS = [
	'/',
	'/index.html',
	'/styles.css',
	'/fonts/icons/icons.eot',
	'/fonts/icons/icons.svg',
	'/fonts/icons/icons.ttf',
	'/fonts/icons/icons.woff',
	'/images/android/icon-36.png',
	'/images/android/icon-48.png',
	'/images/android/icon-72.png',
	'/images/android/icon-96.png',
	'/images/android/icon-144.png',
	'/images/android/icon-192.png',
	'/images/apple/icon-57.png',
	'/images/apple/icon-72.png',
	'/images/apple/icon-114.png',
	'/images/apple/icon-120.png',
	'/images/apple/icon-144.png',
	'/images/apple/icon-152.png',
	'/images/apple/icon-180.png',
	'/images/apple/icon-192.png',
];

self.addEventListener('install', function(event) {
	event.waitUntil(
		caches.open(CACHE_NAME).then(function(cache) {
			return cache.addAll(CACHE_URLS);
		})
	);
});

self.addEventListener('fetch', function(event) {
	event.respondWith(
		caches.match(event.request).then(function(response) {
			return response || fetch(event.request);
		})
	);
});
