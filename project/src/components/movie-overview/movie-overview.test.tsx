import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import HistoryRouter from '../history-route/history-route';
import { Provider } from 'react-redux';
import {configureMockStore} from '@jedmao/redux-mock-store';
import { makeFakeMovie } from '../../utils/mocks';
import MovieOverview from './movie-overview';

const fakeMovie = makeFakeMovie();
const mockStore = configureMockStore();
const history = createMemoryHistory();
const store = mockStore({MOVIES:{movie: fakeMovie}});


describe('Component: MovieOverview', () => {
  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <MovieOverview/>
        </HistoryRouter>
      </Provider>);

    expect(screen.getByTestId('Director')).toBeInTheDocument();
    expect(screen.getByTestId('Staring')).toBeInTheDocument();
  });
});
