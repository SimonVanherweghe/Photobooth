// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const chokidar = require('chokidar')
const watchDir = './images'

let watcher;
let images = [];
let duration = 5;
let doTimeOut=false;
let nextImage = '';

const $img = document.querySelector('.image');

const showImage = () => {
  $img.setAttribute('src',nextImage);
  nextImage = getRandomImage();
  setTimeout(showImage, duration*1000);
}

const getRandomImage = () => images[Math.floor(Math.random()*images.length)];

const setWatcher = () => {
  watcher = chokidar.watch(watchDir, {
    ignored: /[\/\\]\./, persistent: true
  });

  watcher.on('add', onNewImage)
}

const onNewImage = path => {
  images.push(path);
  nextImage = path;
}

setWatcher();
showImage();