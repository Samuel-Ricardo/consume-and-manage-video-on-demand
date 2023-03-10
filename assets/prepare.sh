ffmpeg \
  -i ./video.mp4                                       \  #input video
  -vcodec h264                                         \  #video codec - most compatible
  -acodec aac                                          \  #audio codec - most compatible
  -movflags frag_keyframe+empty_moov+default_base_moof \  # multiples video fragments
  -bv 1500k                                            \  #bitrate
  -maxrate 1500k                                       \  #max bitrate
  -bufsize 1000k                                       \  #buffer size
  -f mp4                                               \  #output format
  video.mp4                                            \  #output file
