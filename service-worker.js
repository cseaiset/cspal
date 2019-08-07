  var CACHE_NAME = 'cspal-v1';
  var urlsToCache = [
  '/',
  'assets/css/main.css',
  'assets/css/bootstrap.min.css',
  'assets/css/material.indigo-pink.min.css',
  'assets/css/style.min.css',
  'assets/css/icon.css',
  'assets/css/css.css',
  'assets/js/bootstrap.min.js',
  'assets/js/material.min.js',
  'assets/js/popper.min.js'
  ];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => Promise.all(
        urlsToCache.map(url => {
          return fetch(`${url}?${Math.random()}`).then(response => {
            if (!response.ok) throw Error(`${url}?${Math.random()}` + 'Not ok');
            return cache.put(url, response);
          })
        })
      ))
  );
});
