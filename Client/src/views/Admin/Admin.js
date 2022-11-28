
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from "react";
import './Admin.scss';
import SidebarAdmin from '../Sidebar/SidebarAdmin';

function Admin(props) {
    return (
        <>
            <SidebarAdmin />
            <div class="section">
                <h3>Danh sách nhân viên</h3>
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Mã</th>
                            <th scope="col">Tên đăng nhập</th>
                            <th scope="col">Họ tên</th>
                            <th scope="col">CMND</th>
                            <th scope="col">Điện thoại</th>
                            <th scope="col">Chức vụ</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Nghia</td>
                            <td>Huỳnh Đăng Nghĩa</td>
                            <td>20521650</td>
                            <td>0905832110</td>
                            <td>Quản lý tòa F2</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Nghia1</td>
                            <td>Huỳnh Đăng Nghĩa một</td>
                            <td>20521650</td>
                            <td>0905832110</td>
                            <td>Quản lý tòa F1</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Nghia2</td>
                            <td>Huỳnh Đăng Nghĩa hai</td>
                            <td>20521650</td>
                            <td>0905832110</td>
                            <td>Quản lý tòa B2</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="clear-fix">
            </div>
        </>
    )
}


export default Admin;