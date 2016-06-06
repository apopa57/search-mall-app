import { GENRE_REQUEST, GENRE_SUCCESS, GENRE_FAILURE } from 'constants/actionTypes';

const initialState = {
  error: false,
  loading: false,
  ids: []
}

export default (state = initialState, action) => {
  const { type, error } = action;

  switch (type) {
    case GENRE_REQUEST:
      return Object.assign({}, state, {
        loading: true
      })

    case GENRE_SUCCESS:
      const { result } = action
      return Object.assign({}, state, {
        loading: false,
        ids: result
      })

    case GENRE_FAILURE:
      return Object.assign({}, state, {
        loading: false,
        error
      })

    default:
      return state
  }
}
