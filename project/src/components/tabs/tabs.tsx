import { Link } from 'react-router-dom';
import { MovieInfoType } from '../../const';
import MovieReviewsList from '../movie-reviews-list/movie-reviews-list';
import MovieDetails from '../movie-details/movie-details';
import MovieOverview from '../movie-overview/movie-overview';
import { useAppSelector } from '../../hooks';
import NotFoundPage from '../../pages/not-found-page/not-found-page';

type TabsProps = {
    movieInfoType: string;
}


function Tabs({movieInfoType}: TabsProps): JSX.Element {

  const movie = useAppSelector((state) => state.movie);
  const reviews = useAppSelector((state) => state.reviews);

  if(movie === null){
    return(<NotFoundPage/>);
  }

  return (
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          <li className={`film-nav__item  ${movieInfoType === MovieInfoType.Overview ? 'film-nav__item--active' : ''}`}>
            <Link className="film-nav__link" to={`/films/${movie.id}`}>Overview</Link>
          </li>
          <li className={`film-nav__item  ${movieInfoType === MovieInfoType.Details ? 'film-nav__item--active' : ''}`}>
            <Link className="film-nav__link" to={`/films/${movie.id}/details`}>Details</Link>
          </li>
          <li className={`film-nav__item  ${movieInfoType === MovieInfoType.Reviews ? 'film-nav__item--active' : ''}`}>
            <Link className="film-nav__link" to={`/films/${movie.id}/reviews` }>Reviews</Link>
          </li>
        </ul>
      </nav>
      {(movieInfoType === MovieInfoType.Reviews && <MovieReviewsList reviews={reviews}/>) ||
      (movieInfoType === MovieInfoType.Details && <MovieDetails movie={movie}/>) ||
      (movieInfoType === MovieInfoType.Overview && <MovieOverview movie={movie}/>) }
    </div>
  );
}

export default Tabs;
