import React from "react";
import './Sidebar.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
class Side extends React.Component {
    render() {
        return (
            <div style={{ display: 'flex', height: '100%' }}>
                <Sidebar>
                    <Menu>
                        <MenuItem> Documentation </MenuItem>
                        <MenuItem> Calendar </MenuItem>
                        <MenuItem> E-commerce </MenuItem>
                        <MenuItem> Examples </MenuItem>
                    </Menu>
                </Sidebar>
            </div>
        )
    }
}
export default Side;