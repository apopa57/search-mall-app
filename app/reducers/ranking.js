import { RANKING_SUCCESS, RANKING_FAILURE } from 'constants/actionTypes';

const initialState = {
  error: false,
  ids: []
}

export default (state = initialState, action) => {
  const { type, error } = action;

  switch (type) {
    case RANKING_SUCCESS:
      const { result } = action
      return Object.assign({}, state, {
        ids: result
      })

    case RANKING_FAILURE:
      return Object.assign({}, state, {
        error
      })

    default:
      return state
  }
}
