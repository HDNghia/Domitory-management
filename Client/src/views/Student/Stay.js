import { useHistory } from "react-router-dom";
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavStudent from '../Nav/Nav';
import './Student.scss';

function Stay(props) {
    let history = useHistory()
    let Logout = () => {
        localStorage.removeItem("accessToken");
        history.replace("/Login")
    }
    return <div>
        <NavStudent />
        <h2>Page Stay</h2>
        <button className="btn btn-danger" onClick={Logout}>Logout</button>
    </div>
}

export default Stay;