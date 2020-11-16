import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Header from './Components/Header/Header';
import Home from './Pages/Home/Home';
import Login from './Components/Login/Login';
import Dashboard from './Components/Dashboard/Dashboard/Dashboard';
import AddHouse from './Components/Dashboard/AddHouse/AddHouse';
import MyRent from './Components/Dashboard/MyRent/MyRent';
import BookingList from './Components/Dashboard/BookingList/BookingList';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
        <Home></Home>
          </Route>
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
  
  );
}

export default App;
