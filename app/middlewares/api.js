import { normalize, Schema, arrayOf } from 'normalizr';
import { camelizeKeys } from 'humps';
import { ROOT_URL, CALL_API } from 'constants/base';
import { getPaginatedUrls } from 'utils/common';
import 'isomorphic-fetch';

const buildPaginationUrls = (response) => {
  const link = response.headers.get('link');
  return {
    firstUrl: getPaginatedUrls(link, 'rel="first"'),
    lastUrl: getPaginatedUrls(link, 'rel="last"'),
    prevUrl: getPaginatedUrls(link, 'rel="prev"'),
    nextUrl: getPaginatedUrls(link, 'rel="next"')
  };
}

const callApi = (endpoint, schema) => {
  const reqUrl = (endpoint.indexOf(ROOT_URL) === -1) ? `${ROOT_URL}${endpoint}` : endpoint;

  return fetch(reqUrl)
    .then(response => response.json().then(json => ({ json, response })))
    .then(({ json, response }) => {
      if (!response.ok) return Promise.reject(json);
      const paginationUrls = buildPaginationUrls(response);
      json = camelizeKeys(json);

      return Object.assign({}, normalize(json, schema), { ...paginationUrls });
    });
}

export default store => next => action => {
  const callAPI = action[CALL_API]
  if (typeof callAPI === 'undefined') {
    return next(action)
  }

  let { endpoint } = callAPI
  const { types , schema } = callAPI

  if (!schema) {
    throw new Error('Specify one of the exported Schemas.')
  }

  if (typeof endpoint === 'function') {
    endpoint = endpoint(store.getState())
  }

  if (typeof endpoint !== 'string') {
    throw new Error('Specify a string endpoint URL.')
  }

  if (!Array.isArray(types) || types.length !== 3) {
    throw new Error('Expected an array of three action types.')
  }
  if (!types.every(type => typeof type === 'string')) {
    throw new Error('Expected action types to be strings.')
  }

  function actionWith(data) {
    const finalAction = Object.assign({}, action, data)
    delete finalAction[CALL_API]
    return finalAction
  }

  const [ requestType, successType, failureType ] = types
  next(actionWith({ type: requestType}))

  return callApi(endpoint, schema).then(
    response => next(actionWith({
      response,
      type: successType
    })),
    error => {
      next(actionWith({
        type: failureType,
        error: error.message || 'Something wrong happened',
      }))
    }
  )
}
