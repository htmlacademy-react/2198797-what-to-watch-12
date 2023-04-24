import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import HistoryRouter from '../history-route/history-route';
import { Provider } from 'react-redux';
import {configureMockStore} from '@jedmao/redux-mock-store';
import { makeFakeMovies } from '../../utils/mocks';
import MoviesSimilarList from './movies-similar-list';

const fakeMovies = makeFakeMovies();
const mockStore = configureMockStore();
const history = createMemoryHistory();
const store = mockStore({MOVIES:{similarMovies: fakeMovies}});

describe('Component: MoviesSimilarList', () => {

  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <MoviesSimilarList/>
        </HistoryRouter>
      </Provider>);

    const movieCard = screen.getAllByTestId('movieCard');
    movieCard.forEach((element) => expect(element).toBeInTheDocument());
  });
});
