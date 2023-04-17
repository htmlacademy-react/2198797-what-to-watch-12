import { useParams } from 'react-router-dom';
import { useState, useEffect, useRef} from 'react';
import { useAppSelector } from '../../hooks';
import { getMovies } from '../../store/movies-data/selectors';
import { formatTime } from '../../utils';
import { useNavigate } from 'react-router-dom';

const controls = {
  duration: 0,
};

function PlayerPage(): JSX.Element {

  const movies = useAppSelector(getMovies);
  const params = useParams();
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const progressRef = useRef<HTMLProgressElement | null>(null);
  const togglerRef = useRef<HTMLDivElement | null>(null);


  const fullScreenButtonHendler = () => {
    if(videoRef.current !== null){
      videoRef.current.requestFullscreen();
    }
  };

  const exitButtonHendler = () => {
    navigate(`/films/${Number(params.id)}`);
  };

  useEffect(() => {
    if(videoRef.current !== null){
      videoRef.current.addEventListener('timeupdate', () => {
        if(videoRef.current !== null){
          setCurrentTime(videoRef.current.currentTime);
        }
      });
    }
  },[]);

  useEffect(() => {
    if(progressRef.current !== null && videoRef.current !== null && togglerRef.current !== null){
      if(currentTime !== videoRef.current.currentTime){
        const position = Math.floor(currentTime / controls.duration * 100);
        progressRef.current.value = position;
        togglerRef.current.style.left = `${position}%`;
      }
    }
  },[currentTime]);

  useEffect(() => {
    let isVideoPlayerMounted = true;

    if (videoRef.current === null) {
      return;
    }

    videoRef.current.addEventListener('loadeddata', () => {
      if (isVideoPlayerMounted) {
        setIsLoading(false);
        if(videoRef.current !== null){
          controls.duration = videoRef.current.duration;
        }
      }
    });

    if (isPlaying) {
      videoRef.current.play();
      return;
    }

    videoRef.current.pause();
    return () => {
      isVideoPlayerMounted = false;
    };
  }, [isPlaying]);

  return (
    <div className="player">
      <video src={movies[Number(params.id) - 1].videoLink} className="player__video " poster={movies[Number(params.id) - 1].backgroundImage} ref={videoRef} ></video>

      <button type="button" className="player__exit" onClick={exitButtonHendler}>Exit</button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value="0" max="100" ref={progressRef}></progress>
            <div className="player__toggler" style={{left: '0%'}} ref={togglerRef}>Toggler</div>
          </div>
          <div className="player__time-value">{`-${formatTime(controls.duration - currentTime)}`}</div>
        </div>

        <div className="player__controls-row">
          <button type="button"
            className="player__play"
            disabled={isLoading}
            onClick={() => setIsPlaying(!isPlaying)}
          >
            <svg viewBox="0 0 19 19" width="19" height="19">
              <use xlinkHref={isPlaying ? '#pause' : '#play-s'}></use>
            </svg>
            <span>Play</span>
          </button>
          <div className="player__name">{movies[Number(params.id) - 1].name}</div>

          <button type="button" className="player__full-screen" onClick={fullScreenButtonHendler}>
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default PlayerPage;
