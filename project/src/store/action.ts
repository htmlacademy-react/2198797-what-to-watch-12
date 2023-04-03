import {createAction} from '@reduxjs/toolkit';
import { MovieDescription } from '../types/movie';
import { AppRoute, AuthorizationStatus } from '../const';

export const changeGenre = createAction<string>('changeGednre');

export const getFilteredMovies = createAction('getFilterdMovies');

export const loadMovies = createAction<MovieDescription[]>('loadMovies');

export const requireAuthorization = createAction<AuthorizationStatus>('requireAuthorization');

export const setError = createAction<string | null>('setError');

export const setMoviesDataLoadingStatus = createAction<boolean>('data/setQuestionsDataLoadingStatus');

export const redirectToRoute = createAction<AppRoute>('game/redirectToRoute');


