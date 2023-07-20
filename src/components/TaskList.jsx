import TaskItem from "./TaskItem";

export default function TaskList({ tasks, deleteTask, editMode }) {
  return (
    <>
      <ul className="stack">
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            editMode={editMode}
          />
        ))}
      </ul>
    </>
  );
}
// This also works!
// {tasks.map((task) => (
//   <li key={task.id}>{task.name}</li>
// ))}
