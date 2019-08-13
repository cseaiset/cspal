Notification.requestPermission(result =>  {
  console.log(result)
  if (result === 'granted') {
    alert('Thanks for giving me permissions. We will notify yu every time there is an important update. Happy Homeworking!')
  }
});

Notification.requestPermission(result => {
  if (result === 'granted') {
    navigator.serviceWorker.ready.then(registration => {
      registration.showNotification('Vibration Sample', {
        body: 'Welcome to CSPAL',
        tag: 'vibration-sample'
      });
    });
  }
});