/*
 * Ranking selectors
 * NOTE: State here is application state
 */

import { createSelector } from 'reselect'

const selectRanking = () => state => state.entities.ranking

export {
  selectRanking
};
