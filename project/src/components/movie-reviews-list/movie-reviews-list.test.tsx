import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import HistoryRouter from '../history-route/history-route';
import { Provider } from 'react-redux';
import {configureMockStore} from '@jedmao/redux-mock-store';
import { makeFakeReviews } from '../../utils/mocks';
import MovieReviewsList from './movie-reviews-list';

const reviews = makeFakeReviews();
const mockStore = configureMockStore();
const history = createMemoryHistory();
const store = mockStore({MOVIES:{reviews: reviews}});

describe('Component: MovieReviewsList', () => {
  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <MovieReviewsList/>
        </HistoryRouter>
      </Provider>);

    expect(screen.getByTestId('reviewsList')).toBeInTheDocument();
  });
});
