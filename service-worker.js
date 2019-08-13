  var CACHE_NAME = 'cspal-v1';
  var urlsToCache = [
  '/'
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

self.addEventListener('fetch', function(event){
    event.respondWith(
        new Promise((resolve, reject) => {
            var req = modify(event.request); // modify request
            
            // send network request
            fetch(req)
            .then((r) => resolve(modify(r))) // modify response
            .catch(e => reject(e));
        })
    );
});
