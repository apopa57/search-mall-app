/*
 * Genres selectors
 * NOTE: State here is application state
 */

const selectGenres = () => state => {
  const genres = state.entities.genres.genres
  return Object.keys(genres).map(k => {
    return { value: genres[k].genreId, label: genres[k].genreName }
  });
}

export {
  selectGenres
};
