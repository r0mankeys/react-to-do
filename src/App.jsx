import "./App.css";
import { useState } from "react";

// Custom components
import AddTaskForm from "./components/AddTaskForm";
import TaskList from "./components/TaskList";
import EditTaskForm from "./components/EditTaskForm";
import ThemeSwitcher from "./components/ThemeSwitcher";
// Custom hoook
import useLocalStorage from "./hooks/useLocalStorage";

const App = () => {
  // Contrlling color scheme
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");

  let value; // To initially set the theme to the users preference

  prefersDark.matches ? (value = "dark") : (value = "light"); // To initally set the theme to the users prefernce

  const [tasks, setTasks] = useLocalStorage("todos.task", []); // Track state of individual tasks
  const [editedTask, setEditedTask] = useState(null); // Track state of edited task
  const [editing, setEditing] = useState(false); // Track state of editing mode
  const [theme, setTheme] = useLocalStorage(value, value); // Track state of theme

  function changeTheme() {
    theme == "light" ? setTheme("dark") : setTheme("light");
  }

  function addTask(task) {
    if (task.name.length > 0) {
      setTasks((oldState) => [task, ...oldState]);
      console.log(tasks);
    } else return;
  }

  function deleteTask(id) {
    setTasks((oldState) => oldState.filter((t) => t.id !== id));
  }

  function updateTask(task) {
    setTasks((oldState) =>
      oldState.map((t) => (t.id === task.id ? { ...t, name: task.name } : t))
    );
  }

  function editMode(bool, task) {
    setEditedTask(task);
    setEditing(bool);
  }

  return (
    <div className="container" id={theme.toString()}>
      <ThemeSwitcher changeTheme={changeTheme} />
      {editing && (
        <div className="edit">
          <div
            onClick={() => setEditing(false)}
            className="edit-underlay"
          ></div>
          <div className="edit-form">
            <EditTaskForm
              updateTask={updateTask}
              editedTask={editedTask}
              editMode={editMode}
            />
          </div>
        </div>
      )}
      <h1 className="title">To-dos</h1>
      <AddTaskForm addTask={addTask} />
      {tasks.length > 0 && (
        <TaskList tasks={tasks} deleteTask={deleteTask} editMode={editMode} />
      )}
      <div className="backdrop"></div>
    </div>
  );
};

export default App;
