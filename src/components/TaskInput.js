import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/actions";

const TaskInput = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleAddTask = (e) => {
    e.preventDefault();

    if (text.trim()) {
      dispatch(addTask(text));
      setText("");
    }
  };

  return (
    <form onSubmit={handleAddTask} className="flex gap-5">
      <input
        type="text"
        value={text}
        required
        onChange={(e) => setText(e.target.value)}
        placeholder="Add new task..."
        className="rounded-md p-2 shadow-md focus:outline-none"
      />
      <button
        className="bg-blue-500 text-white px-3 rounded-md shadow-sm"
        type="submit">
        Add Task
      </button>
    </form>
  );
};

export default TaskInput;
