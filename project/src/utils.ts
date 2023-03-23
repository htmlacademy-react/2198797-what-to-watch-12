import { MovieDescription } from './types/movie';


export function getSimilarFilms(movies: MovieDescription[], genre: string, currentMovieId: number): MovieDescription[]{
  const tmp = movies.filter((element) => element.genre === genre && element.id !== currentMovieId);
  return tmp.filter((element, index) => index < 4);
}
