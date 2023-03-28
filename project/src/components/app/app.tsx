import {Route, BrowserRouter, Routes} from 'react-router-dom';
import MainPage from '../../pages/main-page/main-page';
import MyListPage from '../../pages/my-list-page/my-list-page';
import PlayerPage from '../../pages/player-page/player-page';
import SignInPage from '../../pages/sign-in-page/sign-in-page';
import AddReviewPage from '../../pages/add-review-page/add-review-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import MoviePage from '../../pages/movie-page/movie-page';
import {AppRoute, AuthorizationStatus} from '../../const';
import PrivateRoute from '../private-route/private-route';
import { MovieDescription, ReviewDescription } from '../../types/movie';
import { MovieInfoType} from '../../const';

type AppScreenProps = {
  movies: MovieDescription[];
  reviews: ReviewDescription[];
}


function App({movies, reviews}: AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Root}
          element={<MainPage/>}
        />
        <Route
          path={AppRoute.Player}
          element={<PlayerPage movies = {movies}/>}
        />
        <Route
          path={AppRoute.Login}
          element={<SignInPage/>}
        />
        <Route
          path={AppRoute.MyList}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
              <MyListPage movies = {movies}/>
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.AddReview}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
              <AddReviewPage movies = {movies} />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Movie}
          element={<MoviePage movies = {movies} reviews = {reviews} movieInfoType={MovieInfoType.Overview}/>}
        />
        <Route
          path={AppRoute.MovieReview}
          element={<MoviePage movies = {movies} reviews = {reviews} movieInfoType={MovieInfoType.Reviews}/>}
        />
        <Route
          path={AppRoute.MovieDetails}
          element={<MoviePage movies = {movies} reviews = {reviews} movieInfoType={MovieInfoType.Details}/>}
        />
        <Route
          path="*"
          element={<NotFoundPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
