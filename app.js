document.addEventListener('DOMContentLoaded', function () {
  var start = document.getElementById('start');
  var stop = document.getElementById('stop');

  var worker = new Worker('worker.js');

  worker.addEventListener('message', function (e) {
    console.log(e.data);
  });

  start.addEventListener('click', function () {
    worker.postMessage('start');
  }, false);

  stop.addEventListener('click', function () {
    worker.postMessage('stop');
  }, false);

}, false);
