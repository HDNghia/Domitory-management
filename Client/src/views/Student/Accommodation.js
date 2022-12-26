import { useHistory } from "react-router-dom";
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import SidebarStudent from "../Sidebar/SidebarStudent";
import axios from "axios";
import { useState, useEffect } from "react";
import moment from "moment";
function Accommodation(props) {
    const [Accommodation, setAccommodation] = useState([]);
    const [idStudent, setIdStudent] = useState();
    var id = localStorage.getItem("id");

    console.log("check id: ", id);
    async function GetIdStudent() {
        let data = await axios.get(`https://localhost:7184/Student/${id}/accountId`);
        setIdStudent(
            data.data.id
        )
    }
    async function fetchMyAPI() {
        let data = await axios.get(`https://localhost:7184/RegisterRoom/${idStudent}/student`);
        setAccommodation(
            data.data
        )
    }
    useEffect(() => {
        GetIdStudent()
        fetchMyAPI()
    }, [idStudent])
    console.log("check idStudent: ", idStudent);
    return <div>
        <SidebarStudent />
        <h3 class="text-center p-3 text-danger ">Lịch sử thuê phòng</h3>
        <div class="section row" >
            <div class="col-12" >
                <table class="table table-hover ">
                    <thead class="bg-info">
                        <tr>
                            <td class="font-weight-bold" scope="col">Mã phòng</td>
                            <td class="font-weight-bold" scope="col">Ngày bắt đầu</td>
                            <td class="font-weight-bold" scope="col">Ngày kết thúc</td>
                            <td class="font-weight-bold" scope="col">Phí ký túc xá</td>
                            <td class="font-weight-bold" scope="col">Trạng thái thanh toán</td>
                            <td class="font-weight-bold" scope="col">Sô tháng</td>
                            <td class="font-weight-bold" scope="col">Trạng thái</td>
                        </tr>
                    </thead>
                    <tbody>
                        {Accommodation && Accommodation.length > 0 &&
                            Accommodation.map((item, index) => {
                                return (
                                    <tr className="child " key={item.id} >
                                        <td >{item.roomId}</td>
                                        <td >{moment(item.dateBegin).format("DD-MM-YYYY")}</td>
                                        <td >{moment(item.dateEnd).format("DD-MM-YYYY")}</td>
                                        <td >{item.domitoryFee}</td>
                                        <td >{item.domitoryFeeStatus ? <div class="text-success">Đã thanh toán</div> : <div class="text-danger">Chưa thanh toán</div>}</td>
                                        <td >{item.numberOfMonth}</td>
                                        <td >{item.status ? <div class="text-success">Gia hạn</div> : <div class="text-danger">Hết hạn</div>}</td>
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
    </div>
}

export default Accommodation;