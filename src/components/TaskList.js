import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTask } from "../redux/actions";

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const handleDeleteTask = (id) => {
    dispatch(deleteTask(id));
  };

  return (
    <div>
      {tasks.length === 0 ? (
        <p className="my-5 text-red-300">no tasks available.</p>
      ) : (
        <ul className="my-5 w-[300px] flex flex-col gap-5">
          {tasks.map((task) => (
            <li key={task.id} className="flex justify-between">
              {task.text}
              <button
                className="bg-red-500 text-white px-3 rounded-md"
                onClick={() => handleDeleteTask(task.id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TaskList;
