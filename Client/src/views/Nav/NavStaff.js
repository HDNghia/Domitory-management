import React from "react";
import './NavStaff.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Link, NavLink
} from "react-router-dom";
class NavStaff extends React.Component {
    render() {
        //e.preventDefault()
        return (
            <div>
                <div className="topnav">
                    <NavLink to="/staff" activeClassName="active" exact={true}>
                        Quản lý sinh viên
                    </NavLink>
                    <NavLink to="/staff/mangageReceipt" activeClassName="active">
                        Quản lý hóa đơn
                    </NavLink>
                    <NavLink to="/staff/manageFile" activeClassName="active">
                        Quản lý hồ sơ
                    </NavLink>
                    <NavLink to="/staff/notify" activeClassName="active">
                        Thông báo
                    </NavLink>
                    <NavLink to="/Login" activeClassName="active">
                        Logout
                    </NavLink>
                </div>
            </div>
        )
    }
}
export default NavStaff;