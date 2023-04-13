import MovieCard from '../movie-card/movie-card';
import { useAppSelector } from '../../hooks';


function MoviesSimilarList(): JSX.Element {

  const movies = useAppSelector((store) => store.similarMovies);

  return (
    <>
      {movies.map((element) => <MovieCard movie={element} key={element.id}/>)}
    </>
  );
}

export default MoviesSimilarList;
