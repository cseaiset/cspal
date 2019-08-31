Notification.requestPermission(function(status) {
    console.log('Notification permission status:', status);
});

function displayNotification() {
    if (Notification.permission == 'granted') {
        navigator.serviceWorker.getRegistration().then(function(reg) {
        var options = {
        body: 'Welcome to CSPAL',
        icon: 'assets/icons/48x48.png',
        vibrate: [100, 50, 100],
        data: {
          dateOfArrival: Date.now(),
          primaryKey: 1
        },
            actions: [
          {action: 'explore', title: 'Open',
            icon: 'assets/icons/checkmark.png'},
          {action: 'close', title: 'Close',
            icon: 'assets/icons/crossmark.png'},
        ]

      };

        reg.showNotification('Hello world!', options);
        });
    }

    } else if (Notification.permission == 'blocked') {break;} 
        else {
        Notification.requestPermission(function(status) {
            console.log('Notification permission status:', status);
        });
    }
}

displayNotification()
