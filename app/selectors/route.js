/*
 * Route state selectors
 */

import differenceWith from 'lodash/differenceWith'
import isEqual from 'lodash/isEqual'

const selectLocationState = () => {
  let prevRoutingState

  return (state) => {
    const routingState = state.route;

    if(differenceWith(routingState, prevRoutingState, isEqual)) {
      prevRoutingState = routingState;
    }

    return prevRoutingState;
  }
}

export {
  selectLocationState
};
