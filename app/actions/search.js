import * as types from 'constants/actionTypes'
import { normalize, arrayOf } from 'normalizr'
import { ROOT_URL } from 'constants/base'
import { ItemSchema } from 'constants/schemas'
import { paramsToQueryString } from 'utils/common'
import { camelizeKeys } from 'humps'
import isEmpty from 'lodash/isEmpty'
import 'isomorphic-fetch'

const newRequest = () => {
  return {
    type: types.NEW_REQUEST
  }
}

const onPagePagination = (currentPage) => {
  return {
    type: types.PAGINATE_PAGE,
    currentPage
  }
}

const itemsRequest = (currentPage) => {
  return {
    currentPage,
    type: types.ITEMS_REQUEST
  }
}

const itemsSuccess = (entities, result, count, pageCount, currentPage) => {
  return {
    type: types.ITEMS_SUCCESS,
    entities,
    result,
    count,
    pageCount,
    currentPage
  }
}

const itemsFailure = (error, currentPage) => {
  return {
    type: types.ITEMS_FAILURE,
    error,
    currentPage
  }
}

const shouldSearchItem = (state) => {
  const { loading, isValidated, newSearch, currentPage } = state.search
  const { ids } =  state.pagination.search

  console.log(currentPage)


  if(loading) return false;
  return isValidated;
}

const searchItems = (url, page) => {
  return dispatch => {
    dispatch(itemsRequest(page))
    return fetch(url)
      .then(response => response.json())
      .then(json => {
        json = camelizeKeys(json)
        const items = json.items.map( item => item.item );
        const normalized = normalize(items, arrayOf(ItemSchema))

        dispatch(itemsSuccess(normalized.entities, normalized.result, json.count, json.pageCount, page))
      })
      .catch(err => dispatch(itemsFailure(err, page)));
  }
}

export const updateSeachParams = (key, value) => {
  return (dispatch, getState) => {
    const { params }  = getState().search
    params[key] = value
    dispatch(onSearchParamsChange(params))
  }
}

export const searchItemsIfNeed = () => {
  return (dispatch, getState) => {
    const state = getState();
    const { params } = state.search;
    const url = `${ROOT_URL}IchibaItem/Search/20140222?${paramsToQueryString(params)}`
    dispatch(checkValidation(!isEmpty(params.keyword)))
    if(shouldSearchItem(getState())) {
      dispatch(searchItems(url, params.page))
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

export const paginateSearching = (currentPage) => {
  return dispatch => {
    dispatch(onPagePagination(currentPage))
    dispatch(updateSeachParams('page', currentPage))
  }
}

export const resetSearch = () => {
  return dispatch => {
    dispatch(newRequest())
    dispatch(updateSeachParams('page', 1))
  }
}
