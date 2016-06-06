import React from 'react';
import { Route, IndexRoute} from 'react-router';
import App from 'components/app';
import PageNotFound from 'containers/pageNotFound';

export default (
  <Route path="/" components={App}>
    <Route path="*" component={PageNotFound} />
  </Route>
)
