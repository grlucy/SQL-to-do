import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import API from "../../utils/API";
import { toDoListAction } from "../../actions";

function TaskList() {
  const todoList = useSelector((state) => state.toDoList);
  const dispatch = useDispatch();

  const loadTasks = () => {
    API.getAllTodos()
      .then((res) => dispatch(toDoListAction(res.data.todos)))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    loadTasks();
  });

  return (
    <>
      {todoList.length > 0 && (
        <section>
          {todoList.map((todo) => (
            <div key={todo.id}>
              <p>{todo.todo_text}</p>
            </div>
          ))}
        </section>
      )}
    </>
  );
}

export default TaskList;
