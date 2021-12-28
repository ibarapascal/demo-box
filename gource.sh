gource \
    -s .5 \
    -1280x720 \
    --auto-skip-seconds .5 \
    | ffmpeg -y -r 30 -f image2pipe -vcodec ppm -i - -b 65536K docs-gource.mp4
