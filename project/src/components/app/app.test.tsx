import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import {Provider} from 'react-redux';
import {configureMockStore} from '@jedmao/redux-mock-store';
import HistoryRouter from '../history-route/history-route';
import {AuthorizationStatus, AppRoute} from '../../const';
import App from './app';
import { makeFakeMovies, makeFakeMovie } from '../../utils/mocks';

const mockStore = configureMockStore();
const fakeMovies = makeFakeMovies();
const fakeMovie = makeFakeMovie();

const store = mockStore({
  USER: {authorizationStatus: AuthorizationStatus.Auth},
  MOVIES: {isMoviesDataLoading: false, movies: fakeMovies, filteredMovies: fakeMovies, movie: fakeMovie},
});

const history = createMemoryHistory();

const fakeApp = (
  <Provider store={store}>
    <HistoryRouter history={history}>
      <App />
    </HistoryRouter>
  </Provider>
);

describe('Application Routing', () => {
  it('should render "Main Page" when user navigate to "/"', () => {
    history.push(AppRoute.Root);

    render(fakeApp);

    expect(screen.getByText(/Show more/i)).toBeInTheDocument();
  });

  it('should render "AuthScreen" when user navigate to "/login"', () => {
    history.push(AppRoute.Login);

    render(fakeApp);

    expect(screen.getByText(/Email address/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();
  });
});
