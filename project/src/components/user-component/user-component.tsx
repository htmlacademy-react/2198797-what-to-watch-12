import {Link} from 'react-router-dom';
import { logoutAction } from '../../store/api-actions';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { getAuthorizationStatus } from '../../store/user-process/selectors';
import { moviesData } from '../../store/movies-data/movies-data';
import { fetchMoviesAction } from '../../store/api-actions';


function UserComponent(): JSX.Element {

  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const dispatch = useAppDispatch();

  const signOutHandler = () => {
    dispatch(moviesData.actions.setFavoriteCounter(0));
    dispatch(logoutAction());
    dispatch(fetchMoviesAction());
  };

  return(
    <ul className="user-block">
      <li className="user-block__item">
        <div className="user-block__avatar">
          <Link to={AppRoute.MyList}><img src="img/avatar.jpg" alt="User avatar" width="63" height="63" /></Link>
        </div>
      </li>
      <li className="user-block__item" >
        {authorizationStatus === AuthorizationStatus.Auth ?
          <Link to={AppRoute.Root} className="user-block__link" onClick={signOutHandler}>Sign out</Link>
          : <Link to={AppRoute.Login} className="user-block__link">Sign in</Link>}
      </li>
    </ul>
  );

}

export default UserComponent;
