import React from "react";
import { withRouter } from "react-router-dom"
import axios from 'axios';
import './DetailStaff.scss';
import moment from "moment";


class DetailStaff extends React.Component {
    state = {
        staff: {}
    }
    async componentDidMount() {
        if (this.props.match && this.props.match.params) {
            let id = this.props.match.params.id;
            let res = await axios.get(`https://localhost:7184/api/Manager/${id}/manager`);
            this.setState({
                staff: res.data ? res.data : []
            })
            console.log('>>> check res staff: ', res)
        }

    }
    handleBackButton = () => {
        this.props.history.push('/admin');
    }
    render() {
        let { staff } = this.state;
        let isEmptyObj = Object.keys(staff).length === 0;
        console.log('>>> check props: ', this.props)
        return (
            <>
                {isEmptyObj === false &&
                    <>
                        <div class="bg-info text-info pb-4">.</div>
                        <div class="text-center p-3"><img class="mr-3" src="https://upload.wikimedia.org/wikipedia/vi/c/c6/Logo_KTX_%C4%90HQGTPHCM.png"></img><span class="h5 text-info">TRANG THÔNG TIN SINH VIÊN Ở KÝ TÚC XÁ ĐẠI HỌC QUỐC GIA</span></div>
                        <div class="section row">
                            <div class="" style={{ "width": "100%" }}>
                                <table class="table table-hover">
                                    <tr><td class="table-active border">Họ và tên</td><td class="font-weight-bold border">{staff.lastName + " " + staff.firstName}</td></tr>
                                    <tr><td class="table-active border">Email</td><td class="font-weight-bold border">{staff.email}</td></tr>
                                    <tr><td class="table-active border">Mã nhân viên</td><td class="font-weight-bold border">{staff.identiFyCardNumber}</td></tr>
                                    <tr><td class="table-active border">Ngày sinh</td><td class="font-weight-bold border">{moment(staff.dateOfBirth).format("DD-MM-YYYY")}</td></tr>
                                    <tr><td class="table-active border">Giới tính</td><td class="font-weight-bold border">{staff.gender == true ? "Nam" : "Nữ"}</td></tr>
                                    <tr><td class="table-active border">Số điện thoại</td><td class="font-weight-bold border">{staff.phoneNumber}</td></tr>
                                    <tr><td class="table-active border">Địa chỉ</td><td class="font-weight-bold border">{staff.address}</td></tr>
                                </table>
                            </div>
                        </div>
                        <div scope="row"><button type="button" class="btn btn-primary ml-5" onClick={() => this.handleBackButton()}>Quay lại</button></div>

                    </>
                }
            </>
        )
    }
}

export default withRouter(DetailStaff);