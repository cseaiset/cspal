var cacheName = 'cspal-v1';
var filesToCache = [
    '/'
    '/assets/css/bootstrap.min.css',                // index.html
];
self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(cacheName)
        .then(function(cache) {
            console.info('[service-worker.js] cached all files');
            return cache.addAll(filesToCache);
        })
    );
});
self.addEventListener('activate', function(event) {
  console.log('Activated sw.js', event);
});

self.addEventListener('fetch', function(event){
    event.respondWith(
        fetch(event.request)
    );
});