import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { movies } from './mocks/movies';
import { reviews } from './mocks/reviews';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App movies = {movies} reviews = {reviews}/>
  </React.StrictMode>,
);
