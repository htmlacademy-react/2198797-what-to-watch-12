import Logo from '../../components/logo/logo';
import {useState, ChangeEvent} from 'react';
import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../hooks';

function AddReviewPage(): JSX.Element {

  const movies = useAppSelector((state) => state.movies);

  const params = useParams();

  const [userGrade, setUserGrade] = useState([false, false, false, false, false, false, false, false, false, false]);

  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={movies[Number(params.id) - 1].backgroundImage} alt={movies[Number(params.id) - 1].name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <Logo lightLogo = {false}/>

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <a href="film-page.html" className="breadcrumbs__link">{movies[Number(params.id) - 1].name}</a>
              </li>
              <li className="breadcrumbs__item">
                <a href="#/" className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>

          <ul className="user-block">
            <li className="user-block__item">
              <div className="user-block__avatar">
                <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
              </div>
            </li>
            <li className="user-block__item">
              <a href="#/" className="user-block__link">Sign out</a>
            </li>
          </ul>
        </header>

        <div className="film-card__poster film-card__poster--small">
          <img src={movies[Number(params.id) - 1].posterImage} alt={movies[Number(params.id) - 1].name} width="218" height="327" />
        </div>
      </div>

      <div className="add-review">
        <form action="#" className="add-review__form">
          <div className="rating">
            <div className="rating__stars">
              {
                userGrade.map((element, index) =>(
                  <div key = {`${index + 1}`}>
                    <input className="rating__input" id={`star-${index}`} type="radio" name="rating" value={index}
                      checked={element}
                      onChange={({target}: ChangeEvent<HTMLInputElement>) => {
                        setUserGrade(() => [false, false, false, false, false, false, false, false, false, false]);
                        setUserGrade((previousValue) => [...previousValue.slice(0, Number(target.value)), true, ...previousValue.slice(Number(target.value) + 1)]);
                      }}
                    />
                    <label className="rating__label" htmlFor={`star-${index}`}>{`Rating ${index}`}</label>
                  </div >
                )
                )
              }
            </div>
          </div>

          <div className="add-review__text">
            <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text"></textarea>
            <div className="add-review__submit">
              <button className="add-review__btn" type="submit">Post</button>
            </div>

          </div>
        </form>
      </div>

    </section>
  );
}

export default AddReviewPage;
