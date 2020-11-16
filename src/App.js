import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from './Pages/Home/Home';
import HomeDetails from './Pages/HomeDetails/HomeDetails';
import Login from './Components/Login/Login';
import { createContext, useState } from 'react';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';

export const UserContext = createContext()

function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <UserContext.Provider value={{ loggedInUser, setLoggedInUser}}>
    <Router>
      {/* <HomeDetails/> */}
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <PrivateRoute path={`/home/:homeDetailsId`}>
          <HomeDetails></HomeDetails>
        </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          </Switch>
      </Router>
      </UserContext.Provider>
  );
}

export default App;
