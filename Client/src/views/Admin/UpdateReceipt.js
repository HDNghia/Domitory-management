import React, { useState } from 'react';
import {
    Form, Row, FormGroup, Col, Input, Button, Modal, ModalHeader, ModalBody, ModalFooter, Label
} from 'reactstrap';

function UpdateReceipt(props) {
    let Receipt = props.CurrentReceipt;
    console.log("check prop receipt in child: ", Receipt)
    // https://localhost:7184/ElectricWaterLog/1?RoomId=1
    // RoomId
    // ElectricWaterLogId 
    // "electricNew": 0,
    // "electricOld": 0,
    // "waterOld": 0,
    // "waterNew": 0,
    // "feeStatus": true
    const [state, setState] = useState({
        ElectricWaterLogId: Receipt.id,
        RoomId: Receipt.room.id,
        electricNew: Receipt.electricNew,
        electricOld: Receipt.electricOld,
        waterNew: Receipt.waterNew,
        waterOld: Receipt.waterOld,
        feeStatus: Receipt.feeStatus,
    });
    console.log("check state in children: ", state);
    const handleOnchangeInput = (event, item) => {
        let copyState = { ...state }
        console.log('check event: ', event);
        if (event.target.value == "true" && item == "feeStatus") {
            copyState["feeStatus"] = true;
        }
        else if (event.target.value == "false" && item == "feeStatus") {
            copyState["feeStatus"] = false;
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
        let arrInput = ['ElectricWaterLogId', 'RoomId', 'electricNew', 'electricOld', 'waterNew', 'waterOld']
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
    const handleUpdateReceipt = () => {
        let isValid = checkValideInput();
        if (isValid === true) {
            props.UpdateDataReceipt(state);
            // console.log("check data modalUpdate : ", state);
        }
    }
    return (
        <div>
            <Modal isOpen={props.modal} fade={false} toggle={props.toggle}>
                <ModalHeader >Update Receipt</ModalHeader>
                <ModalBody>
                    <Form >
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

                        <Label for="feeStatus">
                            feeStatus
                        </Label>

                        <FormGroup>
                            <select onChange={(event) => handleOnchangeInput(event, "feeStatus")}>
                                <option >--Choose feeStatus--</option>
                                <option value={true}>Đã thanh toán</option>
                                <option value={false}>Chưa thanh toán</option>
                            </select>
                        </FormGroup>
                        <FormGroup>
                            {/* <Label for="ElectricWaterLogId">
                                ElectricWaterLogId
                            </Label> */}
                            <Input
                                id="ElectricWaterLogId"
                                name="ElectricWaterLogId"
                                type="hidden"
                                onChange={(event) => handleOnchangeInput(event, "ElectricWaterLogId")}
                                value={state.ElectricWaterLogId}
                            />
                        </FormGroup>
                        <FormGroup>
                            {/* <Label for="RoomId">
                                RoomId
                            </Label> */}
                            <Input
                                id="RoomId"
                                name="RoomId"
                                type="hidden"
                                onChange={(event) => handleOnchangeInput(event, "RoomId")}
                                value={state.RoomId}
                            />
                        </FormGroup>

                        <Button color="primary" onClick={() => handleUpdateReceipt()}>
                            Update
                        </Button>{' '}
                        <Button color="secondary" onClick={props.toggle}>
                            Cancel
                        </Button>
                    </Form>
                </ModalBody>

            </Modal>
        </div>
    );
}

export default UpdateReceipt;