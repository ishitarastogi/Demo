import React from "react";
// import Modal from "./Modal";
function Todo(props) {

    function deleteHandler() {
      console.log(props.text)
    }

  return (
    <div>
      <div className="card">
        <h2>{props.text}</h2>
        <div className="actions">
          <button className="btn" onClick={deleteHandler}>DELETE</button>
        </div>
      </div>
    </div>
  );
}

export default Todo;
