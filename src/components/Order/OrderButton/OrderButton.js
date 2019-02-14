import React from 'react';


function OrderButton(props) {
    return <button
        className="OrderButton"
        disabled={props.disabled}
        onClick={props.click}
    >Show Modal</button>
}


export default(OrderButton);
