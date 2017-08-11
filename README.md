# Slideshow app voor een photoBooth
* Een photobooth app op de iPad installeren http://projectbox.com/pocketbooth/
* iPad via usb met mac verbinden

## Auto ipad import workflow
* Dubbelklikken en installeren
* via 'Image Capture' de automator task triggeren
* De automator task haalt de nieuwe foto's op, triggert een shellscript, wacht 5 seconden en start dan opnieuw.

## transpose.sh
* Dit shellscript knipt de verticale fotostrook in 3 en plaatst de foto's horizontaal naast elkaar

## WatchAndShow
* Gebaseerd op electron-quick-start
https://github.com/electron/electron-quick-start
* Foto's worden uit een mapje ingelezen en in willekeurige volgorde getoond
* Nieuwe foto's in het mapje worden automatisch gedetecteerd, eerstvolgend in de slideshow getoond en daarna mee opgenomen bij de rest van de foto's.

## Run it
* Automator task runnen
* WatchAndShow runnen via 'npm start'
