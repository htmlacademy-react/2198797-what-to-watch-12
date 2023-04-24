import MovieReview from '../movie-review/movie-review';
import { useAppSelector } from '../../hooks';
import { getReviews } from '../../store/movies-data/selectors';


function MovieReviewsList(): JSX.Element {

  const reviews = useAppSelector(getReviews);

  return (

    <div className="film-card__reviews film-card__row" data-testid="reviewsList">
      <div className="film-card__reviews-col">
        {
          reviews.map((element) => <MovieReview key={element.id} review={element}/>)
        }
      </div>
    </div>
  );
}

export default MovieReviewsList;
