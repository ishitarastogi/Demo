import React,{useState} from "react";
 import Modal from "./Modal";
 import Backdrop from "./Backdrop";
function Todo(props) {
const [modalIsOpen, setModalIsOpen]=useState(false);
    function deleteHandler() {
setModalIsOpen(true)
    }
    function closeModalHandler(params) {
      setModalIsOpen(false)
    }

  return (
      <div className="card">
        <h2>{props.text}</h2>
        <div className="actions">
          <button className="btn" onClick={deleteHandler}>DELETE</button>
        </div>
        {modalIsOpen ?<Modal onCancel={closeModalHandler} onConfirm={closeModalHandler}/> : null}
        {/* or {modalIsOpen && <Modal/>} */}
        {/* If both are true(function component will  always be true) then second value will be executed */}
        {modalIsOpen ?<Backdrop onCancel={closeModalHandler}/>: null}

        {/* To remove backdrop we are suppose to set setModalIsOpen to false but we can't use onClick 
        props in Backdrop as it is not built-in component so we need to configure it by passing function pointer to 
        Backdrop component. */}

        
      </div>
  );
}

export default Todo;
