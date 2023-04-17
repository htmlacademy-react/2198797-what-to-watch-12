import { useAppSelector, useAppDispatch } from '../../hooks';
import { getFavoriteCounter, getMovies } from '../../store/movies-data/selectors';
import { changeFilmStatus } from '../../store/api-actions';
import { getAuthorizationStatus } from '../../store/user-process/selectors';
import { AuthorizationStatus } from '../../const';
import { useNavigate } from 'react-router-dom';
import { AppRoute } from '../../const';

type MyListButtonProps = {
  filmId: number;
};

function MyListButton({filmId}: MyListButtonProps): JSX.Element {

  const filmCardCount = useAppSelector(getFavoriteCounter);
  const movies = useAppSelector(getMovies);
  const dispatch = useAppDispatch();
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const navigate = useNavigate();

  const myListButtonHandler = () => {
    if(authorizationStatus === AuthorizationStatus.Auth){
      dispatch(changeFilmStatus({filmId: filmId, isFavorite: movies[filmId - 1].isFavorite}));
    }else{
      navigate(AppRoute.Login);
    }
  };

  return(
    <button className="btn btn--list film-card__button" type="button" onClick={myListButtonHandler}>
      <svg viewBox="0 0 19 20" width="19" height="20">
        <use xlinkHref={movies[filmId - 1].isFavorite ? '#in-list' : '#add'}></use>
      </svg>
      <span>My list</span>
      <span className="film-card__count">{filmCardCount}</span>
    </button>
  );

}

export default MyListButton;


