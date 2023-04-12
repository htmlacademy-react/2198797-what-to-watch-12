import {createAction} from '@reduxjs/toolkit';
import { MovieDescription, ReviewDescription } from '../types/movie';
import { AuthorizationStatus } from '../const';

export const changeGenre = createAction<string>('changeGednre');

export const getFilteredMovies = createAction('getFilterdMovies');

export const loadMovies = createAction<MovieDescription[]>('loadMovies');

export const loadMovie = createAction<MovieDescription>('loadMovie');

export const loadReviews = createAction<ReviewDescription[]>('loadReviews');

export const loadSimilarMovies = createAction<MovieDescription[]>('loadSimilarMovies');

export const requireAuthorization = createAction<AuthorizationStatus>('requireAuthorization');

export const setMoviesDataLoadingStatus = createAction<boolean>('setMoviesDataLoadingStatus');

export const redirectToRoute = createAction<string>('redirectToRoute');

export const setMovieDataLoadingStatus = createAction<boolean>('setMovieDataLoadingStatus');

