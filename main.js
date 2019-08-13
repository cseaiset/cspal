Notification.requestPermission(result =>  {
  console.log(result)
  if (result === 'granted') {
    alert('Thanks for giving me permissions. We will notify yu every time there is an important update. Happy Homeworking!')
  }
});

Notification.requestPermission(result => {
  if (result === 'granted') {
    navigator.serviceWorker.ready.then(registration => {
      registration.showNotification('New Message', {
        body: 'Welcome to CSPAL',
        tag: 'vibration-sample'
      });
    });
  }
});

Notification.requestPermission(result => {
  if (result === 'granted') {

    if ('Notification' in window) {
      navigator.serviceWorker.ready.then(registration => {
        registration.showNotification('Vibration Sample', {
          body: 'Buzz! Buzz!',
          tag: 'vibration-sample'
        });
      });
    }

  }
});