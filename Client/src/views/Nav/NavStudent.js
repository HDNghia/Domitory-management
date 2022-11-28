import React from "react";
import './NavStudent.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Link, NavLink
} from "react-router-dom";
class NavStudent extends React.Component {
    render() {
        //e.preventDefault()
        return (
            <div>
                <div className="topnav">
                    <NavLink to="/student" activeClassName="active" exact={true}>
                        Thông tin sinh viên
                    </NavLink>
                    <NavLink to="/student/stay" activeClassName="active">
                        Thông tin lưu trú
                    </NavLink>
                    <NavLink to="/student/receipt" activeClassName="active">
                        Hóa đơn, biên lai
                    </NavLink>
                    <NavLink to="/student/demand" activeClassName="active">
                        Yêu cầu sửa chữa
                    </NavLink>
                    <NavLink to="/student/notify" activeClassName="active">
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
export default NavStudent;