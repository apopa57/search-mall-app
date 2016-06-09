import * as types from 'constants/actionTypes'
import { API_KEY } from 'constants/base'
import merge from 'lodash/merge'
import assign from 'lodash/assign'

const initialState = {
  params: {
    applicationId: API_KEY,
    format: 'json',
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
  currentPage: 1
}

export default (state = initialState, action) => {
  const { type, error, isValidated, params, currentPage } = action;

  switch (type) {
    case types.NEW_REQUEST:
      return merge({}, state, {
        newSearch: true
      })

    case types.SEARCH_PARAMS_CHANGE:
      return merge({}, state, {
        params
      })

    case types.CHECK_VALIDATION:
      return merge({}, state, {
        isValidated
      })

    case types.ITEMS_REQUEST:
      return merge({}, state, {
        loading: true
      })

    case types.ITEMS_SUCCESS:
    case types.ITEMS_FAILURE:
      return merge({}, state, {
        loading: false,
      })

    case types.PAGINATE_PAGE:
      return merge({}, state, {
        newSearch: false,
        currentPage,
        params: {
          page: currentPage
        }
      })

    default:
      return state
  }
}
