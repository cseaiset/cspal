var cacheName = 'cspal-v1';
var filesToCache = [
    '/',
    '/hw.html',
    '/assets/css/bootstrap.min.css',
    '/assets/css/main.css',
    '/assets/css/style.min.css',
    '/assets/js/bootstrap.min.js',
    '/assets/images/dsc logo.jpg'
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
    event.waitUntil(
        caches.keys()
        .then(function(cacheNames) {
            return Promise.all(
                cacheNames.map(function(cName) {
                    if(cName !== cacheName){
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});
self.addEventListener('fetch', function(event){
    event.respondWith(
        fetch(event.request)
    );
});


//push notification event listeners
self.addEventListener('notificationclose', function(e) {
  var notification = e.notification;
  var primaryKey = notification.data.primaryKey;

  console.log('Closed notification: ' + primaryKey);
});

self.addEventListener('notificationclick', function(e) {
  var notification = e.notification;
  var primaryKey = notification.data.primaryKey;
  var action = e.action;

  if (action === 'close') {
    notification.close();
  } else {
    clients.openWindow('cspal.tk/index.html');
    notification.close();
  }
});