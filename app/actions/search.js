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

const itemsSuccess = (entities, result, count) => {
  return {
    type: types.ITEMS_SUCCESS,
    entities,
    result,
    count
  }
}

const itemsFailure = (error) => {
  return {
    type: types.ITEMS_FAILURE,
    error
  }
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

        dispatch(itemsSuccess(normalized.entities, normalized.result, json.count))
      })
      .catch(err => dispatch(itemsFailure(err)));
  }
}

export const searchItemsIfNeed = (params) => {
  return (dispatch, getState) => {
    const url = `${ROOT_URL}IchibaItem/Search/20140222?${paramsToQueryString(params)}`
    dispatch(searchItems(url))
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
    type: types.CHANGE_SEARCH_INPUT,
    params
  }
}
