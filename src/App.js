import React from "react";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";

const App = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="font-bold text-4xl my-10">React To-Do App</h1>
      <TaskInput />
      <TaskList />
    </div>
  );
};

export default App;
