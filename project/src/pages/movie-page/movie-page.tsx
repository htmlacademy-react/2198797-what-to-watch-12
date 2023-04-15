import Logo from '../../components/logo/logo';
import { useParams, Link } from 'react-router-dom';
import Tabs from '../../components/tabs/tabs';
import MoviesSimilarList from '../../components/movies-similar-list/movies-similar-list';
import { useAppSelector, useAppDispatch} from '../../hooks';
import UserComponent from '../../components/user-component/user-component';
import { AuthorizationStatus} from '../../const';
import { fetchMovieAction, fetchReviewsAction, fetchSimilarMoviesAction} from '../../store/api-actions';
import NotFoundPage from '../not-found-page/not-found-page';
import { useEffect } from 'react';
import { memo } from 'react';
import { getMovies} from '../../store/movies-data/selectors';
import { getAuthorizationStatus } from '../../store/user-process/selectors';


type MoviePageProp = {
  movieInfoType: string;
};

function MoviePage({movieInfoType}: MoviePageProp): JSX.Element {
  const params = useParams();
  const dispatch = useAppDispatch();
  const id = Number(params.id);

  useEffect(
    () => {
      dispatch(fetchMovieAction(id));
      dispatch(fetchReviewsAction(id));
      dispatch(fetchSimilarMoviesAction(id));
    });


  const movies = useAppSelector(getMovies);
  const authenticationStatus = useAppSelector(getAuthorizationStatus);

  if (movies.length < id){
    return (
      <NotFoundPage />
    );
  }


  return (
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={movies[id - 1].backgroundImage} alt={movies[id - 1].name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header film-card__head">
            <Logo lightLogo = {false}/>

            <ul className="user-block">
              <li className="user-block__item">
                <div className="user-block__avatar">
                  <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
                </div>
              </li>
              <UserComponent/>
            </ul>
          </header>

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{movies[id - 1].name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{movies[id - 1].genre}</span>
                <span className="film-card__year">{movies[id - 1].released}</span>
              </p>

              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                  <span className="film-card__count">9</span>
                </button>
                {authenticationStatus === AuthorizationStatus.Auth && <Link className="btn film-card__button" to={`/films/${Number(params.id)}/review`}>Add review</Link>}
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={movies[id - 1].posterImage} alt={movies[id - 1].name} width="218" height="327" />
            </div>

            <Tabs movieInfoType={movieInfoType} id={id}/>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <div className="catalog__films-list">
            <MoviesSimilarList/>
          </div>
        </section>

        <footer className="page-footer">
          <Logo lightLogo/>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default memo(MoviePage);
