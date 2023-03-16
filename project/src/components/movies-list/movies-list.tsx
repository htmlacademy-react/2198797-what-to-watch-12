import { MovieDescription } from '../../types/movie';
import MovieCard from '../movie-card/movie-card';
import {useState} from 'react';

type MoviesListProp = {
    movies: MovieDescription[];
};


function MoviesList({movies}: MoviesListProp): JSX.Element {
  const active = useState<MovieDescription>();

  const mouseMoveHandler = (movie: MovieDescription) =>{
    active[1](movie);
  };

  return (
    <>
      {movies.map((element) =>
        (<MovieCard movie={element} key={element.id} onMovie={mouseMoveHandler}/>)
      )}
    </>
  );
}

export default MoviesList;
