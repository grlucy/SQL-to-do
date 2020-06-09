import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import API from "../../utils/API";
import { toDoListAction } from "../../actions";
import "./tasklist.css";

function TaskList() {
  const todoList = useSelector((state) => state.toDoList);
  const dispatch = useDispatch();

  const loadTasks = () => {
    API.getAllTodos()
      .then((res) => dispatch(toDoListAction(res.data.todos || [])))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    loadTasks();
    // eslint-disable-next-line
  }, []);

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
                ></i>
                <span>{todo.todo_text}</span>
              </p>
              <p className="delete-item">&times;</p>
            </div>
          ))}
        </section>
      )}
    </>
  );
}

export default TaskList;
