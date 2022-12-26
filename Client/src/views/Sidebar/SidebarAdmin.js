import React from "react";
import './SidebarAdmin.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import { Link } from 'react-router-dom';

class SidebarAdmin extends React.Component {
    render() {
        const toggle = () => {
            var menu = document.querySelector('.sidebar')
            menu.classList.toggle("fliph");
        }
        return (
            <div class="sidebar-for-admin bg-info">
                <header class="header d-flex ">
                    <div class="text-center p-2" style={{ "margin-left": "35%" }}><img class="mr-3 " src="https://upload.wikimedia.org/wikipedia/vi/c/c6/Logo_KTX_%C4%90HQGTPHCM.png"></img><span class="h5 text-info">TRANG QUẢN LÝ KÝ TÚC XÁ ĐẠI HỌC QUỐC GIA</span></div>
                    <div class="text-white ml-5">.</div>
                    <div class="text-white ml-3">.</div>
                    <nav class="navbar navbar-toggleable-md navbar-light pt-0 pb-0">

                        <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>

                        {/* <div class="float-left"> <a href="#" class="button-left" onClick={() => toggle()}><span class="fa fa-fw fa-bars "></span></a> </div> */}
                        <div class="collapse navbar-collapse flex-row-reverse" id="navbarNavDropdown">
                            <ul class="navbar-nav">

                                <li class="nav-item dropdown  user-menu">
                                    <a class="nav-link dropdown-toggle" href="http://example.com" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <img src="http://via.placeholder.com/160x160" class="user-image" alt="User Image" />
                                        <span class="hidden-xs">Quản trị viên</span>
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
                <div class="main pr-2" >
                    <aside >
                        <div class="sidebar left " >
                            <div class="user-panel">

                                <div class="pull-left info">
                                    <p>Quản trị viên</p>

                                </div>
                            </div>
                            <ul class="list-sidebar bg-info"  >

                                <li><Link to="/admin" activeClassName="active" exact={true}><i class="fa fa-address-book"></i> <span class="nav-label">Quản lý nhân viên</span></Link> </li>
                                <li><Link to="/ManagerStudent" activeClassName="active" exact={true}><i class="fa fa-graduation-cap"></i> <span class="nav-label">Quản lý sinh viên</span></Link> </li>
                                <li><Link to="/room" activeClassName="active" exact={true}><i class="fa fa-list-alt"></i> <span class="nav-label">Quản lý phòng</span></Link> </li>
                                <li><Link to="/registerRoom" activeClassName="active" exact={true}><i class="fa fa-laptop"></i> <span class="nav-label">Quản lý đăng ký</span></Link> </li>
                                <li><Link to="/ManageReceipt" activeClassName="active" exact={true}><i class="fa fa-money"></i> <span class="nav-label">Tiền điện, tiền nước</span></Link> </li>
                                <li><Link to="/statistical" activeClassName="active" exact={true}><i class="fa fa-signal"></i> <span class="nav-label">Thống kê</span></Link> </li>
                                {/* <li><Link to="/admin" activeClassName="active" exact={true}><i class="fa fa-money"></i> <span class="nav-label">Phí nội trú năm mới</span></Link> </li> */}
                                <li><Link to="/Login" activeClassName="active" exact={true}><i class="fa fa-sign-out"></i> <span class="nav-label">Log out</span></Link> </li>
                                <li class="text-info" ><div>.</div></li>
                                <li class="text-info" ><div>.</div></li>
                                <li class="text-info" ><div>.</div></li>
                                <li class="text-info" ><div>.</div></li>
                                <li class="text-info" ><div>.</div></li>
                                <li class="text-info" ><div>.</div></li>
                                <li class="text-info" ><div>.</div></li>
                                <li class="text-info pb-4" ><div>.</div></li>
                            </ul>
                        </div>
                    </aside>
                </div>
            </div>
        )
    }
}
export default SidebarAdmin;