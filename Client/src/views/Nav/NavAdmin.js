import React from "react";
import './NavAdmin.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Link, NavLink
} from "react-router-dom";
class NavAdmin extends React.Component {
    render() {
        //e.preventDefault()
        return (
            <div>
                <div className="topnav">
                    <NavLink to="/admin" activeClassName="active" exact={true}>
                        Quản lý nhân viên
                    </NavLink>
                    <NavLink to="/admin/revenue" activeClassName="active">
                        Quản lý danh thu
                    </NavLink>
                    <NavLink to="/admin/salary" activeClassName="active">
                        Quản lý lương
                    </NavLink>
                    <NavLink to="/Login" activeClassName="active">
                        Logout
                    </NavLink>
                </div>
            </div>
        )
    }
}
export default NavAdmin;