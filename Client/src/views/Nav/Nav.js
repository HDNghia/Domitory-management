import React from "react";
import './Nav.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Link, NavLink
} from "react-router-dom";
class Nav extends React.Component {
    render() {
        //e.preventDefault()
        return (
            <div>
                <div className="topnav">
                    <NavLink to="/" activeClassName="active" exact={true}>
                        Home
                    </NavLink>
                    <NavLink to="/user1" activeClassName="active">
                        user1
                    </NavLink>
                    <NavLink to="/user2" activeClassName="active">
                        user2
                    </NavLink>
                    <NavLink to="/user3" activeClassName="active">
                        user3
                    </NavLink>
                    <NavLink to="/Login" activeClassName="active">
                        Logout
                    </NavLink>
                </div>
            </div>
        )
    }
}
export default Nav;