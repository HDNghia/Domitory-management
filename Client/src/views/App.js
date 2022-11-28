import './App.scss';
import Nav from './Nav/Nav';
import Home from './user/Home';
import User1 from './user/user1/user1';
import User2 from './user/user2/user2';
import User3 from './user/User3/user3';
import Admin from './Admin/Admin';
import Login from './Login/Login';
import Student from './Student/Student';
import Demand from './Student/Demand';
import Notify from './Student/Notify';
import Receipt from './Student/Receipt';
import Stay from './Student/Stay';
import Staff from './Staff/Staff';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory
} from "react-router-dom";
import { useState, useEffect } from 'react';
const App = () => {
  const [state, setState] = useState({
    token: ""
  })
  const check = (data) => {
    console.log('check data: ', data);
    state.token = data
    localStorage.setItem('account', state.token);
  }
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Switch>
            <Route path="/" exact render={() => {
              return localStorage.getItem("accessToken") == "user" ? <Home /> : <Redirect to="/Login" />
            }}>
            </Route>
            <Route path="/user1">
              <Nav />
              <User1 />
            </Route>
            <Route path="/user2">
              <Nav />
              <User2 />
            </Route>
            <Route path="/user3" exact>
              <Nav />
              <User3 />
            </Route>
            <Route path="/admin" render={() => {
              return localStorage.getItem(localStorage.getItem("account")) == "Admin" ? <Admin /> : <Redirect to="/Login" />
            }}>
            </Route>
            <Route path="/student" render={() => {
              return localStorage.getItem(localStorage.getItem("account")) == "Student" ? <Student /> : <Redirect to="/Login" />
            }}>
            </Route>
            <Route path="/staff" render={() => {
              return localStorage.getItem(localStorage.getItem("account")) == "Manager" ? <Staff /> : <Redirect to="/Login" />
            }}>
            </Route>
            <Route path="/Login" >
              <Login
                Token={check}
              />
            </Route>
          </Switch>
        </header>
      </div>
    </Router>
  );
}

export default App;
