import { MovieDescription } from '../../types/movie';
import MovieCard from '../movie-card/movie-card';

type MoviesListProp = {
    movies: MovieDescription[];
};


function MoviesList({movies}: MoviesListProp): JSX.Element {

  return (
    <>
      {movies.map((element) =>
        (<MovieCard movie={element} key={element.id}/>)
      )}
    </>
  );
}

export default MoviesList;
