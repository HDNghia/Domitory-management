
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from "react";
import './Admin.scss';
import SidebarAdmin from '../Sidebar/SidebarAdmin';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import Addstaff from './AddStaff';
import UpdateStaff from './UpdateStaff';
import { toast } from 'react-toastify';
function Admin(props) {
    const [state, setState] = useState({ ListUsers: [] });
    const [modal, setModal] = useState(false);
    const [editstaff, setEditStaff] = useState({ StaffEdit: {} })
    const [modalEdit, setModalEdit] = useState(false);
    const toggleEdit = () => setModalEdit(!modalEdit);
    const toggle = () => setModal(!modal);
    useEffect(() => {
        async function fetchMyAPI() {
            let res = await axios.get(`https://localhost:7184/api/Manager`);
            setState({
                ListUsers: res.data ? res.data : []
            })
        }
        fetchMyAPI()
    }, [state.ListUsers])
    const createNewStaff = async (data) => {
        try {
            let res = await axios.post(`https://localhost:7184/api/Manager`, data);
            console.log('response create staff: ', res)
            setModal(false);
            toast.success("Thêm nhân viên thành công");
        } catch (error) {
            toast.error("Thêm nhân viên thất bại")
            console.log('check data from child: ', data)
        }
    }
    const handleEditStaff = (data) => {
        toggleEdit()
        setEditStaff({
            StaffEdit: data
        })
        console.log("check edit staff: ", editstaff.StaffEdit);
    }
    const updateStaffId = async (data) => {
        console.log('check updateUser: ', data)
        try {
            let res = await axios.put(`https://localhost:7184/api/Manager/${data.id}`, data);
            console.log('response create user: ', res)
            toggleEdit()
            toast.success("Cập nhật thành công");
        } catch (error) {
            toast.error("Cập nhật không thành công");
            console.log(error)
        }
        console.log('check data from child: ', data)
    }
    let history = useHistory()
    const handleViewDetailUser = (staff) => {
        history.replace(`/DetailStaff/${staff.id}`)
    }
    const handleDeleteStaff = async (data) => {
        console.log('check status: ', data.status)
        try {
            let res = await axios.put(`https://localhost:7184/api/Manager/${data.id}`, {
                lastName: data.lastName,
                firstName: data.firstName,
                dateOfBirth: data.dateOfBirth,
                email: data.email,
                identiFyCardNumber: data.identiFyCardNumber,
                phoneNumber: data.phoneNumber,
                address: data.address,
                gender: data.gender,
                idCard: data.idCard,
                status: false
            });
            console.log('response create user: ', res)
            toast.success("Xóa thành công")
        } catch (error) {
            toast.error("Xóa không thành công")
            console.log(error)
        }
    }
    return (
        < >
            <SidebarAdmin />
            <div class="section row">
                <h3 class="col-12">Quản lý nhân viên</h3>
                <button style={{ marginLeft: "auto" }} class="pl-3 pr-3 mb-2 btn btn-primary pull-right mr-5" onClick={toggle}>Thêm nhân viên</button>
                <div class="mr-4 text-white">...</div>
                <Addstaff
                    modal={modal}
                    toggle={toggle}
                    createNewStaff={createNewStaff}
                />
                {
                    modalEdit &&
                    <UpdateStaff
                        modal={modalEdit}
                        toggle={toggleEdit}
                        currentUser={editstaff}
                        updateStaff={updateStaffId}
                    />
                }
                <div id="" class="col-12">
                    <table class="table table-hover shadow">
                        <thead>
                            <tr class="border bg-light">
                                <th scope="col">Stt</th>
                                <th scope="col">Họ và tên</th>
                                <th scope="col">Giới tính</th>
                                <th scope="col">Email</th>
                                <th scope="col">idCard</th>
                                <th scope="col">Số điện thoại</th>
                                <th scope="col">Trạng thái</th>
                                <th scope="col">Sửa / xóa</th>
                            </tr>
                        </thead>
                        <tbody>
                            {state.ListUsers && state.ListUsers.length > 0 &&
                                state.ListUsers.map((item, index) => {
                                    return (
                                        <tr className="child " key={item.id} class="border">

                                            <td onClick={() => handleViewDetailUser(item)}>{item.id}</td>
                                            <td onClick={() => handleViewDetailUser(item)}>{item.lastName + " " + item.firstName}</td>
                                            <td onClick={() => handleViewDetailUser(item)}>{item.gender ? "Nam" : "Nữ"}</td>
                                            <td onClick={() => handleViewDetailUser(item)}>{item.email}</td>
                                            <td onClick={() => handleViewDetailUser(item)}>{item.idCard}</td>
                                            <td onClick={() => handleViewDetailUser(item)}>{item.phoneNumber}</td>
                                            <td onClick={() => handleViewDetailUser(item)}>{item.status ? <div class="text-success">Đang làm</div> : <div class="text-danger">Đã nghỉ</div>}</td>
                                            <td>
                                                <button class="btn btn-success mr-1" onClick={() => handleEditStaff(item)}><i class="fa fa-pencil" aria-hidden="true"></i></button>
                                                <button class="btn btn-danger" onClick={() => handleDeleteStaff(item)}><i class="fa fa-trash" aria-hidden="true"></i></button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>

            </div>
            <div class="clear-fix">
            </div>
        </>
    )
}


export default Admin;