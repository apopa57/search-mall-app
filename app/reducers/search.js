import * as types from 'constants/actionTypes'
import { API_KEY } from 'constants/base'
import merge from 'lodash/merge'
import assign from 'lodash/assign'

const initialState = {
  params: {
    applicationId: API_KEY,
    format: 'json',
    hits: 20,
    keyword: '',  //Search value
    availability: 0, //Only available product
    genreId: 0, //Genre id
    page: 1, //Pagination
    hasReviewFlag: 0, //Products have review only
    shipOverseasFlag: 0, //Products can ship oversea
    asurakuFlag: 0, //Asaraku product
    minPrice: '', //Min price
    maxPrice: '', //Max price
    sort: 'standard',
    creditCardFlag: 0, //Products can pay only with credit
    pamphletFlag: 0, //Products have pamphlet only
    hasMovieFlag: 0, //Products have movie obly
    appointDeliveryDate: 0, //Products can be set deliver day only
    imageFlag: 0, //Products have image only
    postageFlag: 0 //Freeshipping only
  },
  loading: false,
  error: false,
  isValidated: true,
  newSearch: true,
  currentPage: 1,
  ids: []
}

export default (state = initialState, action) => {
  const { type, error, isValidated, params, currentPage } = action;

  switch (type) {
    case types.NEW_REQUEST:
      return Object.assign({}, state, {
        newSearch: true,
        currentPage: 1,
        ids: []
      })

    case types.SEARCH_PARAMS_CHANGE:
      return Object.assign({}, state, {
        params: merge({}, state.params, params)
      })

    case types.CHECK_VALIDATION:
      return Object.assign({}, state, {
        isValidated
      })

    case types.ITEMS_REQUEST:
      return Object.assign({}, state, {
        loading: true
      })

    case types.ITEMS_SUCCESS:
      const { result } = action

      return Object.assign({}, state, {
        loading: false,
        ids: result
      })


    case types.ITEMS_FAILURE:
      return Object.assign({}, state, {
        loading: false,
      })

    case types.PAGINATE_PAGE:
      return Object.assign({}, state, {
        newSearch: false,
        currentPage,
        params: merge({}, state.params, params)
      })

    default:
      return state
  }
}
