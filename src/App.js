import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from './Pages/Home/Home';
import HomeDetails from './Pages/HomeDetails/HomeDetails';
import Login from './Components/Login/Login';

function App() {
  return (
    <Router>
      {/* <HomeDetails/> */}
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path={`/home/:homeDetailsId`}>
          <HomeDetails></HomeDetails>
        </Route>
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
