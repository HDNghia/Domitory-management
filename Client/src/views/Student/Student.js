
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from "react";
import './Student.scss';
import SidebarStudent from '../Sidebar/SidebarStudent';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment';


import { toast } from 'react-toastify';
import { data } from 'jquery';
function Student(props) {
    const [student, setStudent] = useState({});
    var id = localStorage.getItem("id");
    console.log("check id: ", id);
    useEffect(() => {
        // alert(props.scrolled)
        async function fetchMyAPI() {
            let { data } = await axios.get(`https://localhost:7184/Student/${id}/accountId`);
            setStudent(
                data
            )
        }
        fetchMyAPI()
    }, [])
    console.log("check student: ", student);
    return (
        <>
            <div>
                <SidebarStudent />
                <h3 class="text-center p-3 text-danger">Thông tin sinh viên</h3>
                <div class="section row">
                    <div class="" style={{ "width": "100%" }}>
                        <table class="table table-hover">
                            <tr><td class="table-active border">Họ và tên</td><td class="font-weight-bold border">{student.lastName + " " + student.firstName}</td></tr>
                            <tr><td class="table-active border">Ngày sinh</td><td class="font-weight-bold border">{moment(student.birthDate).format("DD-MM-YYYY")}</td></tr>
                            <tr><td class="table-active border">Giới tính</td><td class="font-weight-bold border">{student.gender == true ? "Nam" : "Nữ"}</td></tr>
                            <tr><td class="table-active border">Niên khóa</td><td class="font-weight-bold border">{student.schoolYear}</td></tr>
                            <tr><td class="table-active border">Sinh viên trường</td><td class="font-weight-bold border">{student.universityName}</td></tr>
                            <tr><td class="table-active border">Khoa</td><td class="font-weight-bold border">{student.major}</td></tr>
                            <tr><td class="table-active border">Mã số sinh viên</td><td class="font-weight-bold border">{student.universitysutdentId}</td></tr>
                            <tr><td class="table-active border">CCCD</td><td class="font-weight-bold border">{student.identifyCardNumber}</td></tr>
                            <tr><td class="table-active border">Địa chỉ nhà</td><td class="font-weight-bold border">{student.homeAddress}</td></tr>
                            <tr><td class="table-active border">Quốc gia</td><td class="font-weight-bold border">{student.nationnality}</td></tr>
                            <tr><td class="table-active border">Dân tộc</td><td class="font-weight-bold border">{student.ethnic}</td></tr>
                            <tr><td class="table-active border">Số điện thoại</td><td class="font-weight-bold border">{student.phoneNumber}</td></tr>
                            <tr><td class="table-active border">Tên người thân cần liên hệ</td><td class="font-weight-bold border">{student.relatedPersonName}</td></tr>
                            <tr><td class="table-active border">Số điện thoại người thân</td><td class="font-weight-bold border">{student.relatedPersonPhoneNumber}</td></tr>

                        </table>

                    </div>
                </div>
            </div>


            <div class="clear-fix">
            </div>
        </>
    )
}


export default Student;