import React from 'react';
import {
  Route as ReactDOMRoute,
  RouteProps as RactDOMRouteProps,
  Redirect,
} from 'react-router-dom';

import { useAuth } from '../hooks/Auth';

interface RouteProps extends RactDOMRouteProps {
  isPrivate: boolean;
  component: React.ComponentType;
}

const Route: React.FC<RouteProps> = ({
  isPrivate = undefined,
  component: Component,
  ...rest
}) => {
  const { user } = useAuth();

  return (
    <ReactDOMRoute
      {...rest}
      render={({ location }) => {
        return isPrivate === !!user ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: isPrivate ? '/' : '/dashboard',
              state: { from: location },
            }}
          />
        );
      }}
    />
  );
};

export default Route;
