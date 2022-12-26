import React, { useState } from 'react';
import moment from 'moment';
import {
    Form, Row, FormGroup, Col, Input, Button, Modal, ModalHeader, ModalBody, ModalFooter, Label
} from 'reactstrap';

function PaymentEW(props) {
    let Payment = props.CurrentElicWar;
    console.log('check payment in chidren', Payment)
    // "electricNew": 3,
    // "electricOld": 2,
    // "waterOld": 3,
    // "waterNew": 4,
    // "feeStatus": false
    const [state, setState] = useState({
        ElectricWaterLogId: Payment.id,
        RoomId: Payment.room.id,
        electricNew: Payment.electricNew,
        electricOld: Payment.electricOld,
        waterNew: Payment.waterNew,
        waterOld: Payment.waterOld,
        electricFee: Payment.electricFee,
        waterFee: Payment.waterFee,
        totalFee: Payment.totalFee,
        name: Payment.room.name,
        feeStatus: true
    });
    // console.log("check state in children: ", state);
    const handlePayment = () => {
        props.handlePayFeeEW(state);
        console.log("check data modalUpdate: ", state);
    }
    return (
        <div>
            <Modal isOpen={props.modal} fade={false} toggle={props.toggle}>
                <ModalHeader >Payment detail</ModalHeader>
                <ModalBody>
                    <Form >

                        <FormGroup>
                            <Label for="name">
                                Tên phòng
                            </Label>
                            <div class="border-bottom border-danger"><i class="fa fa-university" aria-hidden="true"></i> {state.name}</div>

                        </FormGroup>
                        <FormGroup>
                            <Label for="electricFee">
                                Tiền điện
                            </Label>
                            <div class="border-bottom border-danger"><i class="fa fa-usd pr-1" aria-hidden="true"></i>{state.electricFee}</div>

                        </FormGroup>
                        <FormGroup>
                            <Label for="waterFee">
                                Tiền nước
                            </Label>
                            <div class="border-bottom border-danger"><i class="fa fa-tint" aria-hidden="true"></i> {state.waterFee}</div>

                        </FormGroup>
                        <FormGroup>
                            <Label for="totalFee">
                                Đóng tiền: <span class="text-danger font-weight-bold">{state.totalFee} VNĐ</span>
                            </Label>

                        </FormGroup>
                        <input type="button" class="btn btn-danger" onClick={() => handlePayment()} value="Xác nhận" />
                        <input type="button" class="btn btn-secondary" onClick={props.toggle} value="Hủy" />
                    </Form>
                </ModalBody>
            </Modal>
        </div>
    );
}

export default PaymentEW;