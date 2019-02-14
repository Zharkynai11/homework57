import React from 'react';
import Button from '../../UI/Button/Button';


const OrderSummary = props => {
    var buts=[];
    for (var i=0; i<props.buttons.length;i++){
        buts.push(<Button btnType={props.buttons[i].type} clicked={props.buttons[i].clicked}>{props.buttons[i].label}</Button>);
    }
    console.log(buts)
    return (
        <div>
            {buts}
        </div>
    )
};


export default OrderSummary;

