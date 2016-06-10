import { combineReducers } from 'redux'
import route from 'reducers/route'
import entities from 'reducers/entities'
import layout from 'reducers/layout'
import search from 'reducers/search'
import pagination from 'reducers/pagination'

export default function createReducer(asyncReducers) {
  return combineReducers({
    route,
    entities,
    pagination,
    layout,
    search,
    ...asyncReducers
  });
}
