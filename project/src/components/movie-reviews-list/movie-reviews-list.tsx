import MovieReview from '../movie-review/movie-review';
import { useAppSelector } from '../../hooks';


function MovieReviewsList(): JSX.Element {

  const reviews = useAppSelector((state) => state.reviews);

  return (

    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {
          reviews.map((element) => <MovieReview key={element.id} review={element}/>)
        }
      </div>
    </div>
  );
}

export default MovieReviewsList;
