import { useContext } from "react";
import Task from "../components/Task";
import { TaskContext } from "../hooks/TaskContext";

function TaskList() {
  const { tasks, removeTask, editTask } = useContext(TaskContext);

  return (
    <section className="px-6">
      <h2 className="text-2xl text-[#1E293B] font-bold mb-3">Minhas Tarefas</h2>
      <div className="flex flex-col gap-2">
        {tasks.map((task) => (
          <Task key={task.id} task={task} removeTask={removeTask} editTask={editTask} />
        ))}
      </div>
    </section>
  );
}

export default TaskList;
