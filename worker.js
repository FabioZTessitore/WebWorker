var counter = 0;
var id;

self.addEventListener('message', function (e) {
  if (e.data === 'start') {
    self.postMessage('start');
    id = setInterval( function () {
      counter++;
    }, 5);
  } else if (e.data === 'stop') {
    self.postMessage('stop');
    self.postMessage(counter);
    clearInterval(id);
    self.close();
  }
});
