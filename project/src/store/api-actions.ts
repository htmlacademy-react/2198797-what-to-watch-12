import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../types/state.js';
import { MovieDescription, ReviewDescription} from '../types/movie.js';
import {loadMovies, loadMovie, requireAuthorization, setMoviesDataLoadingStatus, redirectToRoute, getFilteredMovies, loadReviews, loadSimilarMovies} from './action';
import {APIRoute, AuthorizationStatus, AppRoute } from '../const';
import { UserData } from '../types/user-data.js';
import {saveToken, dropToken} from '../services/token';
import { AuthData } from '../types/auth-data.js';
import { ReviewData} from '../types/review-data.js';
import {toast} from 'react-toastify';


export const fetchMoviesAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'FetchMovies',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setMoviesDataLoadingStatus(true));
    const {data} = await api.get<MovieDescription[]>(APIRoute.Movies);
    dispatch(setMoviesDataLoadingStatus(false));
    dispatch(loadMovies(data));
    dispatch(getFilteredMovies());
  },
);

export const fetchMovieAction = createAsyncThunk<void, number, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'FetchMovie',
  async (_arg, {dispatch, extra: api}) => {
    try{
      const {data} = await api.get<MovieDescription>(`${APIRoute.Movies}/${_arg}`);
      dispatch(loadMovie(data));
    } catch {
      dispatch(redirectToRoute(AppRoute.Error));
    }
  },
);

export const fetchReviewsAction = createAsyncThunk<void, number, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'FetchReviews',
  async (_arg, {dispatch, extra: api}) => {
    try{
      const {data} = await api.get<ReviewDescription[]>(`${APIRoute.Comments}/${_arg}`);
      dispatch(loadReviews(data));
    } catch {
      dispatch(redirectToRoute(AppRoute.Error));
    }
  },
);

export const fetchSimilarMoviesAction = createAsyncThunk<void, number, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'FetchSimilarMovies',
  async (_arg, {dispatch, extra: api}) => {
    try{
      const {data} = await api.get<MovieDescription[]>(`${APIRoute.Movies}/${_arg}/similar`);
      dispatch(loadSimilarMovies(data));
    } catch {
      dispatch(redirectToRoute(AppRoute.Error));
    }
  },
);

export const addReviewAction = createAsyncThunk<void, ReviewData,{
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'addReview',
  async ({comment, rating, filmId},{dispatch, extra: api}) => {
    try{
      await api.post<UserData>(`${APIRoute.Comments}/${filmId}`, {comment, rating});
      dispatch(redirectToRoute(`/films/${filmId}/reviews`));
    } catch {
      toast.error('Sending failed');
    }
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }>(
    'checkAuth',
    async (_arg, {dispatch, extra: api}) => {
      try {
        await api.get(APIRoute.Login);
        dispatch(requireAuthorization(AuthorizationStatus.Auth));
      } catch {
        dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
      }
    },
  );

export const loginAction = createAsyncThunk<void, AuthData, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }>(
    'login',
    async ({login: email, password}, {dispatch, extra: api}) => {
      const {data: {token}} = await api.post<UserData>(APIRoute.Login, {email, password});
      saveToken(token);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
      dispatch(redirectToRoute(AppRoute.Root));
    },
  );

export const logoutAction = createAsyncThunk<void, undefined, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }>(
    'logout',
    async (_arg, {dispatch, extra: api}) => {
      await api.delete(APIRoute.Logout);
      dropToken();
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    },
  );
