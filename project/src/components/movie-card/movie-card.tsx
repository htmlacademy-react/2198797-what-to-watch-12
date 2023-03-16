import { MovieDescription } from '../../types/movie';
import {Link} from 'react-router-dom';


type MovieCardProps = {
  movie: MovieDescription;
  onMovie: (movie: MovieDescription) => void;
}

function MovieCard({movie, onMovie}: MovieCardProps): JSX.Element {
  return (
    <article onMouseMove={() => {onMovie(movie);}} className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img src={movie.previewImage} alt={movie.name} width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`/films/${movie.id}`}>
          {movie.name}
        </Link>
      </h3>
    </article>
  );
}

export default MovieCard;
