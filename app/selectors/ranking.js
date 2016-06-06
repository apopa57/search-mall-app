/*
 * Ranking selectors
 * NOTE: State here is application state
 */

import { createSelector } from 'reselect'

const selectRanking = () => state => state.ranking

const selectRankingIds = () => createSelector(
  selectRanking(),
  (rankingState) => rankingState.ids
)

const selectRankingError = () => createSelector(
  selectRanking(),
  (rankingState) => rankingState.error
)

export {
  selectRanking,
  selectRankingIds,
  selectRankingError
};
