import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { fetchMoviesAction, fetchMovieAction, fetchReviewsAction, fetchSimilarMoviesAction} from '../api-actions';
import { MoviesData } from '../../types/state';
import { Genre } from '../../types/movie';


const initialState: MoviesData = {
  genre: 'All genres',
  filteredMovies: [],
  movies: [],
  similarMovies: [],
  reviews: [],
  isMoviesDataLoading: false,
  isMovieDataLoading: false,
  movie: null,
};


export const moviesData = createSlice({
  name: NameSpace.Movies,
  initialState,
  reducers: {
    changeGenre: (state, action: PayloadAction<{genre: Genre}>) => {
      const {genre} = action.payload;
      state.genre = genre;
      state.filteredMovies = (state.genre === 'All genres' ? state.movies : state.movies.filter((element) => element.genre === state.genre));
    },
    getFilteredMovies: (state) => {
      state.filteredMovies = (state.genre === 'All genres' ? state.movies : state.movies.filter((element) => element.genre === state.genre));
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchMoviesAction.pending, (state) => {
        state.isMoviesDataLoading = true;
      })
      .addCase(fetchMoviesAction.fulfilled, (state, action) => {
        state.movies = action.payload;
        state.filteredMovies = (state.genre === 'All genres' ? state.movies : state.movies.filter((element) => element.genre === state.genre));
        state.isMoviesDataLoading = false;
      })
      .addCase(fetchMovieAction.pending, (state) => {
        state.isMovieDataLoading = true;
      })
      .addCase(fetchMovieAction.fulfilled, (state, action) => {
        state.movie = action.payload;
        state.isMovieDataLoading = false;
      })
      .addCase(fetchReviewsAction.fulfilled, (state, action) => {
        state.reviews = action.payload;
      })
      .addCase(fetchSimilarMoviesAction.fulfilled, (state, action) => {
        state.similarMovies = action.payload;
      });
  }
});

