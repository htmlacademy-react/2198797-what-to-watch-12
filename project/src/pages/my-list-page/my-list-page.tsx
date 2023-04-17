import { useAppDispatch } from '../../hooks';
import MyList from '../../components/my-list/my-list';
import { fetchFavoriteMovies } from '../../store/api-actions';
import { useEffect } from 'react';

function MyListPage(): JSX.Element {

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchFavoriteMovies());
  });

  return (
    <MyList/>
  );
}

export default MyListPage;
