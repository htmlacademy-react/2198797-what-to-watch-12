import {NameSpace} from '../../const';
import {State} from '../../types/state';
import { MovieDescription, ReviewDescription } from '../../types/movie';
import { Genre } from '../../types/movie';

export const getMovies = (state: State): MovieDescription[] => state[NameSpace.Movies].movies;
export const getMovie = (state: State): MovieDescription | null => state[NameSpace.Movies].movie;
export const getReviews = (state: State): ReviewDescription[] => state[NameSpace.Movies].reviews;
export const getSimilarMovies = (state: State): MovieDescription[] => state[NameSpace.Movies].similarMovies;
export const getMoviesDataLoadingStatus = (state: State): boolean => state[NameSpace.Movies].isMoviesDataLoading;
export const getMovieDataLoadingStatus = (state: State): boolean => state[NameSpace.Movies].isMovieDataLoading;
export const getFilteredMovies = (state: State): MovieDescription[] => state[NameSpace.Movies].filteredMovies;
export const getGenre = (state: State): Genre => state[NameSpace.Movies].genre;
export const getFavoriteMovies = (state: State): MovieDescription[] => state[NameSpace.Movies].favoriteMovies;
export const getFavoriteCounter = (state: State): number => state[NameSpace.Movies].favoriteCounter;

