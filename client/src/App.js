import React from "react";

import Header from "./components/Header";
import Progress from "./components/Progress";
import TaskList from "./components/TaskList";
import AddTask from "./components/AddTask";
import ClearAll from "./components/ClearAll";

function App() {
  return (
    <>
      <Header />
      <Progress />
      <TaskList />
      <AddTask />
      <ClearAll />
    </>
  );
}

export default App;
