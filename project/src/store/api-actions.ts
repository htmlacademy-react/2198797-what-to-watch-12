import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../types/state.js';
import { MovieDescription, ReviewDescription} from '../types/movie.js';
import {redirectToRoute} from './action';
import {APIRoute, AppRoute } from '../const';
import { UserData } from '../types/user-data.js';
import {saveToken, dropToken} from '../services/token';
import { AuthData } from '../types/auth-data.js';
import { ReviewData} from '../types/review-data.js';
import {toast} from 'react-toastify';


export const fetchMoviesAction = createAsyncThunk<MovieDescription[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'FetchMovies',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<MovieDescription[]>(APIRoute.Movies);
    return data;
  },
);

export const fetchMovieAction = createAsyncThunk<MovieDescription, number, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'FetchMovie',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<MovieDescription>(`${APIRoute.Movies}/${_arg}`);
    return data;
  },
);

export const fetchReviewsAction = createAsyncThunk<ReviewDescription[], number, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'FetchReviews',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<ReviewDescription[]>(`${APIRoute.Comments}/${_arg}`);
    return data;
  },
);

export const fetchSimilarMoviesAction = createAsyncThunk<MovieDescription[], number, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'FetchSimilarMovies',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<MovieDescription[]>(`${APIRoute.Movies}/${_arg}/similar`);
    return data;
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
      await api.get(APIRoute.Login);
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
    },
  );
