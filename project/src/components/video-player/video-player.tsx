import {useEffect, useRef} from 'react';

type VideoPlayerProps = {
  src: string;
  poster: string;
}


function VideoPlayer({src, poster}: VideoPlayerProps): JSX.Element {

  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current){
      videoRef.current.volume = 0;
      videoRef.current.play();
    }

  }, []);

  return (
    <div className="track__status">
      <video poster={poster} src={src} ref={videoRef} />
    </div>
  );
}

export default VideoPlayer;
