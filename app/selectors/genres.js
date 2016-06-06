/*
 * Genres selectors
 * NOTE: State here is application state
 */

 const initialState = {
   error: false,
   loading: false,
   ids: []
 }

import { createSelector } from 'reselect'

const selectGenres = () => state => state.genres

const selectGenresIds = () => createSelector(
  selectGenres(),
  (genresState) => genresState.ids
)

const selectGenresError = () => createSelector(
  selectGenres(),
  (genresState) => genresState.error
)

const selectGenresLoading = () => createSelector(
  selectGenres(),
  (genresState) => genresState.loading
)

export {
  selectGenres,
  selectGenresIds,
  selectGenresLoading
};
