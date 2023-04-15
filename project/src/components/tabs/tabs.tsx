import { Link } from 'react-router-dom';
import { MovieInfoType } from '../../const';
import MovieReviewsList from '../movie-reviews-list/movie-reviews-list';
import MovieDetails from '../movie-details/movie-details';
import MovieOverview from '../movie-overview/movie-overview';

type TabsProps = {
    movieInfoType: string;
    id: number;

}


function Tabs({ movieInfoType, id}: TabsProps): JSX.Element {

  return (
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          <li className={`film-nav__item  ${movieInfoType === MovieInfoType.Overview ? 'film-nav__item--active' : ''}`}>
            <Link className="film-nav__link" to={`/films/${id}`}>Overview</Link>
          </li>
          <li className={`film-nav__item  ${movieInfoType === MovieInfoType.Details ? 'film-nav__item--active' : ''}`}>
            <Link className="film-nav__link" to={`/films/${id}/details`}>Details</Link>
          </li>
          <li className={`film-nav__item  ${movieInfoType === MovieInfoType.Reviews ? 'film-nav__item--active' : ''}`}>
            <Link className="film-nav__link" to={`/films/${id}/reviews` }>Reviews</Link>
          </li>
        </ul>
      </nav>
      {(movieInfoType === MovieInfoType.Reviews && <MovieReviewsList/>) ||
      (movieInfoType === MovieInfoType.Details && <MovieDetails/>) ||
      (movieInfoType === MovieInfoType.Overview && <MovieOverview/>) }
    </div>
  );
}

export default Tabs;
