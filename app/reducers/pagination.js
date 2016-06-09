import * as types from 'constants/actionTypes'
import { combineReducers } from 'redux'
import paginate from 'utils/paginate'

const pagination = combineReducers({
  search: paginate({
    mapActionToKey: action => action.currentPage,
    types: [
      types.NEW_REQUEST,
      types.ITEMS_REQUEST,
      types.ITEMS_SUCCESS,
      types.ITEMS_FAILURE
    ]
  })
})

export default pagination
