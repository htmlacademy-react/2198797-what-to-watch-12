import {Link} from 'react-router-dom';
import { logoutAction } from '../../store/api-actions';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { getAuthorizationStatus } from '../../store/user-process/selectors';


function UserComponent(): JSX.Element {

  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const dispatch = useAppDispatch();

  return(
    <li className="user-block__item" >
      {authorizationStatus === AuthorizationStatus.Auth ?
        <Link to={AppRoute.Root} className="user-block__link" onClick={() => {dispatch(logoutAction());}}>Sign out</Link>
        : <Link to={AppRoute.Login} className="user-block__link">Sign in</Link>}
    </li>
  );

}

export default UserComponent;
