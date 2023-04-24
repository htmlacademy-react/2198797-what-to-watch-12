import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import HistoryRouter from '../history-route/history-route';
import { Provider } from 'react-redux';
import {configureMockStore} from '@jedmao/redux-mock-store';
import { makeFakeMovies, makeFakeMovie } from '../../utils/mocks';
import Tabs from './tabs';
import { MovieInfoType } from '../../const';
import { AuthorizationStatus } from '../../const';

const movies = makeFakeMovies();
const movie = makeFakeMovie();
const mockStore = configureMockStore();
const history = createMemoryHistory();
const store = mockStore({
  USER: {authorizationStatus: AuthorizationStatus.Auth},
  MOVIES:{favoriteMovies: movies, movies:movies, movie: movie}
});

describe('Component: Tabs', () => {
  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <Tabs movieInfoType={MovieInfoType.Details} id={9}/>
        </HistoryRouter>
      </Provider>);

    expect(screen.getByText('Run Time')).toBeInTheDocument();
    expect(screen.getByText('Genre')).toBeInTheDocument();
    expect(screen.getByText('Released')).toBeInTheDocument();
  });
});
