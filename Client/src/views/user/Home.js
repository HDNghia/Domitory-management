import React, { useState } from "react";
import Color from "../HOC/Color";
import { connect } from 'react-redux'
import './Home.scss';
import { useHistory } from "react-router-dom";
import Nav from "../Nav/Nav";

function Home(props) {
    const [state, setState] = useState({
        firstName: '',
        lastName: '',
        email: '',
        address: ''
    });
    const handleDeleteUser = (user) => {
        console.log('checkk user delete: ', user);
        props.deleteUserRedux(user);
    }
    const handleCreateUser = () => {
        props.AddstaffRedux();
    }
    const onchangeInput = (event, item) => {
        // firstName: '',
        // lastName: '',
        // email: '',
        // address: ''
        let copyState = { ...state }
        copyState[item] = event.target.value;
        setState({
            ...copyState
        })
        console.log('check state: ', state)
    }
    const checkValideInput = () => {
        let isValid = true;
        let arrInput = ['firstName', 'lastName', 'email', 'address']
        for (let i = 0; i < arrInput.length; i++) {
            console.log('check inside loop', state[arrInput[i]], arrInput[i])
            if (!state[arrInput[i]]) {
                isValid = false;
                alert('Missing parameter: ' + arrInput[i]);
                break;
            }
        }
        return isValid;
    }
    const handleAddNewStaff = () => {
        let isValid = checkValideInput();
        if (isValid === true) {
            // console.log("check state: ", state);
            // props.createUser(state);
            alert('Sucess');
        }
    }
    let listUsers = props.dataRedux;
    return (
        <>
            <Nav />
            <div className="container">
                <form className="form-add-user">
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label>First Name</label>
                            <input type="text" class="form-control" id="fistName" placeholder="FistName"
                                onChange={(event) => onchangeInput(event, "firstName")}
                                value={state.firstName} />
                        </div>
                        <div class="form-group col-md-6">
                            <label>Last Name</label>
                            <input type="text" class="form-control" id="lastName" placeholder="LastName"
                                onChange={(event) => onchangeInput(event, "lastName")}
                                value={state.lastName} />
                        </div>
                    </div>
                    <div class="form-group">
                        <label>Email</label>
                        <input type="text" class="form-control" id="email" placeholder="abc@gmail.com"
                            onChange={(event) => onchangeInput(event, "email")}
                            value={state.email} />
                    </div>
                    <div class="form-group">
                        <label>Address</label>
                        <input type="text" class="form-control" id="address" placeholder="lvh street"
                            onChange={(event) => onchangeInput(event, "address")}
                            value={state.address} />
                    </div>
                    <button type="submit" class="btn btn-primary" onClick={() => handleAddNewStaff()}>Add new user</button>
                </form>
                <table class="table table-hover">
                    <thead>
                        <tr className="bg-success">
                            <th scope="col">stt</th>
                            <th scope="col">Name</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listUsers && listUsers.length > 0 &&
                            listUsers.map((item, index) => {
                                return (

                                    <tr className="child" key={item.id}

                                    >
                                        <td>{index + 1}</td>
                                        <td>{item.name}</td>

                                        <td >
                                            <button className="btn btn-success">Edit</button>
                                            <button className="btn btn-danger" onClick={() => handleDeleteUser(item)}>Delete</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
                <button class="btn btn-primary" onClick={() => handleCreateUser()}>Add new redux</button>
            </div>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        dataRedux: state.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteUserRedux: (userDelete) => dispatch({ type: 'DELETE_USER', payload: userDelete }),
        AddstaffRedux: () => dispatch({ type: 'CREATE_USER' }),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Color(Home)); 