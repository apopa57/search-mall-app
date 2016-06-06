import merge from 'lodash/merge';

const initialState = {
  items: {},
  genres: {}
}

export default (state = initialState, action) => {
  if(action.entities) {
    return merge({}, state, action.entities)
  }

  return state
}
