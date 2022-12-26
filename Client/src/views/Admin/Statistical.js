
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from "react";
import './Admin.scss';
import SidebarAdmin from '../Sidebar/SidebarAdmin';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
function Statistical(props) {
    let totalFeeRoom = 0;
    let countStudent = 0;
    let countSlotRemain = 0;
    let totalFeeWaterElec = 0;
    const [ElectWater, setElectWater] = useState([]);
    const [RegisterRoom, setRegisterRoom] = useState([]);
    const [Room, setRoom] = useState([]);

    useEffect(() => {
        async function fetchMyAPI() {
            let res = await axios.get(`https://localhost:7184/RegisterRoom`);
            let res1 = await axios.get(`https://localhost:7184/Rooms`);
            let res2 = await axios.get(`https://localhost:7184/ElectricWaterLog`);
            setRegisterRoom(
                res.data ? res.data : []
            )
            setRoom(
                res1.data ? res1.data : []
            )
            setElectWater(
                res2.data ? res2.data : []
            )
            console.log("Cehck state: ", ElectWater)
        }

        fetchMyAPI()
    }, [])
    ElectWater && ElectWater.length > 0 &&
        ElectWater.map((item, index) => {
            return (
                <>
                    {item.feeStatus ? <></> : totalFeeWaterElec = totalFeeWaterElec + item.totalFee}
                </>
            )
        })
    RegisterRoom && RegisterRoom.length > 0 &&
        RegisterRoom.map((item, index) => {
            return (
                <>
                    {item.domitoryFeeStatus ? <></> : (totalFeeRoom = totalFeeRoom + item.domitoryFee) && (countStudent = countStudent + 1)}
                </>
            )
        })
    Room && Room.length > 0 &&
        Room.map((item, index) => {
            return (
                <>
                    {countSlotRemain = countSlotRemain + item.slotRemain}
                </>
            )
        })
    console.log("check total: ", totalFeeWaterElec)
    return (
        < >
            <SidebarAdmin />
            <div class="section row">
                <h3 class="w-100">Thống kê doanh thu</h3>
                <div class="col border m-2 bg-light rounded p-3">
                    <div style={{ "font-size": "25px" }} class="font-weight-bold ">{totalFeeWaterElec}<span style={{ "margin-left": "60%" }}><i class="fa fa-usd text-warning fa-2x" aria-hidden="true"></i></span></div>
                    <div class="text-white">.</div>
                    <div style={{ "font-size": "25px" }}>Tiền điện nước còn nợ</div>
                </div>
                <div class="col border m-2 bg-light rounded p-3">
                    <div style={{ "font-size": "25px" }} class="font-weight-bold">{totalFeeRoom} VNĐ<span style={{ "margin-left": "20%" }}><i class="fa fa-signal text-success fa-2x" aria-hidden="true"></i></span></div>
                    <div class="text-white">.</div>
                    <div style={{ "font-size": "25px" }}>Tiền phòng còn nợ</div>
                </div>
                <div class="col border m-2 bg-light rounded p-3">
                    <div class="font-weight-bold" style={{ "font-size": "25px" }}>{countStudent} <span style={{ "margin-left": "70%" }}><i class="fa fa-pie-chart text-primary fa-2x" aria-hidden="true"></i></span></div>
                    <div class="text-white">.</div>
                    <div style={{ "font-size": "25px" }}>Số sinh viên chưa đóng</div>
                </div>
                <div class="col border m-2 bg-light rounded p-3">
                    <div class="font-weight-bold" style={{ "font-size": "25px" }}>{countSlotRemain}<span style={{ "margin-left": "70%" }}><i class="fa fa-refresh text-info fa-2x" aria-hidden="true"></i></span></div>
                    <div class="text-white">.</div>
                    <div style={{ "font-size": "25px" }}>Số chỗ còn trống</div>
                </div>
            </div>
            {/* {RegisterRoom && RegisterRoom.length > 0 &&
                RegisterRoom.map((item, index) => {
                    return (
                        <>
                        {total = item.totalFeeRoom}
                            {item.domitoryFeeStatus == false ? <></> : setTotalFeeRooms({totalFeeRoom : total + 1})}
                        </>
                    )
                })
            } */}
        </>
    )
}


export default Statistical;