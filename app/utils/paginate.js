import merge from 'lodash/merge';
import union from 'lodash/union';

export default ({ types, mapActionToKey }) => {
  if (!Array.isArray(types) || types.length !== 3) {
    throw new Error('Expected types to be an array of three elements.')
  }
  if (!types.every(t => typeof t === 'string')) {
    throw new Error('Expected types to be strings.')
  }
  if (typeof mapActionToKey !== 'function') {
    throw new Error('Expected mapActionToKey to be a function.')
  }

  const [ requestType, successType, failureType ] = types;

  const initialState = {
    loading: false,
    nextPageUrl: null,
    prevPageUrl: null,
    lastPageUrl: null,
    firstPageUrl: null,
    pageCount: 0
  };

  function updatePagination(state = initialState, action) {
    switch (action.type) {
      case requestType:
        return merge({}, state, {
          loading: true
        })
      case successType:
        const nextPageCount = state.pageCount;
        const { nextUrl, prevUrl, lastUrl, firstUrl } = action.response;
        return merge({}, state, {
          loading: false,
          nextPageUrl: nextUrl,
          prevPageUrl: prevUrl,
          lastPageUrl: lastUrl,
          firstPageUrl: firstUrl,
          pageCount: nextPageCount + 1
        });
      case failureType:
        return merge({}, state, {
          loading: false
        })
      default:
        return state
    }
  }

  return function updatePaginationByKey(state = {}, action) {
    switch (action.type) {
      case requestType:
      case successType:
      case failureType:
        const key = mapActionToKey(action)

        if (typeof key !== 'string') {
          throw new Error('Expected key to be a string.')
        }

        return merge({}, state, {
          [key]: updatePagination(state.key, action)
        })
      default:
        return state
    }
  }
}
