import {createReducer} from '@reduxjs/toolkit';
import {changeGenre, getFilteredMovies} from './action';
import { movies } from '../mocks/movies';


const initialState = {
  genre: 'All genres',
  filteredMovies: movies,
  movies,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.genre = action.payload;
      state.filteredMovies = (state.genre === 'All genres' ? state.movies : movies.filter((element) => element.genre === state.genre));
    })
    .addCase(getFilteredMovies, (state) =>{
      //state.filteredMovies = (state.genre === 'All genres' ? state.movies : movies.filter((element) => element.genre === state.genre));
      //state.filteredMovies = movies.filter((element) => element.genre === 'Crime');
      //console.log(state.filteredMovies);
    });
});

export {reducer};
