import React from 'react';
import Modal from "../UI/Modal/Modal";
import OrderButton from "./OrderButton/OrderButton";
import OrderSummary from "./OrderSummary/OrderSummary";


function Order(props) {
    var buttons = [{type: 'Success', label: 'CONTINUE', clicked: props.purchaseContinue}, {type: 'Danger', label: 'CANCEL', clicked: props.purchaseCancel}]
    return <div className="Order">
        <OrderButton disabled={!props.purchasable} click={props.purchaseHandler}/>
        <Modal show={props.purchasing} cancel={props.cancelHandler} buttons={buttons} title="Some kinda modal title">
            <p>This is modal content</p>
            <OrderSummary buttons={buttons}/>
        </Modal>
    </div>
}


export default Order;
