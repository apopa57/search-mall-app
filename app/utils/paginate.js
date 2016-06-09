import merge from 'lodash/merge'

export default ({ types, mapActionToKey }) => {
  if (!Array.isArray(types) || types.length !== 4) {
    throw new Error('Expected types to be an array of three elements.')
  }
  if (!types.every(t => typeof t === 'string')) {
    throw new Error('Expected types to be strings.')
  }
  if (typeof mapActionToKey !== 'function') {
    throw new Error('Expected mapActionToKey to be a function.')
  }

  const [ newquestType, requestType, successType, failureType ] = types;

  const initialState = {
    currentPage: 1,
    pageCount: 0,
    totalCount: 0,
    ids:{
      1: []
    }
  }

  function updatePagination(state = [] , action) {
    switch (action.type) {
      case successType:
        return merge({}, state, action.result);
      default:
        return state
    }
  }

  return function updatePaginationByKey(state = initialState, action) {
    const key = mapActionToKey(action)

    switch (action.type) {
      case successType:
        const { currentPage, pageCount, count } = action

        return merge({}, state, {
          currentPage,
          pageCount,
          totalCount: count,
          ids: {
            [key]: updatePagination(state.ids.key, action)
          }
        })
      case requestType:
      case failureType:
        return merge({}, state, {
          currentPage,
          ids: {
            [key]: updatePagination(state.ids.key, action)
          }
        })
      case newquestType:
      default:
        return state
    }
  }
}
