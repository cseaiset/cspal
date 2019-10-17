var cacheName = 'cspal-v1';
var filesToCache = [
    '/',
    '/assets/css/bootstrap.min.css',
    '/assets/css/main.css',
    '/assets/css/style.min.css',
    '/assets/js/bootstrap.min.js',
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
                    if (cName !== cacheName) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});
self.addEventListener('fetch', function(event) {
    event.respondWith(
        fetch(event.request)
    );
});

//web push notification
/*self.addEventListener('push', function(e) {
  var options = {
    body: 'Welcome to CSPAL',
    icon: 'assets/icons/48x48.png',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: '2'
    },
    actions: [
      {action: 'explore', title: 'Open',
        icon: 'assets/icons/checkmark.png'},
      {action: 'close', title: 'Close',
        icon: 'assets/icons/crossmark.png'},
    ]
  };
  e.waitUntil(
    self.registration.showNotification('CSPAL', options)
  );
});

//data payload

self.addEventListener('push', function(e) {
  var body;

  if (e.data) {
    body = e.data.text();
  } else {
    body = 'Welcome to CSPAL';
  }

  var options = {
    body: body,
    icon: 'assets/icons/48x48.png',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    },
    actions: [
      {action: 'explore', title: 'Open'},
      {action: 'close', title: 'Close'},
    ]
  };
  e.waitUntil(
    self.registration.showNotification('CSPAL', options)
  );
});

//notification event listeners
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
        clients.openWindow('https://cspal.tk/index.html');
        notification.close();
    }
});
*/