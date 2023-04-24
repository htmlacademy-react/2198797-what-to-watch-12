import { ReviewDescription } from '../../types/movie';
import { humanizedDate } from '../../utils';

type MovieReviewProps = {
    review: ReviewDescription;
}


function MovieReview({review}: MovieReviewProps): JSX.Element{


  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text" data-testid="rendered">{review.comment}</p>

        <footer className="review__details">
          <cite className="review__author">{review.user.name}</cite>
          <time className="review__date" dateTime="2016-12-24">{humanizedDate(review.date)}</time>
        </footer>
      </blockquote>

      <div className="review__rating">{review.rating}</div>
    </div>
  );
}

export default MovieReview;
