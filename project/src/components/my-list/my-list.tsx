import Logo from '../../components/logo/logo';
import MoviesList from '../../components/movies-list/movies-list';
import { useAppSelector } from '../../hooks';
import { getFavoriteMovies } from '../../store/movies-data/selectors';
import UserComponent from '../../components/user-component/user-component';

function MyList(): JSX.Element {

  const movies = useAppSelector(getFavoriteMovies);


  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo lightLogo = {false}/>

        <h1 className="page-title user-page__title">My list <span className="user-page__film-count">{`${movies.length}`}</span></h1>
        <UserComponent/>
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

export default MyList;
