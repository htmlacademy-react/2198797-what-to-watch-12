import {Route, Routes} from 'react-router-dom';
import MainPage from '../../pages/main-page/main-page';
import MyListPage from '../../pages/my-list-page/my-list-page';
import PlayerPage from '../../pages/player-page/player-page';
import SignInPage from '../../pages/sign-in-page/sign-in-page';
import AddReviewPage from '../../pages/add-review-page/add-review-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import MoviePage from '../../pages/movie-page/movie-page';
import {AppRoute} from '../../const';
import PrivateRoute from '../private-route/private-route';
import { MovieInfoType} from '../../const';
import LoadingScreen from '../../pages/loading-screen/loading-screen';
import { useAppSelector} from '../../hooks';
import {getAuthorizationStatus, getAuthCheckedStatus} from '../../store/user-process/selectors';
import { getMoviesDataLoadingStatus } from '../../store/movies-data/selectors';


function App(): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const isAuthChecked = useAppSelector(getAuthCheckedStatus);
  const isMoviesDataLoading = useAppSelector(getMoviesDataLoadingStatus);


  if (!isAuthChecked || isMoviesDataLoading) {
    return (
      <LoadingScreen />
    );
  }

  return (
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
        element={<MoviePage movieInfoType={MovieInfoType.Overview}/>}
      />
      <Route
        path={AppRoute.MovieReview}
        element={<MoviePage movieInfoType={MovieInfoType.Reviews}/>}
      />
      <Route
        path={AppRoute.MovieDetails}
        element={<MoviePage movieInfoType={MovieInfoType.Details}/>}
      />
      <Route
        path="*"
        element={<NotFoundPage />}
      />
    </Routes>
  );
}

export default App;
