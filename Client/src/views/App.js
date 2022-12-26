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
import DetailStaff from './Admin/DetailStaff';
import UpdateStaff from './Admin/UpdateStaff';
import Room from './Admin/Room';
import ManagerStudent from './Admin/ManagerStudent';
import RegisterRoom from './Admin/RegisterRoom';
import Accommodation from './Student/Accommodation';
import Invoice from './Student/Invoice';
import DetailStudent from './Admin/DetailStudent';
import ManageReceipt from './Admin/ManageReceipt';
import PayElicWar from './Student/PayElicWar';
import Statistical from './Admin/Statistical';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
          <ToastContainer />
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
              return localStorage.getItem(localStorage.getItem("account")) == "Admin" ? <Admin /> : <>{localStorage.getItem(localStorage.getItem("account")) == "Manager" ? toast.error("Trang này dành cho admin") && <ManagerStudent /> : <Redirect to="/Login" />} </>
            }}>
            </Route>
            <Route path="/room" render={() => {
              return localStorage.getItem(localStorage.getItem("account")) == "Admin" || "Manager" ? <Room /> : <Redirect to="/Login" />
            }}>
            </Route>
            <Route path="/registerRoom" render={() => {
              return localStorage.getItem(localStorage.getItem("account")) == "Admin" || "Manager" ? <RegisterRoom /> : <Redirect to="/Login" />
            }}>
            </Route>
            <Route path="/ManagerStudent" render={() => {
              return localStorage.getItem(localStorage.getItem("account")) == "Admin" || "Manager" ? <ManagerStudent /> : <Redirect to="/Login" />
            }}></Route>
            <Route path="/ManageReceipt" render={() => {
              return localStorage.getItem(localStorage.getItem("account")) == "Admin" || "Manager" ? <ManageReceipt /> : <Redirect to="/Login" />
            }}></Route>
            <Route path="/statistical" render={() => {
              return localStorage.getItem(localStorage.getItem("account")) == "Admin" || "Manager" ? <Statistical /> : <Redirect to="/Login" />
            }}></Route>
            <Route path="/student" render={() => {
              return localStorage.getItem(localStorage.getItem("account")) == "Student" ? <Student /> : <Redirect to="/Login" />
            }}>
            </Route>
            <Route path="/payElicWar" render={() => {
              return localStorage.getItem(localStorage.getItem("account")) == "Student" ? <PayElicWar /> : <Redirect to="/Login" />
            }}>
            </Route>
            <Route path="/accommodation" render={() => {
              return localStorage.getItem(localStorage.getItem("account")) == "Student" ? <Accommodation /> : <Redirect to="/Login" />
            }}>
            </Route>
            <Route path="/Invoice" render={() => {
              return localStorage.getItem(localStorage.getItem("account")) == "Student" ? <Invoice /> : <Redirect to="/Login" />
            }}>
            </Route>
            <Route path="/staff" render={() => {
              return localStorage.getItem(localStorage.getItem("account")) == "Manager" ? <ManagerStudent /> : <Redirect to="/Login" />
            }}>
            </Route>
            <Route path="/DetailStaff/:id" render={() => {
              return localStorage.getItem(localStorage.getItem("account")) == "Admin" || "Manager" ? <DetailStaff /> : <Redirect to="/Login" />
            }}></Route>
            <Route path="/DetailStudent/:id" render={() => {
              return localStorage.getItem(localStorage.getItem("account")) == "Admin" || "Manager" ? <DetailStudent /> : <Redirect to="/Login" />
            }}></Route>
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
