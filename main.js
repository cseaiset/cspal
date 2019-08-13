Notification.requestPermission(result =>  {
  console.log(result)
  if (result === 'granted') {
    alert('thanks for giving me permissions')
  }
});