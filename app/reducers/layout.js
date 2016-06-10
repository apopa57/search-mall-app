import { TOGGLE_POPUP, CHANGE_ITEM_VIEW } from 'constants/actionTypes';
import merge from 'lodash/merge'

const initialState = {
  open: false,
  defaultItemView: 'box'
}

export default (state = initialState, action) => {
  const { type,  viewType } = action;

  switch (type) {
    case CHANGE_ITEM_VIEW:
      return Object.assign({}, state, {
        defaultItemView: viewType
      })

    case TOGGLE_POPUP:
      return Object.assign({}, state, {
        open: !state.open
      })

    default:
      return state
  }
}
