import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const TaskContext = createContext();

export function TaskProvider({ children }) {
  const [tasks, setTasks] = useState(() => {
    const savedItens = localStorage.getItem("tasks");
    return savedItens ? JSON.parse(savedItens) : [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const navigate = useNavigate();

  function addTask(task) {
    setTasks((prev) => [...prev, task]);
  }

  function removeTask(id) {
    const newList = tasks.filter((task) => task.id !== id);
    setTasks(newList);
  }

  function editTask(id) {
    const updatList = tasks.find((task) => task.id === id);
    if (updatList) {
      navigate("/edit", { state: { formulario: updatList } });
    }
  }

  return (
    <TaskContext.Provider
      value={{ tasks, setTasks, addTask, removeTask, editTask }}
    >
      {children}
    </TaskContext.Provider>
  );
}

export { TaskContext };
