import { MovieDescription } from '../../types/movie';
import { MovieRating } from '../../const';

type MovieOverviewProps = {
    movie: MovieDescription;
}


function MovieOverview({movie}: MovieOverviewProps): JSX.Element {

  let rating = 'Awesome';

  if(movie.rating < MovieRating.VeryGood){
    rating = 'Very Good';
  }
  if(movie.rating < MovieRating.Good){
    rating = 'Very Good';
  }
  if(movie.rating < MovieRating.Normal){
    rating = 'Normal';
  }
  if(movie.rating < MovieRating.Bad){
    rating = 'Bad';
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

        <p className="film-card__starring"><strong>Starring: Bill Murray, Edward Norton, Jude Law, Willem Dafoe and other</strong></p>
      </div>
    </>

  );
}

export default MovieOverview;
