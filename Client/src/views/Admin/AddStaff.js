import React, { useState } from 'react';
import {
    Form, Row, FormGroup, Col, Input, Button, Modal, ModalHeader, ModalBody, ModalFooter, Label
} from 'reactstrap';

function Addstaff(props) {
    const [state, setState] = useState({
        lastName: '',
        firstName: '',
        dateOfBirth: '',
        email: '',
        identiFyCardNumber: '',
        phoneNumber: '',
        address: '',
        gender: true,
        idCard: '',
    });
    const handleOnchangeInput = (event, item) => {
        let copyState = { ...state }
        if (event.target.value == "true" && item == "gender") {
            copyState["gender"] = true;
        }
        else if (event.target.value == "false" && item == "gender") {
            copyState["gender"] = false;
        }
        else {
            copyState[item] = event.target.value;
        }
        setState({
            ...copyState
        })
    }
    const checkValideInput = () => {
        let isValid = true;
        let arrInput = ['lastName', 'firstName', 'dateOfBirth', 'identiFyCardNumber', 'phoneNumber', 'address', 'idCard']
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
            props.createNewStaff(state);
            console.log("data modal: ", state);
            // { lastName: 'df', firstName: 'sdf', dateOfBirth: '2022-12-03', email: 'test1@gmail.com', identiFyCardNumber: '123', phoneNumber: '12345', address: '12345', gender: true, status: true }
        }
    }
    return (
        <div>
            <Modal isOpen={props.modal} fade={false} toggle={props.toggle}>
                <ModalHeader >Add New Staff</ModalHeader>
                <ModalBody>
                    <Form >
                        <FormGroup>
                            <Label for="lastName">
                                lastName
                            </Label>
                            <Input
                                id="lastName"
                                name="lastName"
                                onChange={(event) => handleOnchangeInput(event, "lastName")}
                                value={state.lastName}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="LastName">
                                firstName
                            </Label>
                            <Input
                                id="firstName"
                                name="firstName"
                                onChange={(event) => handleOnchangeInput(event, "firstName")}
                                value={state.firstName}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="dateOfBirth">
                                date Of Birth
                            </Label>
                            <Input
                                id="dateOfBirth"
                                name="dateOfBirth"
                                type="date"
                                onChange={(event) => handleOnchangeInput(event, "dateOfBirth")}
                                value={state.dateOfBirth}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="email">
                                email
                            </Label>
                            <Input
                                id="email"
                                name="email"
                                onChange={(event) => handleOnchangeInput(event, "email")}
                                value={state.email}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="identiFyCardNumber">
                                identiFy Card Number
                            </Label>
                            <Input
                                id="identiFyCardNumber"
                                name="identiFyCardNumber"
                                onChange={(event) => handleOnchangeInput(event, "identiFyCardNumber")}
                                value={state.identiFyCardNumber}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="phoneNumber">
                                phone Number
                            </Label>
                            <Input
                                id="phoneNumber"
                                name="phoneNumber"
                                onChange={(event) => handleOnchangeInput(event, "phoneNumber")}
                                value={state.phoneNumber}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="address">
                                address
                            </Label>
                            <Input
                                id="address"
                                name="address"
                                onChange={(event) => handleOnchangeInput(event, "address")}
                                value={state.address}
                            />
                        </FormGroup>
                        {/* idCard */}
                        <FormGroup>
                            <Label for="gender">
                                idCard
                            </Label>
                            <Input
                                id="idCard"
                                name="idCard"
                                type="text"
                                onChange={(event) => handleOnchangeInput(event, "idCard")}
                                value={state.idCard}
                            />
                        </FormGroup>
                        <Label for="gender">
                            gender
                        </Label>
                        <FormGroup>
                            <Label for="gender">
                                Man
                            </Label>
                            &nbsp;
                            &nbsp;
                            &nbsp;
                            <Input
                                id="gender"
                                name="gender"
                                type="radio"
                                onChange={(event) => handleOnchangeInput(event, "gender")}
                                value={true}
                            />
                            <Label for="gender">
                                Woman
                            </Label>
                            &nbsp;
                            &nbsp;
                            &nbsp;
                            <Input
                                id="gender"
                                name="gender"
                                type="radio"
                                onChange={(event) => handleOnchangeInput(event, "gender")}
                                value={false}
                            />

                        </FormGroup>
                        <Button color="primary" onClick={() => handleAddNewStaff()}>
                            Create
                        </Button>{' '}
                        <Button color="secondary" onClick={props.toggle}>
                            Cancel
                        </Button>
                    </Form>
                </ModalBody>
                {/* Nút tắt phần modal */}
                {/* <ModalFooter>
                    <Button color="primary" onClick={props.toggle}>
                        Create
                    </Button>{' '}
                    <Button color="secondary" onClick={props.toggle}>
                        Cancel
                    </Button>
                </ModalFooter> */}
            </Modal>
        </div>
    );
}

export default Addstaff;