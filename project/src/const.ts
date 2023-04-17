export enum AppRoute {
    Login = '/login',
    MyList = '/mylist',
    Root = '/',
    Player = '/player/:id',
    AddReview = '/films/:id/review',
    Movie = '/films/:id',
    MovieReview = '/films/:id/reviews',
    MovieDetails = '/films/:id/details',
    Error = '*'
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

export enum RatingValue {
  Bad = 'Bad',
  Mormal = 'Normal',
  Good = 'Good',
  VeryGood = 'Very Good',
  Awesome = 'Awesome',
}

export enum APIRoute {
  Movies = '/films',
  Login = '/login',
  Logout = '/logout',
  Comments = '/comments',
  Favorite = '/favorite',
}

export enum NameSpace {
  Movies = 'MOVIES',
  User = 'USER',
}
