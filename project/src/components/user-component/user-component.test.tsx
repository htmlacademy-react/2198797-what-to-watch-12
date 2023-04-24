import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import HistoryRouter from '../history-route/history-route';
import { Provider } from 'react-redux';
import {configureMockStore} from '@jedmao/redux-mock-store';
import { makeFakeMovies, makeFakeMovie } from '../../utils/mocks';
import { AuthorizationStatus } from '../../const';
import UserComponent from './user-component';

const movies = makeFakeMovies();
const movie = makeFakeMovie();
const mockStore = configureMockStore();
const history = createMemoryHistory();
const store = mockStore({
  USER: {authorizationStatus: AuthorizationStatus.Auth},
  MOVIES:{favoriteMovies: movies, movies:movies, movie: movie}
});

describe('Component: UserComponent', () => {
  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <UserComponent/>
        </HistoryRouter>
      </Provider>);

    expect(screen.getByAltText('User avatar')).toBeInTheDocument();
  });
});
