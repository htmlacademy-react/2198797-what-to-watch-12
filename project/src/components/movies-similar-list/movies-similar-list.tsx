import MovieCard from '../movie-card/movie-card';
import { useAppSelector } from '../../hooks';
import { getSimilarMovies } from '../../store/movies-data/selectors';

function MoviesSimilarList(): JSX.Element {

  const movies = useAppSelector(getSimilarMovies);

  return (
    <>
      {movies.map((element) => <MovieCard movie={element} key={element.id}/>)}
    </>
  );
}

export default MoviesSimilarList;
