import { moviesData } from './movies-data';
import { makeFakeMovie, makeFakeMovies, makeFakeReviews, makeFakeFavoriteMovies, makeModifyFavoriteMovies, ID, FAVORITE_MOVIES, GENRE} from '../../utils/mocks';
import { fetchMoviesAction, fetchMovieAction, fetchReviewsAction, fetchSimilarMoviesAction, fetchFavoriteMovies, changeFilmStatus} from '../api-actions';


const movies = makeFakeMovies();
const movie = makeFakeMovie();
const reviews = makeFakeReviews();
const favoriteMovies = makeFakeFavoriteMovies();
const modifyFavoriteMovies = makeModifyFavoriteMovies();
const favoriteCounter = 9;


describe('Reducer: moviesData', () => {
  it('without additional parameters should return initial state', () => {
    expect(moviesData.reducer(void 0, {type: 'UNKNOWN_ACTION'}))
      .toEqual({
        genre: 'All genres',
        filteredMovies: [],
        movies: [],
        similarMovies: [],
        favoriteMovies: [],
        reviews: [],
        isMoviesDataLoading: false,
        isMovieDataLoading: false,
        movie: null,
        favoriteCounter: 0,
      });
  } );

  it('should update movies and filteredMovies by load movies', () => {
    const state = {genre: 'All genres',
      filteredMovies: [],
      movies: [],
      similarMovies: [],
      favoriteMovies: [],
      reviews: [],
      isMoviesDataLoading: false,
      isMovieDataLoading: false,
      movie: null,
      favoriteCounter: 0,};
    expect(moviesData.reducer(state, {type: fetchMoviesAction.fulfilled.type, payload: movies}))
      .toEqual({genre: 'All genres',
        filteredMovies: movies,
        movies: movies,
        similarMovies: [],
        favoriteMovies: [],
        reviews: [],
        isMoviesDataLoading: false,
        isMovieDataLoading: false,
        movie: null,
        favoriteCounter: 0,});
  });

  it('should update isMoviesDataLoading true', () => {
    const state = {genre: 'All genres',
      filteredMovies: [],
      movies: [],
      similarMovies: [],
      favoriteMovies: [],
      reviews: [],
      isMoviesDataLoading: false,
      isMovieDataLoading: false,
      movie: null,
      favoriteCounter: 0,};
    expect(moviesData.reducer(state, {type: fetchMoviesAction.pending.type}))
      .toEqual({genre: 'All genres',
        filteredMovies: [],
        movies: [],
        similarMovies: [],
        favoriteMovies: [],
        reviews: [],
        isMoviesDataLoading: true,
        isMovieDataLoading: false,
        movie: null,
        favoriteCounter: 0,});
  });

  it('should update isMovieDataLoading true', () => {
    const state = {genre: 'All genres',
      filteredMovies: [],
      movies: [],
      similarMovies: [],
      favoriteMovies: [],
      reviews: [],
      isMoviesDataLoading: false,
      isMovieDataLoading: false,
      movie: null,
      favoriteCounter: 0,};
    expect(moviesData.reducer(state, {type: fetchMovieAction.pending.type}))
      .toEqual({genre: 'All genres',
        filteredMovies: [],
        movies: [],
        similarMovies: [],
        favoriteMovies: [],
        reviews: [],
        isMoviesDataLoading: false,
        isMovieDataLoading: true,
        movie: null,
        favoriteCounter: 0,});
  });

  it('should update movie by load movies', () => {
    const state = {genre: 'All genres',
      filteredMovies: [],
      movies: [],
      similarMovies: [],
      favoriteMovies: [],
      reviews: [],
      isMoviesDataLoading: false,
      isMovieDataLoading: false,
      movie: null,
      favoriteCounter: 0,};
    expect(moviesData.reducer(state, {type: fetchMovieAction.fulfilled.type, payload: movie}))
      .toEqual({genre: 'All genres',
        filteredMovies: [],
        movies: [],
        similarMovies: [],
        favoriteMovies: [],
        reviews: [],
        isMoviesDataLoading: false,
        isMovieDataLoading: false,
        movie: movie,
        favoriteCounter: 0,});
  });

  it('should update similarMovies by load similarMovies', () => {
    const state = {genre: 'All genres',
      filteredMovies: [],
      movies: [],
      similarMovies: [],
      favoriteMovies: [],
      reviews: [],
      isMoviesDataLoading: false,
      isMovieDataLoading: false,
      movie: null,
      favoriteCounter: 0,};
    expect(moviesData.reducer(state, {type: fetchSimilarMoviesAction.fulfilled.type, payload: movies}))
      .toEqual({genre: 'All genres',
        filteredMovies: [],
        movies: [],
        similarMovies: movies,
        favoriteMovies: [],
        reviews: [],
        isMoviesDataLoading: false,
        isMovieDataLoading: false,
        movie: null,
        favoriteCounter: 0,});
  });

  it('should update reviews by load reviews', () => {
    const state = {genre: 'All genres',
      filteredMovies: [],
      movies: [],
      similarMovies: [],
      favoriteMovies: [],
      reviews: [],
      isMoviesDataLoading: false,
      isMovieDataLoading: false,
      movie: null,
      favoriteCounter: 0,};
    expect(moviesData.reducer(state, {type: fetchReviewsAction.fulfilled.type, payload: reviews}))
      .toEqual({genre: 'All genres',
        filteredMovies: [],
        movies: [],
        similarMovies: [],
        favoriteMovies: [],
        reviews: reviews,
        isMoviesDataLoading: false,
        isMovieDataLoading: false,
        movie: null,
        favoriteCounter: 0,});
  });

  it('should update fvoriteMovies and favoriteCounter by load fovoriteMovies', () => {
    const state = {genre: 'All genres',
      filteredMovies: [],
      movies: [],
      similarMovies: [],
      favoriteMovies: [],
      reviews: [],
      isMoviesDataLoading: false,
      isMovieDataLoading: false,
      movie: null,
      favoriteCounter: 0,};
    expect(moviesData.reducer(state, {type: fetchFavoriteMovies.fulfilled.type, payload: favoriteMovies}))
      .toEqual({genre: 'All genres',
        filteredMovies: [],
        movies: [],
        similarMovies: [],
        favoriteMovies: favoriteMovies,
        reviews: [],
        isMoviesDataLoading: false,
        isMovieDataLoading: false,
        movie: null,
        favoriteCounter: favoriteMovies.length,});
  });
  it('should update movie.isFavorite in movies with special id and change favoriteCounter', () => {
    const state = {genre: 'All genres',
      filteredMovies: [],
      movies: FAVORITE_MOVIES,
      similarMovies: [],
      favoriteMovies: [],
      reviews: [],
      isMoviesDataLoading: false,
      isMovieDataLoading: false,
      movie: null,
      favoriteCounter: favoriteMovies.length,};
    expect(moviesData.reducer(state, {type: changeFilmStatus.fulfilled.type, payload: ID + 1}))
      .toEqual({genre: 'All genres',
        filteredMovies: [],
        movies: modifyFavoriteMovies,
        similarMovies: [],
        favoriteMovies: [],
        reviews: [],
        isMoviesDataLoading: false,
        isMovieDataLoading: false,
        movie: null,
        favoriteCounter: favoriteMovies.length - 1,});
  });

  it('should update filtered movie depending on the genre', () => {
    const state = {genre: 'All genres',
      filteredMovies: [],
      movies: movies,
      similarMovies: [],
      favoriteMovies: [],
      reviews: [],
      isMoviesDataLoading: false,
      isMovieDataLoading: false,
      movie: null,
      favoriteCounter: favoriteMovies.length,};
    expect(moviesData.reducer(state, {type: moviesData.actions.changeGenre, payload: GENRE}))
      .toEqual({genre: 'All genres',
        filteredMovies: movies,
        movies: movies,
        similarMovies: [],
        favoriteMovies: [],
        reviews: [],
        isMoviesDataLoading: false,
        isMovieDataLoading: false,
        movie: null,
        favoriteCounter: favoriteMovies.length,});
  });

  it('should update favoriteCounter with payload', () => {
    const state = {genre: 'All genres',
      filteredMovies: [],
      movies: [],
      similarMovies: [],
      favoriteMovies: [],
      reviews: [],
      isMoviesDataLoading: false,
      isMovieDataLoading: false,
      movie: null,
      favoriteCounter: favoriteMovies.length,};
    expect(moviesData.reducer(state, {type: moviesData.actions.setFavoriteCounter, payload: favoriteCounter}))
      .toEqual({genre: 'All genres',
        filteredMovies: [],
        movies: [],
        similarMovies: [],
        favoriteMovies: [],
        reviews: [],
        isMoviesDataLoading: false,
        isMovieDataLoading: false,
        movie: null,
        favoriteCounter: favoriteCounter,});
  });


});
