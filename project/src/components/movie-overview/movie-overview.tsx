import { MovieRating, RatingValue } from '../../const';
import { useAppSelector } from '../../hooks';
import { getMovie } from '../../store/movies-data/selectors';
import NotFoundPage from '../../pages/not-found-page/not-found-page';


function MovieOverview(): JSX.Element {

  const movie = useAppSelector(getMovie);

  if(movie === null){
    return(<NotFoundPage/>);
  }

  let rating = RatingValue.Awesome;

  if(movie.rating < MovieRating.VeryGood){
    rating = RatingValue.VeryGood;
  }
  if(movie.rating < MovieRating.Good){
    rating = RatingValue.Good;
  }
  if(movie.rating < MovieRating.Normal){
    rating = RatingValue.Mormal;
  }
  if(movie.rating < MovieRating.Bad){
    rating = RatingValue.Bad;
  }

  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">{movie.rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{rating}</span>
          <span className="film-rating__count">{movie.scoresCount}</span>
        </p>
      </div>

      <div className="film-card__text">
        <p>{movie.description}</p>

        <p className="film-card__director"><strong>Director: {movie.director}</strong></p>

        <p className="film-card__starring"><strong>Staring:{movie.starring.map((element, index) => (<span key={`${index + 1}`}>{`${element}, `} </span>))}</strong>
        </p>
      </div>
    </>

  );
}

export default MovieOverview;
