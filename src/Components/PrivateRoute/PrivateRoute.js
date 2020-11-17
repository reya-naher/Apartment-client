import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { UserContext } from '../../App';

const PrivateRoute = ({ children, ...rest }) => {
  const {loginUser} = React.useContext(UserContext)
  const [loggedInUser] = loginUser;
  return (
    <Route
      {...rest}
      render={({ location }) =>
        loggedInUser.email ? 
          children :  <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
      }
    />
  );
};

export default PrivateRoute;