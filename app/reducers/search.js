import * as types from 'constants/actionTypes';

const initialState = {
  params: {},
  loading: false,
  error: false,
  isValidated: true,
  ids: []
}

export default (state = initialState, action) => {
  const { type, error, isValidated, params } = action;

  switch (type) {
    case types.SEARCH_PARAMS_CHANGE:
      return Object.assign({}, state, {
        params
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
        error
      })

    default:
      return state
  }
}
