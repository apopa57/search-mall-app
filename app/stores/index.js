import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import rootReducer from 'reducers';
import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';

// Check if current env is dev or prod
const isDev = process.env.NODE_ENV !== 'production';
// Redux devtool chrome extension
const devtools = window.devToolsExtension || (() => noop => noop);

export default (initialState, history) => {
  const middlewares = [
    thunk,
    routerMiddleware(history)
  ];

  if(isDev) middlewares.push(createLogger());

  const enhancers = [
    applyMiddleware(...middlewares)
  ];

  if(isDev) enhancers.push(devtools());

  const store = createStore(
    rootReducer(),
    initialState,
    compose(...enhancers)
  )

  if (isDev && module.hot) {
    module.hot.accept('../reducers', () => {
      store.replaceReducer(require('./../reducers').default);
    });
  }

  return store
}
