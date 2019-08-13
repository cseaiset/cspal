  var CACHE_NAME = 'cspal-v1';
  var urlsToCache = [
  '/index.html'
  ];

self.addEventListener('install', function(event) {
    console.log('Installed sw.js', event);
});

self.addEventListener('activate', function(event) {
  console.log('Activated sw.js', event);
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.filter(function(cacheName) {
          return true;
          // Return true if you want to remove this cache,
          // but remember that caches are shared across
          // the whole origin
        }).map(function(cacheName) {
          return caches.delete(CACHE_NAME);
        })
      );
    })
  );
});
