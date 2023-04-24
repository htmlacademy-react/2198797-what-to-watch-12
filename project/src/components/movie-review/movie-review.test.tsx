import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import HistoryRouter from '../history-route/history-route';
import { Provider } from 'react-redux';
import {configureMockStore} from '@jedmao/redux-mock-store';
import MovieReview from './movie-review';
import { makeFakeReview } from '../../utils/mocks';

const review = makeFakeReview();
const mockStore = configureMockStore();
const history = createMemoryHistory();
const store = mockStore({});

describe('Component: MovieReview', () => {
  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <MovieReview review={review}/>
        </HistoryRouter>
      </Provider>);

    expect(screen.getByTestId('rendered')).toBeInTheDocument();
  });
});
