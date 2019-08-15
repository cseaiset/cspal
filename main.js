Notification.requestPermission(function(status) {
    console.log('Notification permission status:', status);
});

function displayNotification() {
    if (Notification.permission === "granted") {
        navigator.serviceWorker.ready.then(function(reg) {
            var options = {
                body: 'SC Assignment added!',
                icon: 'assets/icons/48x48.png',
                vibrate: [300,0,0]
                data: {
                    dateOfArrival: Date.now(),
                    primaryKey: 1
                }
            };
            reg.showNotification('Homeworks Alert', options);
        });
    } 
    else if (Notification.permission === "blocked") {} 
    else {
        Notification.requestPermission(function(status) {
            console.log('Notification permission status:', status);
    	});
    }
}

displayNotification()