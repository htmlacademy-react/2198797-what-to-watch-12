import Logo from '../../components/logo/logo';
import {useState, ChangeEvent, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../hooks';
import {useRef} from 'react';
import { FormEvent } from 'react';
import { addReviewAction } from '../../store/api-actions';
import { ReviewData } from '../../types/review-data';

const MIN_SIMBOLS_NUMBER = 50;
const MAX_SIMBOLS_NUMBER = 400;
const MAX_RATING_NUMBER = 10;

function AddReviewPage(): JSX.Element {

  const commentRef = useRef<HTMLTextAreaElement | null>(null);
  const submitButtonRef = useRef<HTMLButtonElement | null>(null);

  const dispatch = useAppDispatch();
  const movies = useAppSelector((state) => state.movies);
  const params = useParams();

  const [userGrade, setUserGrade] = useState(-1);

  useEffect(() => {
    disableSubmitButtonHandler();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[userGrade]);

  const disableSubmitButtonHandler = () => {

    if(commentRef.current !== null && submitButtonRef.current !== null){
      if(commentRef.current.value.length >= MIN_SIMBOLS_NUMBER && commentRef.current.value.length <= MAX_SIMBOLS_NUMBER && userGrade >= 0){
        submitButtonRef.current.removeAttribute('disabled');
      }else{
        submitButtonRef.current.setAttribute('disabled', 'true');
      }
    }
  };

  const onSubmit = (reviewData: ReviewData) => {
    if(submitButtonRef.current !== null){
      submitButtonRef.current.setAttribute('disabled', 'true');
    }
    dispatch(addReviewAction(reviewData));
  };

  const submitHandler = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if(commentRef.current !== null && userGrade >= 0){
      onSubmit({
        comment: commentRef.current.value,
        rating: userGrade + 1,
        filmId: Number(params.id),
      });
    }
  };


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
        <form action="#" className="add-review__form" onSubmit={submitHandler}>
          <div className="rating">
            <div className="rating__stars">
              {
                Array.from({ length: MAX_RATING_NUMBER }, () => 0).map((element, index) =>(
                  <div key = {`${index + 1}`}>
                    <input className="rating__input" id={`star-${index}`} type="radio" name="rating" value={index}
                      checked={index === Math.abs(userGrade - 9)}
                      onChange={({target}: ChangeEvent<HTMLInputElement>) => {
                        setUserGrade(Math.abs(index - 9));
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
            <textarea onChange={disableSubmitButtonHandler} ref={commentRef} className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text"></textarea>
            <div className="add-review__submit">
              <button ref={submitButtonRef} className="add-review__btn" type="submit" disabled>Post</button>
            </div>

          </div>
        </form>
      </div>

    </section>
  );
}

export default AddReviewPage;
