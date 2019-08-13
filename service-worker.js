self.addEventListener('install', function(event) {
    console.log('Installed sw.js', event);
});

self.addEventListener('activate', function(event) {
  console.log('Activated sw.js', event);
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