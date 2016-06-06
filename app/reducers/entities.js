import merge from 'lodash/merge'
import localStorage from 'utils/localStorage'

const initialState = {
  items: {},
  genres: localStorage.get('genres') || {},
  ranking: {}
}

export default (state = initialState, action) => {
  if(action.entities) {
    return merge({}, state, action.entities)
  }

  return state
}
