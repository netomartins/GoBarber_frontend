import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './route';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import ForgotPassword from '../pages/ForgotPassword';
import ResetPassword from '../pages/ResetPassword';
import Profile from '../pages/Profile';

import Dashboard from '../pages/Dashboard';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignIn} isPrivate={false} />
    <Route path="/signup" component={SignUp} isPrivate={false} />
    <Route
      path="/forgot-password/"
      component={ForgotPassword}
      isPrivate={false}
    />

    <Route
      path="/reset-password/"
      component={ResetPassword}
      isPrivate={false}
    />
    <Route path="/profile" component={Profile} isPrivate />
    <Route path="/dashboard" component={Dashboard} isPrivate />
  </Switch>
);

export default Routes;
