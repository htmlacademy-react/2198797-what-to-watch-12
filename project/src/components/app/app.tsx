import MainPage from '../../pages/main-page/main-page';

type AppScreenProps = {
  movieTitle: string;
  genre: string;
  releaseDate: string;
}


function App({movieTitle, genre, releaseDate}: AppScreenProps): JSX.Element {
  return (
    <MainPage movieTitle = {movieTitle} genre = {genre} releaseDate = {releaseDate}/>
  );
}

export default App;
