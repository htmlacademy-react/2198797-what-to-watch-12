import Logo from '../../components/logo/logo';

function NotFoundPage(): JSX.Element {
  return (

    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo lightLogo = {false}/>
      </header>
      <div className="sign-in user-page__content">
        <img src="img/404-not-found.png" alt="page-not-found"/>
      </div>

      <footer className="page-footer">
        <Logo lightLogo/>

        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  );
}

export default NotFoundPage;
