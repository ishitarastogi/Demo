import React from 'react'

function Modal(props) {
    function cancelHandler(){
props.onCancel();
    }
    function confirmHandler(params) {
        props.onConfirm();
    }
    return (
        <div className='modal'>
            <p>Are you sure?</p>
            <button className= 'btn btn--alt' onClick={cancelHandler}>Cancel</button> 
            {/* or <button className= 'btn btn--alt' onClick={props.onCancel}>Cancel</button>  */}

            <button className='btn' onClick={confirmHandler}>Confirm</button>
        </div>
    )
}

export default Modal
