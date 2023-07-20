import { useState } from "react";
import "../styles/TaskItem.css";
import {
  PencilSquareIcon,
  TrashIcon,
  CheckIcon,
} from "@heroicons/react/24/outline";

export default function TaskItem({ task, deleteTask, editMode }) {
  const [checked, setChecked] = useState(false);

  const toggleChecked = () => {
    setChecked(!checked);
  };
  return (
    <li className="task-box">
      <button
        aria-label={`checkbox signifying ${task.name} is completed`}
        onClick={toggleChecked}
        className={`checkbox ${checked ? "checked" : ""}`}
      >
        <CheckIcon className="checkmark" />
      </button>
      <span onClick={toggleChecked} className="task-text">
        {task.name}
      </span>
      <button
        aria-label={`edit task ${task.name}`}
        className="icon-box edit-icon-box"
        onClick={() => editMode(true, task)}
      >
        <PencilSquareIcon className="icon edit-icon" />
      </button>
      <button
        aria-label={`delete task ${task.name}`}
        className="icon-box bin-icon-box"
        onClick={() => deleteTask(task.id)}
      >
        <TrashIcon className="icon bin-icon" />
      </button>
    </li>
  );
}
