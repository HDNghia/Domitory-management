import { useHistory } from "react-router-dom";
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import Checklogin from './CheckLogin';
import './Login.scss';
import axios from 'axios';

function Login(props) {
    const [loginn, setLogin] = useState({
        userName: '',
        password: ''
    })
    let history = useHistory()
    const login = async (data) => {
        try {
            let res = await axios.post(`https://localhost:7184/Account/Authenticate`, data);
            if (res.data.role == "Student") {
                localStorage.setItem(res.data.token, res.data.role);
                props.Token(res.data.token);
                history.replace("/student")
            }
            else if (res.data.role == "Admin") {
                localStorage.setItem(res.data.token, res.data.role);
                props.Token(res.data.token);
                history.replace("/admin")
            }
            else if (res.data.role == "Manager") {
                localStorage.setItem(res.data.token, res.data.role);
                props.Token(res.data.token);
                history.replace("/staff")
            }
            else {
                // history.replace("/login")
                alert('nhap sai tk va mk')
            }
        } catch (error) {
            console.log(error);
        }
    }
    const checkLogin = (event, item) => {
        let coppyState = { ...loginn }
        coppyState[item] = event.target.value;
        setLogin({
            ...coppyState
        })
    }
    return <div className="login">
        {localStorage.removeItem(localStorage.getItem("account"))}
        {localStorage.removeItem("account")}
        <div class="container">
            <div class="d-flex justify-content-center h-100">
                <div class="card">
                    <div class="card-header">
                        <h3>Sign In</h3>
                    </div>
                    <div class="card-body">
                        {/* form login */}
                        <div>
                            <div class="input-group form-group">
                                <div class="input-group-prepend">
                                    <span class="input-group-text"><i class="fas fa-user"></i></span>
                                </div>
                                <input type="text" class="form-control" placeholder="username" onChange={(event) => checkLogin(event, "userName")} />
                            </div>
                            <div class="input-group form-group">
                                <div class="input-group-prepend">
                                    <span class="input-group-text"><i class="fas fa-key"></i></span>
                                </div>
                                <input type="text" class="form-control" placeholder="password" onChange={(event) => checkLogin(event, "password")} />
                            </div>
                            <div class="form-group">
                                <input type="submit" value="Login" class="btn float-right login_btn" onClick={() => login(loginn)} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default Login;