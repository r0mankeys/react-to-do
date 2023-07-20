import { useState } from "react";
import { PlusIcon } from "@heroicons/react/24/outline";

export default function AddTaskForm({ addTask }) {
  const [task, setTask] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    addTask({
      name: task,
      isChecked: false,
      id: Date.now(),
      // Will always be a unique value, good idea for an id
    });
    setTask("");
  }

  return (
    <form onSubmit={handleSubmit} className="add-task-form">
      <input
        value={task}
        onInput={(event) => setTask(event.target.value)}
        className="task-input"
        type="text"
        name="taskName"
        id="taskName"
        placeholder="Enter a task..."
        maxLength={50}
        required
      />
      <button
        aria-label={`add task ${task}`}
        className="add-task-btn"
        type="submit"
      >
        <PlusIcon className="add-task-icon" />
      </button>
    </form>
  );
}
