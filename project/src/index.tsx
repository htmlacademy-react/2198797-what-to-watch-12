import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import {Provider} from 'react-redux';
import {store} from './store';
import {ToastContainer} from 'react-toastify';
import {fetchMoviesAction, checkAuthAction} from './store/api-actions';
import 'react-toastify/dist/ReactToastify.css';

store.dispatch(fetchMoviesAction());
store.dispatch(checkAuthAction());


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store = {store}>
      <ToastContainer />
      <App/>
    </Provider>
  </React.StrictMode>,
);
