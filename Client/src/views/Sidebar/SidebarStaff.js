import React from "react";
import './SidebarStaff.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import { Link } from 'react-router-dom';

class SidebarStaff extends React.Component {
    render() {
        const toggle = () => {
            var menu = document.querySelector('.sidebar')
            menu.classList.toggle("fliph");
        }

        return (
            <div>
                <header class="header">
                    <nav class="navbar navbar-toggleable-md navbar-light pt-0 pb-0 ">
                        <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <a class="navbar-brand p-0 mr-5" href="#"><img src="data:image/png;base64,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" />
                        </a>
                        {/* <div class="float-left"> <a href="#" class="button-left" onClick={() => toggle()}><span class="fa fa-fw fa-bars "></span></a> </div> */}
                        <div class="collapse navbar-collapse flex-row-reverse" id="navbarNavDropdown">
                            <ul class="navbar-nav">
                                <li class="nav-item dropdown messages-menu">
                                    <a class="nav-link dropdown-toggle" href="http://example.com" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i class="fa fa-bell-o"></i>
                                        <span class="label label-success bg-success">10</span>
                                    </a>
                                    <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                        <ul class="dropdown-menu-over list-unstyled">
                                            <li class="header-ul text-center">You have 4 messages</li>
                                            <li>
                                                <ul class="menu list-unstyled">
                                                    <li>
                                                        <a href="#">
                                                            <div class="pull-left">
                                                                <img src="http://via.placeholder.com/160x160" class="rounded-circle  " alt="User Image" />
                                                            </div>
                                                            <h4>
                                                                Support Team
                                                                <small><i class="fa fa-clock-o"></i> 5 mins</small>
                                                            </h4>
                                                            <p>Why not buy a new awesome theme?</p>
                                                        </a>
                                                    </li>

                                                    <li>
                                                        <a href="#">
                                                            <div class="pull-left">
                                                                <img src="http://via.placeholder.com/160x160" class="rounded-circle " alt="User Image" />
                                                            </div>
                                                            <h4>
                                                                AdminLTE Design Team
                                                                <small><i class="fa fa-clock-o"></i> 2 hours</small>
                                                            </h4>
                                                            <p>Why not buy a new awesome theme?</p>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <div class="pull-left">
                                                                <img src="http://via.placeholder.com/160x160" class="rounded-circle " alt="User Image" />
                                                            </div>
                                                            <h4>
                                                                Developers
                                                                <small><i class="fa fa-clock-o"></i> Today</small>
                                                            </h4>
                                                            <p>Why not buy a new awesome theme?</p>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <div class="pull-left">
                                                                <img src="http://via.placeholder.com/160x160" class="rounded-circle " alt="User Image" />
                                                            </div>
                                                            <h4>
                                                                Sales Department
                                                                <small><i class="fa fa-clock-o"></i> Yesterday</small>
                                                            </h4>
                                                            <p>Why not buy a new awesome theme?</p>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <div class="pull-left">
                                                                <img src="http://via.placeholder.com/160x160" class="rounded-circle " alt="User Image" />
                                                            </div>
                                                            <h4>
                                                                Reviewers
                                                                <small><i class="fa fa-clock-o"></i> 2 days</small>
                                                            </h4>
                                                            <p>Why not buy a new awesome theme?</p>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li class="footer-ul text-center"><a href="#">See All Messages</a></li>
                                        </ul>
                                    </div>
                                </li>
                                <li class="nav-item dropdown notifications-menu">
                                    <a class="nav-link dropdown-toggle" href="http://example.com" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i class="fa fa-envelope-o"></i>
                                        <span class="label label-warning bg-warning">10</span>
                                    </a>
                                    <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                        <ul class="dropdown-menu-over list-unstyled">
                                            <li class="header-ul text-center">You have 10 notifications</li>
                                            <li>

                                                <ul class="menu list-unstyled">
                                                    <li>
                                                        <a href="#">
                                                            <i class="fa fa-users text-aqua"></i> 5 new members joined today
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <i class="fa fa-warning text-yellow"></i> Very long description here that may not fit into the
                                                            page and may cause design problems
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <i class="fa fa-users text-red"></i> 5 new members joined
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <i class="fa fa-shopping-cart text-green"></i> 25 sales made
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <i class="fa fa-user text-red"></i> You changed your username
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li class="footer-ul text-center"><a href="#">View all</a></li>
                                        </ul>
                                    </div>
                                </li>

                                <li class="nav-item dropdown  user-menu">
                                    <a class="nav-link dropdown-toggle" href="http://example.com" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <img src="http://via.placeholder.com/160x160" class="user-image" alt="User Image" />
                                        <span class="hidden-xs">Nhân viên</span>
                                    </a>
                                    <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                        <a class="dropdown-item" href="#">Action</a>
                                        <a class="dropdown-item" href="#">Another action</a>
                                        <a class="dropdown-item" href="#">Something else here</a>
                                    </div>
                                </li>
                                <li class="nav-item-btn-left" >
                                    <div class=""> <a href="#" class="button-left" onClick={() => toggle()}><span class="fa fa-fw fa-bars "></span></a> </div>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </header>
                <div class="main">
                    <aside>
                        <div class="sidebar left ">
                            <div class="user-panel">

                                <div class="pull-left info">
                                    <p>Nhân viên</p>

                                </div>
                            </div>
                            <ul class="list-sidebar bg-info">
                                <li><Link to="/staff" activeClassName="active" exact={true}><i class="fa fa-address-book"></i> <span class="nav-label">Danh sách sinh viên</span></Link> </li>
                                <li><Link to="/staff" activeClassName="active" exact={true}><i class="fa fa-list-alt"></i> <span class="nav-label">Danh sách phòng</span></Link> </li>
                                <li><Link to="/staff" activeClassName="active" exact={true}><i class="fa fa-laptop"></i> <span class="nav-label">Ghi và tính điện nước</span></Link> </li>
                                <li><Link to="/staff" activeClassName="active" exact={true}><i class="fa fa-files-o"></i> <span class="nav-label">Sắp xếp phòng</span></Link> </li>
                                <li><Link to="/staff" activeClassName="active" exact={true}><i class="fa fa-sticky-note-o"></i> <span class="nav-label">Ghi chú hư hỏng</span></Link> </li>
                                <li><Link to="/staff" activeClassName="active" exact={true}><i class="fa fa-wrench"></i> <span class="nav-label">Danh sách sửa chửa</span></Link> </li>
                                <li><Link to="/staff" activeClassName="active" exact={true}><i class="fa fa-exclamation-circle"></i> <span class="nav-label">Danh sách vi phạm</span></Link> </li>
                                <li><Link to="/Login" activeClassName="active" exact={true}><i class="fa fa-sign-out"></i> <span class="nav-label">Log out</span></Link> </li>
                            </ul>
                        </div>
                    </aside>
                </div>
            </div>
        )
    }
}
export default SidebarStaff;