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
    ids:{}
  }

  return function updatePaginationByKey(state = initialState, action) {
    const key = mapActionToKey(action)

    switch (action.type) {
      case newquestType:
        return Object.assign({}, state, {
          currentPage: 1,
          pageCount: 0,
          totalCount: 0,
          ids:{}
        })

      case successType:
        const { currentPage, pageCount, count } = action
        return Object.assign({}, state, {
          currentPage,
          pageCount,
          totalCount: count,
          ids: merge({}, state.ids, {
            [key]: action.result
          })
        })

      case requestType:
      case failureType:
        return Object.assign({}, state, {
          currentPage,
          ids: merge({}, state.ids, {
            [key]: action.result
          })
        })

      default:
        return state
    }
  }
}
