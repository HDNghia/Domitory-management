import { useHistory } from "react-router-dom";
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import SidebarStudent from "../Sidebar/SidebarStudent";
import axios from "axios";
import { useState, useEffect } from "react";
import moment from "moment";
import PaymentEW from "./PaymentEW";
import { toast } from 'react-toastify';
function PayElicWar(props) {
    const [modal, setModal] = useState(false);
    const [CurrentElicWar, setCurrentElicWar] = useState({});
    const [payElicWar, setPayElicWar] = useState({});
    const [getIdRoom, setGetIdRoom] = useState()
    const toggle = () => setModal(!modal);
    var id = localStorage.getItem("id");
    async function GetIdRoom() {
        let data = await axios.get(`https://localhost:7184/Student/${id}/accountId`);
        setGetIdRoom(
            data.data.registerRoomsDTO[0].roomId
        )
        // console.log("check id room: ", data.data.registerRoomsDTO[0].roomId)

    }
    async function fetchMyAPI() {
        let res = await axios.get(`https://localhost:7184/ElectricWaterLog/${getIdRoom}`);
        setPayElicWar(
            res.data
        )
    }
    useEffect(() => {
        GetIdRoom()
        fetchMyAPI()
    }, [payElicWar, getIdRoom])

    const handlePayElecWar = (item) => {
        toggle()
        setCurrentElicWar(item)
    }
    const handlePayFeeEW = async (data) => {
        console.log('check payment in parent: ', data)
        try {
            let res = await axios.put(`https://localhost:7184/ElectricWaterLog/${data.ElectricWaterLogId}?RoomId=${data.RoomId}`, data);
            console.log('response create user: ', res)
            toggle()
            toast.success("Thanh toán thành công");
        } catch (error) {
            toast.error("Thanh toán không thành công");
            console.log(error)
        }
        console.log('check data from child: ', data)
    }
    return <div>
        <SidebarStudent />
        {
            modal && <PaymentEW
                modal={modal}
                toggle={toggle}
                CurrentElicWar={CurrentElicWar}
                handlePayFeeEW={handlePayFeeEW}
            />
        }

        <h3 class="text-center p-3 text-danger">Tiền điện tiền nước</h3>
        <div class="section row" >
            <div class="w-100" >

                <table class="table mt-5 w-75 shadow" >
                    <thead class="bg-light">
                        <tr class="border font-weight-bold">
                            <td>Phòng</td>
                            <td>Ngày đăng ký</td>
                            <td>Chỉ số điện</td>
                            <td>Chỉ Số nước</td>
                            <td>Tổng cộng</td>
                            <td>Trạng thái thanh toán</td>
                        </tr>
                    </thead>
                    <tbody>
                        {payElicWar && payElicWar.length > 0 &&
                            payElicWar.map((item, index) => {
                                return (
                                    <tr key={item.id} class="border">
                                        <td>{item.room.name}</td>
                                        <td>{moment(item.logDate).format("DD/MM/YYYY")}</td>
                                        <td>
                                            <div>Chỉ số đầu:  <span class="font-weight-bold">{item.electricNew} Kwh</span> </div>
                                            <div>Chỉ số cuối:  <span class="font-weight-bold">{item.electricOld} Kwh</span> </div>
                                            <div>Sử dụng:  <span class="font-weight-bold">{item.electricUse} Kwh</span> </div>
                                            <div>Tổng tiền: <span class="font-weight-bold">{item.electricFee}</span></div>
                                        </td>
                                        <td>
                                            <div>Chỉ số đầu:  <span class="font-weight-bold">{item.waterNew} m<sup>3</sup></span></div>
                                            <div>Chỉ số cuối:<span class="font-weight-bold">{item.waterOld} m<sup>3</sup></span></div>
                                            <div>Sử dụng:  <span class="font-weight-bold">{item.waterUse} m<sup>3</sup></span> </div>
                                            <div>Tổng tiền: <span class="font-weight-bold">{item.waterFee}</span></div>
                                        </td>
                                        <td>
                                            <div class="font-weight-bold">{item.totalFee}</div>
                                            <div>(4 sinh viên)</div>
                                        </td>
                                        <td>
                                            {item.feeStatus ? <div class="text-success">Đã thanh toán</div> : <div class="text-danger">Chưa thanh toán</div>}
                                            {item.feeStatus === false ? <input type="button" class="btn btn-success" value="Thanh toán" onClick={() => handlePayElecWar(item)}></input> : <></>}
                                        </td>

                                    </tr>
                                )
                            })}
                    </tbody>
                </table>

            </div>

        </div>
        <div class="clear-fix">
        </div>
    </div>
}

export default PayElicWar;