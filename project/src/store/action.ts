import {createAction} from '@reduxjs/toolkit';
import { MovieDescription, ReviewDescription } from '../types/movie';
import { AuthorizationStatus } from '../const';

export const changeGenre = createAction<string>('movie/changeGenre');

export const getFilteredMovies = createAction('movie/getFilterdMovies');

export const loadMovies = createAction<MovieDescription[]>('movie/loadMovies');

export const loadMovie = createAction<MovieDescription>('movie/loadMovie');

export const loadReviews = createAction<ReviewDescription[]>('movie/loadReviews');

export const loadSimilarMovies = createAction<MovieDescription[]>('movie/loadSimilarMovies');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const setMoviesDataLoadingStatus = createAction<boolean>('movie/setMoviesDataLoadingStatus');

export const redirectToRoute = createAction<string>('redirectToRoute');

export const setMovieDataLoadingStatus = createAction<boolean>('movie/setMovieDataLoadingStatus');

