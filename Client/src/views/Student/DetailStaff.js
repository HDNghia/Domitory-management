import React from "react";
import { withRouter } from "react-router-dom"
import axios from 'axios';
import './DetailStaff.scss';


class DetailStaff extends React.Component {
    state = {
        staff: {}
    }
    async componentDidMount() {
        if (this.props.match && this.props.match.params) {
            let id = this.props.match.params.id;
            let res = await axios.get(`https://localhost:7184/api/Manager/${id}`);
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
                        <div class="Staff-detail">
                            <h1 class="Staff-detail h1">Staff detail</h1>
                            <table class="table table-hover">
                                <thead>
                                    <tr>
                                        <th scope="col">id</th>
                                        <td scope="col">{staff.id}</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">Staff's name</th>
                                        <td>{staff.firstName} {staff.lastName}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">staff's email</th>
                                        <td>{staff.email}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">staff's dateOfBirth</th>
                                        <td>{staff.dateOfBirth}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">staff's email</th>
                                        <td>{staff.email}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">staff's identiFyCardNumber</th>
                                        <td>{staff.identiFyCardNumber}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">staff's phoneNumber</th>
                                        <td>{staff.phoneNumber}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">staff's address</th>
                                        <td>{staff.address}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">staff's gender</th>
                                        <td>{JSON.stringify(staff.gender)}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">staff's idCard</th>
                                        <td>{staff.idCard}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">staff's status</th>
                                        <td>{JSON.stringify(staff.status)}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row"><button type="button" class="btn btn-danger" onClick={() => this.handleBackButton()}>Back</button></th>
                                        <td></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </>
                }
            </>
        )
    }
}

export default withRouter(DetailStaff);