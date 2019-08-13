Notification.requestPermission(result =>  {
  console.log(result)
  if (result === 'granted') {
    alert('thanks for giving me permissions')
  }
});

Notification.requestPermission(result => {
  if (result === 'granted') {
    navigator.serviceWorker.ready.then(registration => {
      registration.showNotification('Vibration Sample', {
        body: 'Buzz! Buzz!',
        tag: 'vibration-sample'
      });
    });
  }
});