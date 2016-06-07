import * as types from 'constants/actionTypes';

const initialState = {
  open: false
}

export default (state = initialState, action) => {
  const { type } = action;

  switch (type) {
    case types.TOGGLE_POPUP:
      return Object.assign({}, state, {
        open: !state.open
      })

    default:
      return state
  }
}
