import React from "react";

import "./addtask.css";

function AddTask() {
  return (
    <div className="form-flex">
      <div className="input-flex">
        <input type="text" placeholder="Add a task" />
      </div>
      <div className="button-flex">
        <button>+</button>
      </div>
    </div>
  );
}

export default AddTask;
