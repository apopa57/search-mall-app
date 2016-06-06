import { RANKING_REQUEST, RANKING_SUCCESS, RANKING_FAILURE } from 'constants/actionTypes'
import { API_KEY, ROOT_URL } from 'constants/base'
import { normalize, arrayOf } from 'normalizr'
import { ItemSchema } from 'constants/schemas'
import { camelizeKeys } from 'humps'
import 'isomorphic-fetch'

const rankingRequest = () => {
  return {
    type: RANKING_REQUEST
  }
}

const rankingSuccess = (entities, result) => {
  return {
    type: RANKING_SUCCESS,
    entities,
    result
  }
}

const rankingFailure = (error) => {
  return {
    type: RANKING_FAILURE,
    error
  }
}

const fetchRanking = (url) => {
  return (dispatch, getState) => {
    dispatch(rankingRequest())

    return fetch(url)
      .then(response => response.json())
      .then(json => {
        const camelizedJson = camelizeKeys(json)
        const items = camelizedJson.items.map( item => item.item );
        const normalized = normalize(items, arrayOf(ItemSchema))

        dispatch(rankingSuccess(normalized.entities, normalized.result))
      })
      .catch(err => dispatch(rankingFailure(err)));
  }
}

export const fetchRankingIfNeeded = () => {
  const url = `${ROOT_URL}IchibaItem/Ranking/20120927?format=json&applicationId=${API_KEY}`

  return (dispatch, getState) => {
    dispatch(fetchRanking(url))
  }
}
