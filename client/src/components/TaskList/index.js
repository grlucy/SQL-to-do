import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import API from "../../utils/API";
import { toDoListAction } from "../../actions";
import "./tasklist.css";

function TaskList() {
  const todoList = useSelector((state) => state.toDoList);
  const clearAllBoolean = useSelector((state) => state.clearAll);
  const dispatch = useDispatch();

  const loadTasks = () => {
    API.getAllTodos()
      .then((res) => dispatch(toDoListAction(res.data.todos || [])))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    if (!clearAllBoolean) {
      loadTasks();
    }
    // eslint-disable-next-line
  }, [clearAllBoolean]);

  const handleUpdate = (status, id) => {
    API.updateStatus(status, id)
      .then((res) => loadTasks())
      .catch((err) => console.log(err));
  };

  const handleDeleteOne = (id) => {
    API.deleteOneTodo(id)
      .then((res) => loadTasks())
      .catch((err) => console.log(err));
  };

  return (
    <>
      {todoList.length > 0 && (
        <section>
          {todoList.map((todo) => (
            <div key={todo.id} className="todo-item">
              <p className="todo-check">
                <i
                  className={
                    todo.complete ? "fa fa-check-circle" : "fa fa-circle"
                  }
                  aria-hidden="true"
                  onClick={() => {
                    let newStatus;
                    if (todo.complete === 0) {
                      newStatus = 1;
                    } else {
                      newStatus = 0;
                    }
                    handleUpdate(newStatus, todo.id);
                  }}
                ></i>
                <span>{todo.todo_text}</span>
              </p>
              <p
                className="delete-item"
                onClick={() => handleDeleteOne(todo.id)}
              >
                &times;
              </p>
            </div>
          ))}
        </section>
      )}
    </>
  );
}

export default TaskList;
