import React from "react";

import API from "../../utils/API";
import "./popup.css";

function PopUp(props) {
  const handleConfirm = () => {
    API.deleteAll().then((res) => props.handleClick());
  };

  return (
    <div id="pop-up">
      <p className="p-margin">Are you sure you want to clear all tasks?</p>
      <div className="button-container">
        <button
          className="btn-style"
          id="confirm-btn"
          onClick={() => handleConfirm()}
        >
          Yes
        </button>
        <button
          className="btn-style"
          id="cancel-btn"
          onClick={() => props.handleClick()}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

export default PopUp;
