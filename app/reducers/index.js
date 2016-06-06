import { combineReducers } from 'redux'
import route from 'reducers/route'
import entities from 'reducers/entities'
import search from 'reducers/search'

export default function createReducer(asyncReducers) {
  return combineReducers({
    route,
    entities,
    search,
    ...asyncReducers
  });
}
