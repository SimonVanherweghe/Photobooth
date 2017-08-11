#!/bin/bash

for f in "$@"
do
	convert "$f" -shave 2x12 shaved.jpg
	convert shaved.jpg -crop 648x644 +repage +adjoin part.jpg
	montage -mode concatenate part-*.jpg "$f"
	base=$(basename "$f")
	mv "$f" "slideshow/images/path/$base"
done
