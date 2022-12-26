import React, { useState } from 'react';
import {
    Form, Row, FormGroup, Col, Input, Button, Modal, ModalHeader, ModalBody, ModalFooter, Label
} from 'reactstrap';

function AddregisRoom(props) {
    const [state, setState] = useState({
        studentId: '',
        roomId: '',
        numberOfMonth: ''
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
        let arrInput = ['studentId', 'roomId', 'numberOfMonth']
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
    const handleAddRegister = () => {
        let isValid = checkValideInput();
        if (isValid === true) {
            props.createNewRegisRoom(state);
            console.log("data modal: ", state);
            // { lastName: 'df', firstName: 'sdf', dateOfBirth: '2022-12-03', email: 'test1@gmail.com', identiFyCardNumber: '123', phoneNumber: '12345', address: '12345', gender: true, status: true }
        }
    }
    return (
        <div>
            <Modal isOpen={props.modal} fade={false} toggle={props.toggle}>
                <ModalHeader >Register Room</ModalHeader>
                <ModalBody>
                    <Form >
                        <FormGroup>
                            <Label for="studentId">
                                studentId
                            </Label>
                            <Input
                                id="studentId"
                                name="studentId"
                                onChange={(event) => handleOnchangeInput(event, "studentId")}
                                value={state.studentId}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="roomId">
                                roomId
                            </Label>
                            <Input
                                id="roomId"
                                name="roomId"
                                onChange={(event) => handleOnchangeInput(event, "roomId")}
                                value={state.roomId}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="numberOfMonth">
                                numberOfMonth
                            </Label>
                            <Input
                                id="numberOfMonth"
                                name="numberOfMonth"

                                onChange={(event) => handleOnchangeInput(event, "numberOfMonth")}
                                value={state.numberOfMonth}
                            />
                        </FormGroup>
                        <Button color="primary" onClick={() => handleAddRegister()}>
                            Register
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

export default AddregisRoom;