import React from "react";
import { useSelector } from "react-redux";

import Header from "./components/Header";
import Progress from "./components/Progress";
import TaskList from "./components/TaskList";
import AddTask from "./components/AddTask";
import ClearAll from "./components/ClearAll";

function App() {
  const todoList = useSelector((state) => state.toDoList);

  return (
    <>
      <Header />
      {todoList.length > 0 && <Progress />}
      <TaskList />
      <section>
        <AddTask />
        {todoList.length > 0 && <ClearAll />}
      </section>
    </>
  );
}

export default App;
