import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Pages/Home/Home';
import HomeDetails from './Pages/HomeDetails/HomeDetails';
import Login from './Components/Login/Login';
import Dashboard from './Components/Dashboard/Dashboard/Dashboard';
import AddHouse from './Components/Dashboard/AddHouse/AddHouse';
import MyRent from './Components/Dashboard/MyRent/MyRent';
import BookingList from './Components/Dashboard/BookingList/BookingList';
import { createContext, useEffect, useState } from 'react';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  const [apartments, setApartments] = useState([])

  useEffect(() => {
    fetch('https://fierce-depths-38221.herokuapp.com/apartments')
    .then(res => res.json())
    .then(data => setApartments(data))
  }, [apartments])

  return (
    <UserContext.Provider 
    value={{
      loginUser: [loggedInUser, setLoggedInUser],
      apartment: [apartments, setApartments]
      }}>
    <Router>
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
          <Route path="/dashboard">
          <Dashboard></Dashboard>
          </Route>
          <Route path="/bookingList">
          <BookingList></BookingList>
          </Route>
          <Route path="/addhouse">
           <AddHouse></AddHouse>
          </Route>
          <Route path="/myrent">
           <MyRent></MyRent>
          </Route>
          </Switch>
      </Router>
      </UserContext.Provider>
  );
}

export default App;
