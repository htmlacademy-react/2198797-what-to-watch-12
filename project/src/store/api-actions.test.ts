import {Action} from 'redux';
import thunk, {ThunkDispatch} from 'redux-thunk';
import MockAdapter from 'axios-mock-adapter';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {createAPI} from '../services/api';
import {checkAuthAction, loginAction, fetchMoviesAction, fetchFavoriteMovies, fetchMovieAction, fetchReviewsAction, fetchSimilarMoviesAction, changeFilmStatus, addReviewAction, logoutAction} from './api-actions';
import {APIRoute} from '../const';
import {State} from '../types/state';
import { AuthData } from '../types/auth-data';
import { redirectToRoute } from './action';
import { makeFakeMovies, makeFakeFavoriteMovies, makeFakeMovie, makeFakeReviews } from '../utils/mocks';
import { StatusData } from '../types/status-data';

describe('Async actions', () => {
  const api = createAPI();
  const mockAPI = new MockAdapter(api);
  const middlewares = [thunk.withExtraArgument(api)];

  const mockStore = configureMockStore<
      State,
      Action<string>,
      ThunkDispatch<State, typeof api, Action>
    >(middlewares);

  it('should authorization status is «auth» when server return 200', async () => {
    const store = mockStore();
    mockAPI
      .onGet(APIRoute.Login)
      .reply(200, []);

    expect(store.getActions()).toEqual([]);

    await store.dispatch(checkAuthAction());

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      checkAuthAction.pending.type,
      checkAuthAction.fulfilled.type
    ]);
  });

  it('should dispatch RequriedAuthorization and RedirectToRoute when POST /login', async () => {
    const fakeUser: AuthData = {login: 'test@test.ru', password: '123456'};

    mockAPI
      .onPost(APIRoute.Login)
      .reply(200, {token: 'secret'});


    const store = mockStore();
    Storage.prototype.setItem = jest.fn();

    await store.dispatch(loginAction(fakeUser));

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      loginAction.pending.type,
      redirectToRoute.type,
      loginAction.fulfilled.type
    ]);

    expect(Storage.prototype.setItem).toBeCalledTimes(1);
    expect(Storage.prototype.setItem).toBeCalledWith('movie-liker-token', 'secret');
  });

  it('should dispatch Load_Movies when GET /films', async () => {
    const mockMovies = [makeFakeMovies];
    mockAPI
      .onGet(APIRoute.Movies)
      .reply(200, mockMovies);

    const store = mockStore();

    await store.dispatch(fetchMoviesAction());

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      fetchMoviesAction.pending.type,
      fetchMoviesAction.fulfilled.type
    ]);
  });

  it('should dispatch Load_Favorite_Movies when GET /favorite', async () => {
    const mockFavoriteMovies = [makeFakeFavoriteMovies];
    mockAPI
      .onGet(APIRoute.Favorite)
      .reply(200, mockFavoriteMovies);

    const store = mockStore();

    await store.dispatch(fetchFavoriteMovies());

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      fetchFavoriteMovies.pending.type,
      fetchFavoriteMovies.fulfilled.type
    ]);
  });

  it('should dispatch Load_Movie when GET /films/:id', async () => {
    const filmId = 9;
    const mockMovie = [makeFakeMovie];
    mockAPI
      .onGet(`${APIRoute.Movies}/${filmId}`)
      .reply(200, mockMovie);

    const store = mockStore();

    await store.dispatch(fetchMovieAction(filmId));

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      fetchMovieAction.pending.type,
      fetchMovieAction.fulfilled.type
    ]);
  });

  it('should dispatch Load_Reviews when GET /comments/:id', async () => {
    const filmId = 9;
    const mockReviews = [makeFakeReviews];
    mockAPI
      .onGet(`${APIRoute.Comments}/${filmId}`)
      .reply(200, mockReviews);

    const store = mockStore();

    await store.dispatch(fetchReviewsAction(filmId));

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      fetchReviewsAction.pending.type,
      fetchReviewsAction.fulfilled.type
    ]);
  });

  it('should dispatch Load_Similar Movies when GET /films/:id/similar', async () => {
    const filmId = 9;
    const mockSimilarMovies = [makeFakeMovies];
    mockAPI
      .onGet(`${APIRoute.Movies}/${filmId}/similar`)
      .reply(200, mockSimilarMovies);

    const store = mockStore();

    await store.dispatch(fetchSimilarMoviesAction(filmId));

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      fetchSimilarMoviesAction.pending.type,
      fetchSimilarMoviesAction.fulfilled.type
    ]);
  });

  it('should change movie status when POST /favorite/:id/:status', async () => {
    const statusData: StatusData = {
      filmId: 9,
      isFavorite: true,
    };
    const mockMovie = [makeFakeMovie];
    mockAPI
      .onGet(`${APIRoute.Movies}/${statusData.filmId}/similar`)
      .reply(200, mockMovie);

    const store = mockStore();

    await store.dispatch(changeFilmStatus(statusData));

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      changeFilmStatus.pending.type,
      changeFilmStatus.fulfilled.type
    ]);
  });

  it('should add review for movie when POST /comments/:id', async () => {
    const data = {
      comment: 'Good',
      rating: 9,
      filmId: 9
    };
    const mockReviews = [makeFakeReviews];
    mockAPI
      .onGet(`${APIRoute.Comments}/${data.filmId}`)
      .reply(200, mockReviews[0]);

    const store = mockStore();

    await store.dispatch(addReviewAction(data));

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      addReviewAction.pending.type,
      addReviewAction.fulfilled.type,
    ]);
  });

  it('should dispatch Logout when Delete /logout', async () => {
    mockAPI
      .onDelete(APIRoute.Logout)
      .reply(204);

    const store = mockStore();
    Storage.prototype.removeItem = jest.fn();

    await store.dispatch(logoutAction());

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      logoutAction.pending.type,
      redirectToRoute.type,
      logoutAction.fulfilled.type
    ]);

    expect(Storage.prototype.removeItem).toBeCalledTimes(1);
    expect(Storage.prototype.removeItem).toBeCalledWith('movie-liker-token');
  });


});
