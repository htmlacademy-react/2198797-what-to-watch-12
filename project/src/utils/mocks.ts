import {name, datatype, image, internet} from 'faker';
import { MovieDescription, ReviewDescription } from '../types/movie';
import { Genre } from '../types/movie';

export const GENRE: Genre = 'All genres';
export const ID = 8;


export const makeFakeMovie = (): MovieDescription => ({
  name: name.title(),
  posterImage: image.image(),
  previewImage: image.image(),
  backgroundImage: image.image(),
  backgroundColor: datatype.string(),
  description: datatype.string(),
  rating: datatype.number(),
  scoresCount: datatype.number(10),
  director: name.findName(),
  starring: new Array(3).fill(null).map(() => name.findName()),
  runTime: datatype.number(),
  genre: 'Comedy',
  released: datatype.number(),
  id: datatype.number(10),
  isFavorite: datatype.boolean(),
  videoLink: internet.domainWord(),
  previewVideoLink: internet.domainWord(),
} as MovieDescription);

export const makeFakeReview = (): ReviewDescription => ({
  id: datatype.number(),
  user: {
    id: datatype.number(),
    name: name.findName(),
  },
  rating: datatype.number(10),
  comment: datatype.string(),
  date: datatype.string(),
});

export const makeFakeReviews = (): ReviewDescription[] => new Array(10).fill(null).map(() => makeFakeReview());
const makeFakeMoviesTmp = (): MovieDescription[] => new Array(10).fill(null).map(() => makeFakeMovie());
export const makeFakeMovies = (): MovieDescription[] => makeFakeMoviesTmp().map((element, index) => ({...element, id: index + 1}));
export const makeFakeFavoriteMovies = (): MovieDescription[] => makeFakeMovies().map((element) => ({...element, isFavorite: true}));
export const FAVORITE_MOVIES = makeFakeFavoriteMovies();
export const makeModifyFavoriteMovies = (): MovieDescription[] => FAVORITE_MOVIES.map((element, index) => {
  if(index === ID){
    return {...element, isFavorite: false};
  }
  return element;
});
