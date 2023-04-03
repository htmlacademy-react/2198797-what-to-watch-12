import {createReducer} from '@reduxjs/toolkit';
import {changeGenre, getFilteredMovies, loadMovies, setMoviesDataLoadingStatus,requireAuthorization, setError} from './action';
import { AuthorizationStatus } from '../const';
import { MovieDescription, Genre} from '../types/movie';

type InitialState = {
  genre: Genre;
  filteredMovies: MovieDescription[];
  movies: MovieDescription[];
  authorizationStatus: AuthorizationStatus;
  isMoviesDataLoading: boolean;
  error: string | null;
}

const initialState: InitialState = {
  genre: 'All genres',
  filteredMovies: [],
  movies: [],
  authorizationStatus: AuthorizationStatus.Unknown,
  isMoviesDataLoading: false,
  error: null,
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
    .addCase(setMoviesDataLoadingStatus, (state, action) => {
      state.isMoviesDataLoading = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    });
});

export {reducer};
