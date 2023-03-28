import {createAction} from '@reduxjs/toolkit';

export const changeGenre = createAction<string>('changeGednre');

export const getFilteredMovies = createAction('getFilterdMovies');

