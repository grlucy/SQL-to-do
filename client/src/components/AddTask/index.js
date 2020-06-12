import React from "react";
import { useSelector, useDispatch } from "react-redux";

import API from "../../utils/API";
import { toDoTextAction, toDoListAction } from "../../actions";
import "./addtask.css";

function AddTask() {
  const toDoText = useSelector((state) => state.toDoText);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const newText = e.target.value;
    dispatch(toDoTextAction(newText));
  };

  return (
    <form
      className="form-flex"
      onSubmit={(e) => {
        e.preventDefault();
        if (toDoText.trim() === "") {
          return;
        }
        API.createTodo(toDoText)
          .then((result) => {
            API.getAllTodos()
              .then((res) => {
                dispatch(toDoListAction(res.data.todos || []));
                dispatch(toDoTextAction(""));
              })
              .catch((err) => console.log(err));
          })
          .catch((error) => console.log(error));
      }}
    >
      <div className="input-flex">
        <input
          type="text"
          placeholder="Add a task"
          maxLength="255"
          value={toDoText}
          onChange={handleChange}
        />
      </div>
      <div className="button-flex">
        <button type="submit">+</button>
      </div>
    </form>
  );
}

export default AddTask;
