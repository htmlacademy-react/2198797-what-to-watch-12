import {createReducer} from '@reduxjs/toolkit';
import {changeGenre, getFilteredMovies, loadMovies, loadMovie, setMoviesDataLoadingStatus,requireAuthorization, setMovieDataLoadingStatus, loadReviews, loadSimilarMovies} from './action';
import { AuthorizationStatus } from '../const';
import { MovieDescription, Genre, ReviewDescription} from '../types/movie';

type InitialState = {
  genre: Genre;
  filteredMovies: MovieDescription[];
  movies: MovieDescription[];
  similarMovies: MovieDescription[];
  reviews: ReviewDescription[];
  authorizationStatus: AuthorizationStatus;
  isMoviesDataLoading: boolean;
  isMovieDataLoading: boolean;
  movie: MovieDescription | null;
}

const initialState: InitialState = {
  genre: 'All genres',
  filteredMovies: [],
  movies: [],
  similarMovies: [],
  reviews: [],
  authorizationStatus: AuthorizationStatus.Unknown,
  isMoviesDataLoading: false,
  isMovieDataLoading: false,
  movie: null,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.genre = action.payload;
      state.filteredMovies = (state.genre === 'All genres' ? state.movies : state.movies.filter((element) => element.genre === state.genre));
    })
    .addCase(getFilteredMovies, (state, action) =>{
      state.filteredMovies = (state.genre === 'All genres' ? state.movies : state.movies.filter((element) => element.genre === state.genre));
    })
    .addCase(loadMovies, (state, action) => {
      state.movies = action.payload;
    })
    .addCase(loadSimilarMovies, (state, action) => {
      state.similarMovies = action.payload;
    })
    .addCase(loadMovie, (state, action) => {
      state.movie = action.payload;
    })
    .addCase(loadReviews, (state, action) => {
      state.reviews = action.payload;
    })
    .addCase(setMoviesDataLoadingStatus, (state, action) => {
      state.isMoviesDataLoading = action.payload;
    })
    .addCase(setMovieDataLoadingStatus, (state, action) => {
      state.isMovieDataLoading = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    });
});

export {reducer};
