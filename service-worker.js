  var CACHE_NAME = 'cspal-v1';
  var urlsToCache = [
  '/index.html'
  ];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(`static-${version}`)
      .then(cache => Promise.all(
        urlsToCache.map(url => {
          return fetch(`${url}?${Math.random()}`).then(response => {
            if (!response.ok) throw Error('Not ok');
            return cache.put(url, response);
          })
        })
      ))
  );
});
