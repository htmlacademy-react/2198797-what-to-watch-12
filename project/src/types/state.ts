import {store} from '../store/index';
import {AuthorizationStatus} from '../const';
import { MovieDescription, ReviewDescription } from './movie';
import { Genre } from './movie';

export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
};

export type MoviesData = {
    genre: Genre;
    filteredMovies: MovieDescription[];
    movies: MovieDescription[];
    similarMovies: MovieDescription[];
    favoriteMovies: MovieDescription[];
    reviews: ReviewDescription[];
    isMoviesDataLoading: boolean;
    isMovieDataLoading: boolean;
    movie: MovieDescription | null;
    favoriteCounter: number;
}

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
