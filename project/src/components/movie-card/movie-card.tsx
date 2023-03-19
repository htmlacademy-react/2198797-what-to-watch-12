
import { MovieDescription } from '../../types/movie';
import VideoPlayer from '../video-player/video-player';
import {Link} from 'react-router-dom';
import {useState} from 'react';

const PREVIEW_TIMEOUT = 1000;

type MovieCardProps = {
  movie: MovieDescription;
}

let timeoutId: ReturnType<typeof setTimeout>;


function MovieCard({movie}: MovieCardProps): JSX.Element {

  const [isVideoPlaing, setVideoPlaing] = useState(false);


  function mouseOverHandler(){
    timeoutId = setTimeout(() => setVideoPlaing(true), PREVIEW_TIMEOUT);
  }

  function mouseOutHandler() {
    clearTimeout(timeoutId);
    setVideoPlaing(false);
  }

  return (
    <article onMouseOver={mouseOverHandler} onMouseOut = {mouseOutHandler} className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        {
          isVideoPlaing
            ? <VideoPlayer src={movie.previewVideoLink} poster={movie.previewImage}/>
            : <img src={movie.previewImage} alt={movie.name} width="280" height="175" />
        }
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`/films/${movie.id}`}>
          {movie.name}
        </Link>
      </h3>
    </article>
  );
}
export default MovieCard;
