import { useHistory } from "react-router-dom";
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import Checklogin from './CheckLogin';
import './Login.scss';
import axios from 'axios';
import { toast } from 'react-toastify';


function Login(props) {
    const [loginn, setLogin] = useState({
        userName: '',
        password: ''
    })
    let history = useHistory()
    const login = async (data) => {
        try {
            let res = await axios.post(`https://localhost:7184/Account/Authenticate`, data);
            console.log('check res: ', res);
            if (res.data.role == "Student") {
                localStorage.setItem(res.data.token, res.data.role);
                localStorage.setItem("id", res.data.id);
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
            toast.error("Tài khoản hoặc mật khẩu không đúng")

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
        {localStorage.removeItem("id")}
        <div class="bg-info text-info pb-4">.</div>
        <div class="text-center p-3"><img class="mr-3" src="https://upload.wikimedia.org/wikipedia/vi/c/c6/Logo_KTX_%C4%90HQGTPHCM.png"></img><span class="h5 text-info">TRANG THÔNG TIN SINH VIÊN Ở KÝ TÚC XÁ ĐẠI HỌC QUỐC GIA</span></div>
        <div class="text-info p-2 bg-light border ">.</div>
        <div class="mt-5">
            <div class="d-flex justify-content-center h-100 ">
                <div class="card">
                    <div class="card-header bg-light">
                        <h3 class="text-center text-info">Đăng nhập</h3>
                    </div>
                    <div class="card-body bg-light">
                        {/* form login */}
                        <div>
                            <div class="input-group form-group" >
                                <div class="input-group-prepend">
                                    <span class="input-group-text bg-primary"><i class="fas fa-user text-white"></i></span>
                                </div>
                                <input type="text" class="form-control" placeholder="Tài khoản" onChange={(event) => checkLogin(event, "userName")} />
                            </div>
                            <div class="input-group form-group" >
                                <div class="input-group-prepend">
                                    <span class="input-group-text bg-primary"><i class="fa fa-lock text-white"></i></span>
                                </div>
                                <input type="password" class="form-control" placeholder="Mật khẩu" onChange={(event) => checkLogin(event, "password")} />
                            </div>
                            <div class="form-group" >
                                <button type="button" class="btn btn-primary pr-5 pl-5 w-100" onClick={() => login(loginn)}><i class="fa fa-key" aria-hidden="true"></i> Đăng nhập</button>
                            </div>
                            <button type="button" class="btn btn-success">Đăng ký ở ktx</button>
                            <button type="button" class="btn btn-info ml-3">Quên mật khẩu</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default Login;