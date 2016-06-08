import { TOGGLE_POPUP } from 'constants/actionTypes';
import merge from 'lodash/merge'

const initialState = {
  open: false
}

export default (state = initialState, action) => {
  const { type } = action;

  switch (type) {
    case TOGGLE_POPUP:
      return merge({}, state, {
        open: !state.open
      })

    default:
      return state
  }
}
