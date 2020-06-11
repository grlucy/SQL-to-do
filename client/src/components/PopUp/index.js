import React from "react";

import "./popup.css";

function PopUp(props) {
  return (
    <div id="pop-up">
      <p className="p-margin">Are you sure you want to clear all tasks?</p>
      <div className="button-container">
        <button className="btn-style" id="confirm-btn">
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
