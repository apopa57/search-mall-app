/*
 * Search selectors
 * NOTE: State here is application state
 */

import { createSelector } from 'reselect';

const selectSearch = () => state => state.search;

const selectItems = () => state => state.entities.items;

const selectSearchTerm = () => createSelector(
  selectSearch(),
  (searchState) => searchState.searchTerm
);

const selectSearchValidation = () => createSelector(
  selectSearch(),
  (searchState) => searchState.isValidated
);

const selectSearchLoading = () => createSelector(
  selectSearch(),
  (searchState) => searchState.loading
);

const selectSearchData = () => createSelector(
  selectSearch(),
  selectItems(),
  (searchState, items) => searchState.ids.map(id => items[id])
);

const selectSearchError = () => createSelector(
  selectSearch(),
  (searchState) => searchState.error
);

export {
  selectSearch,
  selectSearchData,
  selectSearchTerm,
  selectSearchError,
  selectSearchLoading,
  selectSearchValidation
};