/*
 * Genres selectors
 * NOTE: State here is application state
 */

import { createSelector } from 'reselect'

const selectGenres = () => state => state.entities.genres

export {
  selectGenres
};
