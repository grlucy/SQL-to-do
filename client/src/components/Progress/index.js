import React from "react";
import { useSelector } from "react-redux";

function Progress() {
  const todoList = useSelector((state) => state.toDoList);

  return (
    <>
      {todoList.length > 0 && (
        <section>
          <p>This is Progress</p>
        </section>
      )}
    </>
  );
}

export default Progress;
