import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import HistoryRouter from '../history-route/history-route';
import { Provider } from 'react-redux';
import {configureMockStore} from '@jedmao/redux-mock-store';
import MovieCard from './movie-card';
import { makeFakeMovie } from '../../utils/mocks';

const mockStore = configureMockStore();
const history = createMemoryHistory();
const store = mockStore({});
const fakeMovie = makeFakeMovie();

describe('Component: MovieCard', () => {
  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <MovieCard movie={fakeMovie}/>
        </HistoryRouter>
      </Provider>);

    expect(screen.getByTestId('movieCard')).toBeInTheDocument();
    expect(screen.getByRole('link')).toBeInTheDocument();
  });
});
