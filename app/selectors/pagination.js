import { createSelector } from 'reselect';

const selectSearchPagination = () => state => state.pagination.search

const selectSearchPageCount = () => createSelector(
  selectSearchPagination(),
  (pagination) => pagination.pageCount
)

const selectSearchTotalCount = () => createSelector(
  selectSearchPagination(),
  (pagination) => pagination.totalCount
)

const selectSearchIds = () => createSelector(
  selectSearchPagination(),
  (pagination) => pagination.ids
)

const selectSearchCurrentPage = () => createSelector(
  selectSearchPagination(),
  (pagination) => pagination.currentPage
)

export {
  selectSearchPagination,
  selectSearchPageCount,
  selectSearchTotalCount,
  selectSearchIds,
  selectSearchCurrentPage
}
