Notification.requestPermission(function(status) {
    console.log('Notification permission status:', status);
});

function displayNotification() {
  if (Notification.permission == 'granted') {
    navigator.serviceWorker.ready.then(function(reg) {
      var options = {
        body: 'From now recieve important updates through notifications!',
        icon: 'assets/icons/48x48.png',
        vibrate: [100, 50, 100],
        data: {
          dateOfArrival: Date.now(),
          primaryKey: 1
        }
      };
      reg.showNotification('Welcome to CSPAL', options);
    });
  }

  else if (Notification.permission === "blocked") {
  } 
  else {
	Notification.requestPermission(function(status) {
    console.log('Notification permission status:', status);
	});
  }
}
