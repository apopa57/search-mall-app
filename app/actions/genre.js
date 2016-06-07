import { GENRE_REQUEST, GENRE_SUCCESS, GENRE_FAILURE, SELECT_GENRE } from 'constants/actionTypes'
import { API_KEY, ROOT_URL } from 'constants/base'
import { normalize, arrayOf } from 'normalizr'
import { GenreSchema } from 'constants/schemas'
import { camelizeKeys } from 'humps'
import 'isomorphic-fetch'
import isEmpty from 'lodash/isEmpty'
import localStorage from 'utils/localStorage'

const genresRequest = () => {
  return {
    type: GENRE_REQUEST
  }
}

const genresSuccess = (entities, result) => {
  return {
    type: GENRE_SUCCESS,
    entities
  }
}

const genresFailure = (error) => {
  return {
    type: GENRE_FAILURE,
    error
  }
}

const shouldFetchGenre = (state) => {
  const { genres } = state.entities;
  if(!isEmpty(genres)) return false;
  return true;
}

const fetchGenres = (url) => {
  return (dispatch) => {
    dispatch(genresRequest())
    return fetch(url)
      .then(response => response.json())
      .then(json => {
        const genres =camelizeKeys(json).children.map((genre) =>  genre.child)
        const normalized = normalize(genres, arrayOf(GenreSchema))
        localStorage.set('genres', normalized.entities);
        dispatch(genresSuccess(normalized.entities))
      })
      .catch(err => dispatch(genresFailure(err)));
  }
}

export const fetchGenresIfNeeded = () => {
  const url = `${ROOT_URL}IchibaGenre/Search/20140222?format=json&genreId=0&applicationId=${API_KEY}`

  return (dispatch, getState) => {
    if(shouldFetchGenre(getState())) {
      dispatch(fetchGenres(url))
    }
  }
}

export const selectGenre = (genreId) => {
  return {
    type: SELECT_GENRE,
    genreId
  }
}
