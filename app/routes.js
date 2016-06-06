import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from 'components/app';
import Home from 'components/home';
import PageNotFound from 'containers/pageNotFound';

export default (
  <Route path="/" components={App}>
    <IndexRoute component={Home}/>
    <Route path="*" component={PageNotFound} />
  </Route>
)
