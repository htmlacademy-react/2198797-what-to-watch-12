import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import HistoryRouter from '../history-route/history-route';
import { Provider } from 'react-redux';
import {configureMockStore} from '@jedmao/redux-mock-store';
import { makeFakeMovies } from '../../utils/mocks';
import MoviesList from './movies-list';

const movies = makeFakeMovies();
const mockStore = configureMockStore();
const history = createMemoryHistory();
const store = mockStore({});

describe('Component: MoviesList', () => {

  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <MoviesList movies={movies}/>
        </HistoryRouter>
      </Provider>);

    const role = screen.getAllByRole('link');
    role.forEach((element) => expect(element).toBeInTheDocument());
  });
});
