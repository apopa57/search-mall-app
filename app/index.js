import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { selectLocationState } from 'selectors/route';
import createStore from 'stores';
import routes from './routes';
import { bootstrap } from './hooks';

const store = createStore({}, browserHistory);
const history = syncHistoryWithStore(browserHistory, store, {
  selectLocationState: selectLocationState()
});

bootstrap(store)();

ReactDOM.render(
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>,
  document.getElementById('app')
);
