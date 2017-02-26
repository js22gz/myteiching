import { MasterPage, IndexPage, LoginPage, RegistrationPage, ProfilePage } from './pages';

import ReactStormpath, { Router, HomeRoute, LoginRoute, AuthenticatedRoute } from 'react-stormpath';
import React from 'react';
import ReactDOM from 'react-dom';
import { IndexRoute, Route, browserHistory } from 'react-router';

ReactStormpath.init();
ReactDOM.render(
  <Router history={browserHistory}>
    <HomeRoute path='/' component={MasterPage}>
    <AuthenticatedRoute>
      <HomeRoute path='/profile' component={ProfilePage} />
    </AuthenticatedRoute>
  <IndexRoute component={IndexPage} />
  <LoginRoute path='/login' component={LoginPage} />
  <Route path='/register' component={RegistrationPage} />
</HomeRoute>
  </Router>,
  document.getElementById('app-container')
);
