import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import HistoryRouter from '../history-route/history-route';
import Logo from './logo';
import { Provider } from 'react-redux';
import {configureMockStore} from '@jedmao/redux-mock-store';

const mockStore = configureMockStore();
const history = createMemoryHistory();
const store = mockStore({});

describe('Component: Logo', () => {
  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <HistoryRouter history={history}>

          <Logo lightLogo />

        </HistoryRouter>
      </Provider>);

    expect(screen.getByTestId('W')).toBeInTheDocument();
    expect(screen.getByRole('link')).toBeInTheDocument();
  });
});
