#!/bin/bash

for f in "$@"
do
	convert "$f" -shave 2x12 shaved.jpg
	convert shaved.jpg -crop 648x644 +repage +adjoin part.jpg
	montage -mode concatenate part-*.jpg "results/$f"
	mv "results/$f" "../WatchAndShow/images/$f"
done