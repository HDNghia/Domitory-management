import React, { useState } from 'react';
import moment from 'moment';
import {
    Form, Row, FormGroup, Col, Input, Button, Modal, ModalHeader, ModalBody, ModalFooter, Label
} from 'reactstrap';

function Payment(props) {
    let Payment = props.CurrentInvoice;
    const [state, setState] = useState({
        id: Payment.id,
        studentId: Payment.studentId,
        roomId: Payment.roomId,
        dateBegin: Payment.dateBegin,
        dateEnd: Payment.dateEnd,
        numberOfMonth: Payment.numberOfMonth,
        domitoryFee: Payment.domitoryFee,
        domitoryFeeStatus: true,
        status: true
    });
    console.log("check state in children: ", state);
    const handlePayment = () => {
        props.handlePayFeeRoom(state);
        console.log("check data modalUpdate: ", state);
    }
    return (
        <div>
            <Modal isOpen={props.modal} fade={false} toggle={props.toggle}>
                <ModalHeader >Payment detail</ModalHeader>
                <ModalBody>
                    <Form >

                        <FormGroup>
                            <Label for="roomId">
                                Mã phòng
                            </Label>
                            <div class="border-bottom border-danger"><i class="fa fa-id-badge" aria-hidden="true"></i> {state.roomId}</div>

                        </FormGroup>
                        <FormGroup>
                            <Label for="dateEnd">
                                Ngày đăng ký
                            </Label>
                            <div class="border-bottom border-danger"><i class="fa fa-calendar" aria-hidden="true"></i> {moment(state.dateBegin).format("DD/MM/YYYY")} - {moment(state.dateEnd).format("DD/MM/YYYY")}</div>

                        </FormGroup>
                        <FormGroup>
                            <Label for="numberOfMonth">
                                Nội dung
                            </Label>
                            <div class="border-bottom border-danger"><i class="fa fa-bed" aria-hidden="true"></i> Phí lưu trú</div>

                        </FormGroup>
                        <FormGroup>
                            <Label for="domitoryFee">
                                Đóng tiền: <span class="text-danger font-weight-bold">{state.domitoryFee} VNĐ</span>
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

export default Payment;