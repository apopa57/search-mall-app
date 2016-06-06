import { combineReducers } from 'redux'
import route from 'reducers/route'

export default function createReducer(asyncReducers) {
  return combineReducers({
    route,
    ...asyncReducers
  });
}
