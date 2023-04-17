import Logo from '../../components/logo/logo';
import MoviesList from '../../components/movies-list/movies-list';
import GenreList from '../../components/genres-list/genres-list';
import UserComponent from '../../components/user-component/user-component';
import {useAppSelector} from '../../hooks';
import { useState } from 'react';
import { getMovies, getFilteredMovies } from '../../store/movies-data/selectors';
import { useNavigate } from 'react-router-dom';
import MyListButton from '../../components/my-list-button/my-list-button';


const NUMBER_MOVIES_PER_STEP = 8;

function MainPage(): JSX.Element {

  const navigate = useNavigate();

  const movies = useAppSelector(getFilteredMovies);
  const initialMovies = useAppSelector(getMovies);

  const [moviesNumber, setMoviesNumber] = useState(NUMBER_MOVIES_PER_STEP);

  function showMoreButtonHandler(){
    setMoviesNumber(moviesNumber + NUMBER_MOVIES_PER_STEP);
  }

  function playButtonHandler(){
    navigate(`/player/${movies[0].id}`);
  }


  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img src={movies[0].backgroundImage} alt={movies[0].name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header film-card__head">
          <Logo lightLogo = {false}/>
          <UserComponent/>
        </header>

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src={movies[0].posterImage} alt={movies[0].name} width="218" height="327" />
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{movies[0].name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{movies[0].genre}</span>
                <span className="film-card__year">{movies[0].released}</span>
              </p>

              <div className="film-card__buttons">
                <button onClick={playButtonHandler} className="btn btn--play film-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <MyListButton filmId={movies[0].id}/>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <ul className="catalog__genres-list">
            <GenreList movies={initialMovies}/>
          </ul>

          <div className="catalog__films-list">
            <MoviesList movies={movies.slice(0, moviesNumber)}/>
          </div>

          { (movies.length > moviesNumber) &&
          <div className="catalog__more">
            <button onClick={showMoreButtonHandler} className="catalog__button" type="button">Show more</button>
          </div>}
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

export default MainPage;
