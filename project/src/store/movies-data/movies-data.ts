import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { fetchMoviesAction, fetchMovieAction, fetchReviewsAction, fetchSimilarMoviesAction, fetchFavoriteMovies, changeFilmStatus} from '../api-actions';
import { MoviesData } from '../../types/state';
import { Genre } from '../../types/movie';


const initialState: MoviesData = {
  genre: 'All genres',
  filteredMovies: [],
  movies: [],
  similarMovies: [],
  favoriteMovies: [],
  reviews: [],
  isMoviesDataLoading: false,
  isMovieDataLoading: false,
  movie: null,
  favoriteCounter: 0,
};


export const moviesData = createSlice({
  name: NameSpace.Movies,
  initialState,
  reducers: {
    changeGenre: (state, action: PayloadAction<Genre>) => {
      state.genre = action.payload;
      state.filteredMovies = (state.genre === 'All genres' ? state.movies : state.movies.filter((element) => element.genre === state.genre));
    },
    setFavoriteCounter: (state, action: PayloadAction<number>) =>{
      state.favoriteCounter = action.payload;
    }
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
      })
      .addCase(fetchFavoriteMovies.fulfilled, (state, action) => {
        state.favoriteMovies = action.payload;
        state.favoriteCounter = state.favoriteMovies.length;
      })
      .addCase(changeFilmStatus.fulfilled, (state, action) => {
        if(state.movies[action.payload - 1].isFavorite){
          state.favoriteCounter --;
        }else{
          state.favoriteCounter ++;
        }
        state.movies[action.payload - 1].isFavorite = !state.movies[action.payload - 1].isFavorite;

      });
  }
});

