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
          </Switch>
      </Router>
  
  );
}

export default App;
