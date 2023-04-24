import {Link} from 'react-router-dom';
import { useAppDispatch } from '../../hooks';
import { moviesData } from '../../store/movies-data/movies-data';

type LogoProps = {
    lightLogo: boolean;
}

function Logo({lightLogo}: LogoProps): JSX.Element {
  const dispatch = useAppDispatch();


  const buttonHandler = () => {
    dispatch(moviesData.actions.changeGenre('All genres'));
  };

  let logoClass = 'logo__link';

  if(lightLogo){
    logoClass = 'logo__link logo__link--light';
  }

  return (
    <div className="logo">
      <Link className={logoClass} to="/" onClick={buttonHandler}>
        <span className="logo__letter logo__letter--1" data-testid="W">W</span>
        <span className="logo__letter logo__letter--2">T</span>
        <span className="logo__letter logo__letter--3">W</span>
      </Link>
    </div>
  );
}

export default Logo;
