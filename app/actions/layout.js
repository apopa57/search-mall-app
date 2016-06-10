import { CHANGE_ITEM_VIEW , TOGGLE_POPUP } from 'constants/actionTypes'

export const selectDisplayType = (viewType) => {
  return {
    type: CHANGE_ITEM_VIEW,
    viewType
  }
}

export const togglePopup = () => {
  return {
    type: TOGGLE_POPUP
  }
}
