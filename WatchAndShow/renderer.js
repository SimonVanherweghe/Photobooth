// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const chokidar = require('chokidar')
const watchDir = './images'

let watcher;
let images = [];
let duration = 5;

const $img = document.querySelector('.image');

const handleFiles = (err,files) => {
  files.forEach(file => {
      images.push(`${watchDir}/${file}`)
    }
  );
}

const showImage = () => {
	let image = images[Math.floor(Math.random()*images.length)];
  $img.setAttribute('src',image);
  setTimeout(showImage, duration*1000);
}

const onNewImage = path => {
  console.log('File', path, 'has been added');
  images.push(path);
}

const setWatcher = () => {
  watcher = chokidar.watch(watchDir, {
    ignored: /[\/\\]\./, persistent: true
  });

  watcher.on('add', onNewImage)
}

// Something to use when events are received.
let log = console.log.bind(console);

setWatcher();
showImage();