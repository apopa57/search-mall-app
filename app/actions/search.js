import * as types from 'constants/actionTypes'
import { normalize, arrayOf } from 'normalizr'
import { ROOT_URL } from 'constants/base'
import { ItemSchema } from 'constants/schemas'
import { paramsToQueryString } from 'utils/common'
import { camelizeKeys } from 'humps'
import 'isomorphic-fetch'

const itemsRequest = () => {
  return {
    type: types.ITEMS_REQUEST
  }
}

const itemsSuccess = (entities, result, count, pageCount) => {
  return {
    type: types.ITEMS_SUCCESS,
    entities,
    result,
    count,
    pageCount
  }
}

const itemsFailure = (error) => {
  return {
    type: types.ITEMS_FAILURE,
    error
  }
}

const shouldSearchItem = (state) => {
  const { loading, isValidated } = state.search;

  if(loading) return false;
  return isValidated;
}

const searchItems = (url) => {
  return (dispatch, getState) => {
    dispatch(itemsRequest())
    return fetch(url)
      .then(response => response.json())
      .then(json => {
        json = camelizeKeys(json)
        const items = json.items.map( item => item.item );
        const normalized = normalize(items, arrayOf(ItemSchema))

        dispatch(itemsSuccess(normalized.entities, normalized.result, json.count, json.pageCount))
      })
      .catch(err => dispatch(itemsFailure(err)));
  }
}

export const searchItemsIfNeed = (params) => {
  return (dispatch, getState) => {
    const url = `${ROOT_URL}IchibaItem/Search/20140222?${paramsToQueryString(params)}`
    if(shouldSearchItem(getState())) {
      dispatch(searchItems(url))
    }
  }
}

export const checkValidation = (isValidated) => {
  return {
    type: types.CHECK_VALIDATION,
    isValidated
  }
}

export const onSearchParamsChange = (params) => {
  return {
    type: types.SEARCH_PARAMS_CHANGE,
    params
  }
}
