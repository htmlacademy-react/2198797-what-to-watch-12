export enum AppRoute {
    Login = '/login',
    MyList = '/mylist',
    Root = '/',
    Player = '/player/:id',
    AddReview = '/films/:id/review',
    Movie = '/films/:id',
    MovieReview = '/films/:id/reviews',
    MovieDetails= '/films/:id/details'
  }

export enum AuthorizationStatus {
    Auth = 'AUTH',
    NoAuth = 'NO_AUTH',
    Unknown = 'UNKNOWN',
  }

export enum MovieInfoType {
    Overview = 'OVERVIEW',
    Details = 'DETAILS',
    Reviews = 'REVIEWS',
  }

export enum MovieRating {
    'Bad' = 3,
    'Normal' = 5,
    'Good' = 8,
    'VeryGood' = 10,
  }
