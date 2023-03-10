export enum AppRoute {
    Login = '/login',
    MyList = '/mylist',
    Root = '/',
    Player = '/player/:id',
    AddReview = '/films/:id/review',
    Movie = '/films/:id',
  }

export enum AuthorizationStatus {
    Auth = 'AUTH',
    NoAuth = 'NO_AUTH',
    Unknown = 'UNKNOWN',
  }
