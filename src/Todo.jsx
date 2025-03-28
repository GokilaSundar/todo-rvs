import React from "react";
import { useEffect, useState } from "react";
const Todo = () => {
  const [todo, setTodo] = useState([]);
  const [newTask, setNewTask] = useState("");

  // Only if you want to persist the tasks in the local storage
  useEffect(() => {
    const tasks = localStorage.getItem("tasks");
    if (tasks) {
      setTodo(JSON.parse(tasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(todo));
  }, [todo]);

  return (
    <div>
      <div>
        <h1>Todo List</h1>
        <input
          type="text"
          placeholder="Enter the task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button
          disabled={!newTask}
          onClick={() => {
            setTodo([
              ...todo,
              {
                task: newTask,
                completed: false,
              },
            ]);
            setNewTask("");
          }}
        >
          Add
        </button>
      </div>
      <div className="tasks">
        {todo.map((task, index) => (
          <div
            key={index}
            className="task"
            style={{
              backgroundColor: task.completed
                ? "lightgreen"
                : "lightgoldenrodyellow",
            }}
          >
            <input
              type="checkbox"
              checked={task.completed}
              onClick={() => {
                const newTasks = [...todo];
                newTasks[index].completed = !newTasks[index].completed;
                setTodo(newTasks);
              }}
            />
            <span>{task.task}</span>
            <button
              onClick={() => {
                setTodo(todo.filter((_, i) => i !== index));
              }}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todo;
