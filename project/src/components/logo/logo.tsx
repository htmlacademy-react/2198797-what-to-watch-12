import {Link} from 'react-router-dom';

type LogoProps = {
    lightLogo: boolean;
}

function Logo({lightLogo}: LogoProps): JSX.Element {
  let logoClass = 'logo__link';

  if(lightLogo){
    logoClass = 'logo__link logo__link--light';
  }

  return (
    <div className="logo">
      <Link className={logoClass} to="/">
        <span className="logo__letter logo__letter--1">W</span>
        <span className="logo__letter logo__letter--2">T</span>
        <span className="logo__letter logo__letter--3">W</span>
      </Link>
    </div>
  );
}

export default Logo;
