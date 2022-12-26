
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from "react";
import './ManagerStudent.scss';
import SidebarAdmin from '../Sidebar/SidebarAdmin';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import Addstudent from './AddStudent';
import UpdateStudent from './UpdateStudent';
import { toast } from 'react-toastify';
function ManagerStudent(props) {
    const [state, setState] = useState({ ListUsers: [] });
    const [modal, setModal] = useState(false);
    const [editStudent, setEditstudent] = useState({ StudentEdit: {} })
    const [modalEdit, setModalEdit] = useState(false);
    const [id, setId] = useState({ idStudent: "" })
    const toggleEdit = () => setModalEdit(!modalEdit);
    const toggle = () => setModal(!modal);
    useEffect(() => {
        async function fetchMyAPI() {
            let res = await axios.get(`https://localhost:7184/Student`);
            setState({
                ListUsers: res.data ? res.data : []
            })
        }
        fetchMyAPI()
    }, [])
    const createNewStudent = async (data) => {
        try {
            console.log('check data child: ', data)
            let res = await axios.post(`https://localhost:7184/Student`, data);
            console.log('response create student: ', res)
            setModal(false);
            toast.success("Add new student success");
        } catch (error) {
            toast.error("Add new student fail")
            console.log('check data from child: ', data)
        }
    }
    const handleEditstudent = (data) => {
        console.log("check item :", data);
        toggleEdit()
        setEditstudent({
            StudentEdit: data
        })
        console.log("check edit student: ", editStudent.StudentEdit);
    }
    const UpdateStudentId = async (data) => {
        console.log('check updateUser: ', data)
        try {
            let res = await axios.put(`https://localhost:7184/Student/${data.id}`, data);
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
    const handleViewDetailUser = (student) => {
        history.replace(`/DetailStudent/${student.id}`)
    }
    const handleDeleteStudent = async (data) => {
        console.log('check status: ', data)
        try {
            let res = await axios.put(`https://localhost:7184/Student/${data.id}`, {
                lastName: data.lastName,
                firstName: data.firstName,
                birthDate: data.birthDate,
                gender: data.gender,
                ethnic: data.ethnic,
                nationnality: data.nationnality,
                phoneNumber: data.phoneNumber,
                homeAddress: data.homeAddress,
                mainAddress: data.mainAddress,
                email: data.email,
                avartar: data.avartar,
                identifyCardNumber: data.identifyCardNumber,
                universitysutdentId: data.universitysutdentId,
                faculty: data.faculty,
                major: data.major,
                schoolYear: data.schoolYear,
                relatedPersonName: data.relatedPersonName,
                relatedPersonPhoneNumber: data.relatedPersonPhoneNumber,
                status: false,
                universityId: 1,

            }
            );
            console.log('response create user: ', res)
            toast.success("Xóa thành công")
        } catch (error) {
            toast.error("Xóa không thành công")
            console.log(error)
        }
    }
    const handleOnclickSearch = async () => {
        if (id.idStudent != "") {
            try {
                let res = await axios.get(`https://localhost:7184/Student/${id.idStudent}`);
                console.log("check state id in onclic", res.data)
                setState({
                    ListUsers: res.data
                })
            } catch (error) {
                toast.error("Không có dữ liệu")
            }
        }
        else if (id.idStudent == "") {
            try {
                let res = await axios.get(`https://localhost:7184/Student`);
                setState({
                    ListUsers: res.data ? res.data : []
                })
            } catch (error) {
                toast.error("Không có dữ liệu")
            }
        }
    }
    const handleOnChangeInput = async (event, item) => {
        let coppy = { ...id };
        coppy[item] = event.target.value;
        setId({
            ...coppy
        })
    }
    return (
        <>
            {/* <NavStudent /> */}
            <SidebarAdmin />
            <div class="section row">
                <h3 class="w-100 ">Quản lý sinh viên</h3>
                <nav class="navbar navbar-light ml-5">
                    <div class="row ml-1">
                        <input class="col form-control mr-sm-2 " type="text" placeholder="Id Student" value={id.idStudent} aria-label="Search" onChange={(event) => handleOnChangeInput(event, "idStudent")}></input>
                        <button class="col btn btn-outline-success my-2 my-sm-0" type="submit" onClick={() => handleOnclickSearch()}>Search</button>
                        {/* <div class="col-6"></div> */}
                    </div>
                </nav>
                <button style={{ marginLeft: "auto" }} class="pl-3 pr-3 mb-2 btn btn-primary pull-right mr-5" onClick={toggle}>Thêm sinh viên</button>
                <div class="mr-4 text-white">...</div>
                <Addstudent
                    modal={modal}
                    toggle={toggle}
                    createNewStudent={createNewStudent}
                />
                {
                    modalEdit &&
                    <UpdateStudent
                        modal={modalEdit}
                        toggle={toggleEdit}
                        currentUser={editStudent}
                        UpdateStudent={UpdateStudentId}
                    />
                }
                <div id="" class="col-12">
                    <table class="table table-hover shadow">
                        <thead>
                            <tr class="border bg-light">
                                <th style={{ "font-size": "16px" }} scope="col">Id</th>
                                <th style={{ "font-size": "16px" }} scope="col">Họ và tên</th>
                                <th style={{ "font-size": "16px" }} scope="col">Giới tính</th>
                                <th style={{ "font-size": "16px" }} scope="col">Email</th>
                                <th style={{ "font-size": "16px" }} scope="col">Trường</th>
                                <th style={{ "font-size": "16px" }} scope="col">Số điện thoại</th>
                                <th style={{ "font-size": "16px" }} scope="col">Trạng thái</th>
                                <th style={{ "font-size": "16px" }} scope="col">Sửa</th>
                            </tr>
                        </thead>
                        <tbody>
                            {state.ListUsers && state.ListUsers.length > 0 &&
                                state.ListUsers.map((item, index) => {
                                    return (
                                        <tr className="child" key={item.id} class="border">
                                            {/* <td>{index + 1}</td> */}
                                            <td style={{ "font-size": "16px" }} onClick={() => handleViewDetailUser(item)}>{item.id}</td>
                                            <td style={{ "font-size": "16px" }} onClick={() => handleViewDetailUser(item)}>{item.firstName}</td>
                                            <td style={{ "font-size": "16px" }} onClick={() => handleViewDetailUser(item)}>{item.gender ? "Nam" : "Nữ"}</td>
                                            <td style={{ "font-size": "16px" }} onClick={() => handleViewDetailUser(item)}>{item.email}</td>
                                            <td style={{ "font-size": "16px" }} onClick={() => handleViewDetailUser(item)}>{item.universityName}</td>
                                            <td style={{ "font-size": "16px" }} onClick={() => handleViewDetailUser(item)}>{item.phoneNumber}</td>
                                            <td style={{ "font-size": "16px" }} onClick={() => handleViewDetailUser(item)}>{item.status ? <div class="text-success">Còn hạn</div> : <div class="text-danger">Hết hạn</div>}</td>
                                            <td>
                                                <button class="btn btn-success mr-1" onClick={() => handleEditstudent(item)}><i class="fa fa-pencil" aria-hidden="true"></i></button>
                                                <button class="btn btn-danger" onClick={() => handleDeleteStudent(item)}><i class="fa fa-trash" aria-hidden="true"></i></button>
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


export default ManagerStudent;