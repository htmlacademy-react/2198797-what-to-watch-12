import {Route, Routes} from 'react-router-dom';
import MainPage from '../../pages/main-page/main-page';
import MyListPage from '../../pages/my-list-page/my-list-page';
import PlayerPage from '../../pages/player-page/player-page';
import SignInPage from '../../pages/sign-in-page/sign-in-page';
import AddReviewPage from '../../pages/add-review-page/add-review-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import MoviePage from '../../pages/movie-page/movie-page';
import {AppRoute, AuthorizationStatus} from '../../const';
import PrivateRoute from '../private-route/private-route';
import {ReviewDescription } from '../../types/movie';
import { MovieInfoType} from '../../const';
import LoadingScreen from '../../pages/loading-screen/loading-screen';
import { useAppSelector} from '../../hooks';
import HistoryRouter from '../history-route/history-route';
import browserHistory from '../../browser-history';

type AppScreenProps = {
  reviews: ReviewDescription[];
}

function App({reviews}: AppScreenProps): JSX.Element {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const isMoviesDataLoading = useAppSelector((state) => state.isMoviesDataLoading);


  if (authorizationStatus === AuthorizationStatus.Unknown || isMoviesDataLoading) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route
          path={AppRoute.Root}
          element={<MainPage/>}
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
            <PrivateRoute authorizationStatus={authorizationStatus}>
              <MyListPage/>
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.AddReview}
          element={
            <PrivateRoute authorizationStatus={authorizationStatus}>
              <AddReviewPage />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Movie}
          element={<MoviePage reviews = {reviews} movieInfoType={MovieInfoType.Overview}/>}
        />
        <Route
          path={AppRoute.MovieReview}
          element={<MoviePage reviews = {reviews} movieInfoType={MovieInfoType.Reviews}/>}
        />
        <Route
          path={AppRoute.MovieDetails}
          element={<MoviePage reviews = {reviews} movieInfoType={MovieInfoType.Details}/>}
        />
        <Route
          path="*"
          element={<NotFoundPage />}
        />
      </Routes>
    </HistoryRouter>
  );
}

export default App;
