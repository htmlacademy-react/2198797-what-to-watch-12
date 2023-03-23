import { ReviewDescription } from '../../types/movie';
import MovieReview from '../movie-review/movie-review';

type MovieReviewsListProps = {
    reviews: ReviewDescription[];
}


function MovieReviewsList({reviews}: MovieReviewsListProps): JSX.Element {

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
