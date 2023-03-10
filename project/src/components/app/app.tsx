import {Route, BrowserRouter, Routes} from 'react-router-dom';
import MainPage from '../../pages/main-page/main-page';
//import MoviePage from '../../pages/movie-page/movie-page';
import MyListPage from '../../pages/my-list-page/my-list-page';
import PlayerPage from '../../pages/player-page/player-page';
import SignInPage from '../../pages/sign-in-page/sign-in-page';
import AddReviewPage from '../../pages/add-review-page/add-review-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import MoviePage from '../../pages/movie-page/movie-page';
import {AppRoute, AuthorizationStatus} from '../../const';
import PrivateRoute from '../private-route/private-route';

type AppScreenProps = {
  movieTitle: string;
  genre: string;
  releaseDate: string;
}


function App({movieTitle, genre, releaseDate}: AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Root}
          element={<MainPage movieTitle = {movieTitle} genre = {genre} releaseDate = {releaseDate}/>}
        />
        <Route
          path={AppRoute.Player}
          element={<PlayerPage/>}
        />
        <Route
          path={AppRoute.Login}
          element={<SignInPage/>}
        />
        <Route
          path={AppRoute.MyList}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
              <MyListPage/>
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.AddReview}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
              <AddReviewPage/>
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Movie}
          element={<MoviePage/>}
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
