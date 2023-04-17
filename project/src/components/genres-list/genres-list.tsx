import { MovieDescription } from '../../types/movie';
import {useAppDispatch, useAppSelector} from '../../hooks';
import { getGenre } from '../../store/movies-data/selectors';
import { moviesData } from '../../store/movies-data/movies-data';

type GenreListProps = {
    movies: MovieDescription[];
}


function GenreList({movies}: GenreListProps): JSX.Element {

  const dispatch = useAppDispatch();
  const currentGenre = useAppSelector(getGenre);

  const genres = new Set<string>();
  genres.add('All genres');
  movies.forEach((element) => genres.add(element.genre));

  function buttonHendler(evt: React.MouseEvent<HTMLElement>){
    evt.preventDefault();
    //(evt.currentTarget as Element).classList.add('catalog__genres-item--active');
    const newGenre = (evt.target as HTMLElement).getAttribute('data-genre');
    if(newGenre !== null){
      dispatch(moviesData.actions.changeGenre(newGenre));
    }
  }
  //${}
  return (
    <>
      {
        Array.from(genres).map((element, index) =>
          (
            <li onClick={buttonHendler} className={currentGenre === element ? 'catalog__genres-item catalog__genres-item--active' : 'catalog__genres-item'} key={`${index + 1}`}>
              <a href="#/" className="catalog__genres-link" data-genre={element}>{element}</a>
            </li>
          )
        )
      }
    </>
  );
}

export default GenreList;
