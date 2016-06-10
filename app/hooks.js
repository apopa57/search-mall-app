import { bindActionCreators } from 'redux';
import { fetchGenresIfNeeded } from 'actions/genre';

export function bootstrap({ dispatch }) {
  const fetchGenres = bindActionCreators(fetchGenresIfNeeded, dispatch)
  return () => {
    fetchGenres(0)
  };
}
