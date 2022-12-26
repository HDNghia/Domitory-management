import React, { useState } from 'react';
import {
    Form, Row, FormGroup, Col, Input, Button, Modal, ModalHeader, ModalBody, ModalFooter, Label
} from 'reactstrap';

function AddReceipt(props) {
    const [state, setState] = useState({
        electricNew: '',
        electricOld: '',
        waterOld: '',
        waterNew: '',
    });
    const [id, setId] = useState()
    const handleOnchangeInput = (event, item) => {
        let copyState = { ...state }
        if (item == "id") {
            setId(event.target.value)
        } else {
            copyState[item] = event.target.value;
            setState({
                ...copyState
            })
        }

    }
    const checkValideInput = () => {
        let isValid = true;
        let arrInput = ['electricNew', 'electricOld', 'waterOld', 'waterNew']
        for (let i = 0; i < arrInput.length; i++) {
            console.log('check inside loop', state[arrInput[i]], arrInput[i])
            if (!state[arrInput[i]]) {
                isValid = false;
                alert('Missing parameter: ' + arrInput[i]);
                break;
            }
        }
        if (!id) {
            isValid = false;
            alert('Missing parameter: ' + "id");
        }
        return isValid;
    }
    const handleAddReceipt = () => {
        let isValid = checkValideInput();
        if (isValid === true) {
            props.createNewReceipt(id, state);
            console.log("data modal: ", id, state);
            // { lastName: 'df', firstName: 'sdf', dateOfBirth: '2022-12-03', email: 'test1@gmail.com', identiFyCardNumber: '123', phoneNumber: '12345', address: '12345', gender: true, status: true }
        }
    }
    return (
        <div>
            <Modal isOpen={props.modal} fade={false} toggle={props.toggle}>
                <ModalHeader >Thêm tiền điện, tiền nước</ModalHeader>
                <ModalBody>
                    <Form >
                        <FormGroup>
                            <Label for="id">
                                roomId
                            </Label>
                            <Input
                                id="id"
                                name="id"
                                onChange={(event) => handleOnchangeInput(event, "id")}

                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="electricNew">
                                electricNew
                            </Label>
                            <Input
                                id="electricNew"
                                name="electricNew"
                                onChange={(event) => handleOnchangeInput(event, "electricNew")}
                                value={state.electricNew}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="electricOld">
                                electricOld
                            </Label>
                            <Input
                                id="electricOld"
                                name="electricOld"
                                onChange={(event) => handleOnchangeInput(event, "electricOld")}
                                value={state.electricOld}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="waterNew">
                                waterNew
                            </Label>
                            <Input
                                id="waterNew"
                                name="waterNew"

                                onChange={(event) => handleOnchangeInput(event, "waterNew")}
                                value={state.waterNew}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="waterOld">
                                waterOld
                            </Label>
                            <Input
                                id="waterOld"
                                name="waterOld"

                                onChange={(event) => handleOnchangeInput(event, "waterOld")}
                                value={state.waterOld}
                            />
                        </FormGroup>
                        <Button color="primary" onClick={() => handleAddReceipt()}>
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

export default AddReceipt;