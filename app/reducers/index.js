import { combineReducers } from 'redux'
import route from 'reducers/route'
import entities from 'reducers/entities'
import search from 'reducers/search'
import genres from 'reducers/genres'
import ranking from 'reducers/ranking'

export default function createReducer(asyncReducers) {
  return combineReducers({
    route,
    entities,
    search,
    genres,
    ranking,
    ...asyncReducers
  });
}
