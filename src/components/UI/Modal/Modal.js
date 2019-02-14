import React from 'react';
import './Modal.css';
import Backdrop from "../Backdrop/Backdrop";


const Modal = props => (
    <div>
        <Backdrop show={props.show} cancel={props.cancel}/>
        <div className={"Modal" + (props.show ? ' Modal-show' : '')}>
            <h1>{props.title}<button onClick={props.cancel}>X</button></h1>
            {props.children}
        </div>
    </div>
);


export default Modal;
