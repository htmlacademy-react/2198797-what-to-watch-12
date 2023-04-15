import Logo from '../../components/logo/logo';
import MoviesList from '../../components/movies-list/movies-list';
import { useAppSelector } from '../../hooks';
import { getMovies } from '../../store/movies-data/selectors';

function MyListPage(): JSX.Element {

  const movies = useAppSelector(getMovies);

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo lightLogo = {false}/>

        <h1 className="page-title user-page__title">My list <span className="user-page__film-count">8</span></h1>
        <ul className="user-block">
          <li className="user-block__item">
            <div className="user-block__avatar">
              <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
            </div>
          </li>
          <li className="user-block__item">
            <a href="#/" className="user-block__link">Sign out</a>
          </li>
        </ul>
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <div className="catalog__films-list">
          <MoviesList movies={movies}/>
        </div>
      </section>

      <footer className="page-footer">
        <Logo lightLogo/>

        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  );
}

export default MyListPage;
