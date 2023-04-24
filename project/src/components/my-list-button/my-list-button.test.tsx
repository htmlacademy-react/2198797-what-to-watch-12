import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import HistoryRouter from '../history-route/history-route';
import { Provider } from 'react-redux';
import {configureMockStore} from '@jedmao/redux-mock-store';
import { makeFakeMovies } from '../../utils/mocks';
import { AuthorizationStatus } from '../../const';
import MyListButton from './my-list-button';

const movies = makeFakeMovies();
const mockStore = configureMockStore();
const history = createMemoryHistory();
const store = mockStore({
  USER: {authorizationStatus: AuthorizationStatus.Auth},
  MOVIES:{favoriteMovies: movies, movies: movies}
});

describe('Component: MyListButton', () => {
  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <MyListButton filmId={5}/>
        </HistoryRouter>
      </Provider>);

    expect(screen.getByText('My list')).toBeInTheDocument();
  });
});
