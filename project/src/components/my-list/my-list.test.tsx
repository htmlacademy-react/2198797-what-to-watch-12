import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import HistoryRouter from '../history-route/history-route';
import { Provider } from 'react-redux';
import {configureMockStore} from '@jedmao/redux-mock-store';
import { makeFakeMovies } from '../../utils/mocks';
import MyList from './my-list';
import { AuthorizationStatus } from '../../const';

const movies = makeFakeMovies();
const mockStore = configureMockStore();
const history = createMemoryHistory();
const store = mockStore({
  USER: {authorizationStatus: AuthorizationStatus.Auth},
  MOVIES:{favoriteMovies: movies}
});

describe('Component: MyList', () => {
  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <MyList/>
        </HistoryRouter>
      </Provider>);

    expect(screen.getByText('Catalog')).toBeInTheDocument();
    expect(screen.getByText('© 2019 What to watch Ltd.')).toBeInTheDocument();
  });
});

