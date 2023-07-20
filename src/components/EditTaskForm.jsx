import { useState } from "react";
import { CheckIcon } from "@heroicons/react/24/outline";

export default function EditTaskForm({ updateTask, editedTask, editMode }) {
  const [updatedTaskName, setUpdatedTaskName] = useState(editedTask.name);

  function editHandleSumbit(event) {
    event.preventDefault();
    updateTask({
      ...editedTask,
      name: updatedTaskName,
    });
    console.log(editedTask);
    editMode(false);
  }

  return (
    <form onSubmit={editHandleSumbit} className="edit-task-form">
      <input
        value={updatedTaskName}
        onInput={(event) => setUpdatedTaskName(event.target.value)}
        className="task-input"
        type="text"
        name="taskName"
        id="editTask"
        placeholder="Update your task..."
        maxLength={50}
        required
      />
      <button
        aria-label={`confirm update of task to: ${updatedTaskName}`}
        className="add-task-btn"
        type="submit"
      >
        <CheckIcon className="edit-checkmark" />
      </button>
    </form>
  );
}
