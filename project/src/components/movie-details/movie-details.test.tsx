import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import HistoryRouter from '../history-route/history-route';
import { Provider } from 'react-redux';
import {configureMockStore} from '@jedmao/redux-mock-store';
import { makeFakeMovie } from '../../utils/mocks';
import MovieDetails from './movie-details';

const fakeMovie = makeFakeMovie();
const mockStore = configureMockStore();
const history = createMemoryHistory();
const store = mockStore({MOVIES:{movie: fakeMovie}});


describe('Component: MovieDetails', () => {
  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <MovieDetails/>
        </HistoryRouter>
      </Provider>);

    expect(screen.getByText('Run Time')).toBeInTheDocument();
    expect(screen.getByText('Genre')).toBeInTheDocument();
    expect(screen.getByText('Released')).toBeInTheDocument();
  });
});
