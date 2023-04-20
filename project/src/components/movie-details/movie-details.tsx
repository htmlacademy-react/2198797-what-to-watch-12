import { useAppSelector } from '../../hooks';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import { getMovie } from '../../store/movies-data/selectors';
import { formatTime } from '../../utils';
function MovieDetails(): JSX.Element {

  const movie = useAppSelector(getMovie);

  if(movie === null){
    return(<NotFoundPage/>);
  }


  return (

    <div className="film-card__text film-card__row">
      <div className="film-card__text-col">
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Director</strong>
          <span className="film-card__details-value">{movie.director}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Starring</strong>
          <span className="film-card__details-value">
            {
              movie.starring.map((element, index) => (
                <span key={`${index + 1}`} >
                  {element}
                  <br/>
                </span>
              ))
            }
          </span>
        </p>
      </div>

      <div className="film-card__text-col">
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Run Time</strong>
          <span className="film-card__details-value">{formatTime(movie.runTime * 60)}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Genre</strong>
          <span className="film-card__details-value">{movie.genre}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Released</strong>
          <span className="film-card__details-value">{movie.released}</span>
        </p>
      </div>
    </div>

  );
}

export default MovieDetails;
