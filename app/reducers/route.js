/*
 * NOTE: function name must be rootReducer
 */

import { LOCATION_CHANGE } from 'react-router-redux'
import merge from 'lodash/merge'

const initialState = {
  locationBeforeTransitions: null
}

export default function routeReducer(state = initialState, action) {
  const { type } = action

  switch(type) {
    case LOCATION_CHANGE:
      return merge({}, state, {
        locationBeforeTransitions: action.payload
      })

    default:
      return state
  }
}
