/*
 * Search selectors
 * NOTE: State here is application state
 */

import { createSelector } from 'reselect';

const selectSearch = () => state => state.search;

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

const selectSearchIds = () => createSelector(
  selectSearch(),
  (searchState) => searchState.ids
);

const selectSearchError = () => createSelector(
  selectSearch(),
  (searchState) => searchState.error
);

export {
  selectSearch,
  selectSearchIds,
  selectSearchTerm,
  selectSearchError,
  selectSearchLoading,
  selectSearchValidation
};
