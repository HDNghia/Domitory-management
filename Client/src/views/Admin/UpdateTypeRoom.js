import React, { useState } from 'react';
import {
    Form, Row, FormGroup, Col, Input, Button, Modal, ModalHeader, ModalBody, ModalFooter, Label
} from 'reactstrap';

function UpdateTypeRoom(props) {
    // let Receipt = props.CurrentReceipt;
    // console.log("check prop receipt in child: ", Receipt)
    // // https://localhost:7184/ElectricWaterLog/1?RoomId=1
    // // RoomId
    // // ElectricWaterLogId 
    // // "electricNew": 0,
    // // "electricOld": 0,
    // // "waterOld": 0,
    // // "waterNew": 0,
    // // "feeStatus": true
    const [state, setState] = useState({
        id: '',
        numberOfSLot: '',
        furniture: true,
        domitoryFee: ''
    });
    // console.log("check state in children: ", state);
    const handleOnchangeInput = (event, item) => {
        let copyState = { ...state }
        console.log('check event: ', event);
        if (event.target.value == "true" && item == "furniture") {
            copyState["furniture"] = true;
        }
        else if (event.target.value == "false" && item == "furniture") {
            copyState["furniture"] = false;
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
        let arrInput = ['id', 'numberOfSLot', 'domitoryFee']
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
    const handleUpdateTypeRoom = () => {
        // alert("ngia")
        let isValid = checkValideInput();
        if (isValid === true) {
            props.updateTypeRoom(state);
            console.log("check data modalUpdate from children: ", state);
        }
    }

    return (
        <div>
            <Modal isOpen={props.modal} fade={false} toggle={props.toggle}>
                <ModalHeader >Update Receipt</ModalHeader>
                <ModalBody>
                    <Form >
                        <FormGroup>
                            <Label for="id">
                                id
                            </Label>
                            <Input
                                id="id"
                                name="id"
                                onChange={(event) => handleOnchangeInput(event, "id")}
                                value={state.id}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="numberOfSLot">
                                Số chỗ
                            </Label>
                            <Input
                                id="numberOfSLot"
                                name="numberOfSLot"
                                onChange={(event) => handleOnchangeInput(event, "numberOfSLot")}
                                value={state.numberOfSLot}
                            />
                        </FormGroup>
                        <Label for="furniture">
                            Đồ nội thất
                        </Label>

                        <FormGroup>
                            <select onChange={(event) => handleOnchangeInput(event, "furniture")}>
                                <option >--Choose furniture--</option>
                                <option value={true}>Có nội thất</option>
                                <option value={false}>không có nội thất</option>
                            </select>
                        </FormGroup>

                        <FormGroup>
                            <Label for="domitoryFee">
                                Giá tiền / tháng
                            </Label>
                            <Input
                                id="domitoryFee"
                                name="domitoryFee"
                                onChange={(event) => handleOnchangeInput(event, "domitoryFee")}
                                value={state.domitoryFee}
                            />
                        </FormGroup>
                        <Button color="primary" onClick={() => handleUpdateTypeRoom()}>
                            Cập nhật
                        </Button>{' '}
                        <Button color="secondary" onClick={props.toggle}>
                            Hủy
                        </Button>
                    </Form>
                </ModalBody>

            </Modal>
        </div>
    );
}


export default UpdateTypeRoom;