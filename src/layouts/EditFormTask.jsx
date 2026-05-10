import { useContext, useState } from "react";
import Button from "../components/Button";
import { TaskContext } from "../hooks/TaskContext";
import { useLocation, useNavigate } from "react-router-dom";

function EditFormTask() {
  const { tasks, setTasks } = useContext(TaskContext);

  const location = useLocation();
  const navigate = useNavigate();

  const dadosTesk = location.state?.formulario;

  const [form, setForm] = useState({
    date: dadosTesk?.date || "",
    time: dadosTesk?.time || "",
    title: dadosTesk?.title || "",
    description: dadosTesk?.description || "",
    id: dadosTesk?.id || Date.new(),
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  }

  function edictionTask(e) {
    e.preventDefault();

    if (dadosTesk && dadosTesk.id) {
      const newList = tasks.map((task) =>
        task.id === dadosTesk.id ? { ...form, id: dadosTesk.id } : task,
      );

      setTasks(newList);
    } else {
      const newTask = { ...form, id: Date.now() };
      setTasks([...tasks, newTask]);
    }
    navigate("/");
  }

  return (
    <form type="submit" onSubmit={edictionTask} className="px-6">
      <div className="mb-4">
        <h2 className="text-2xl font-bold text-[#1E293B] mb-3">Data</h2>
        <input
          type="date"
          name="date"
          required
          value={form.date}
          onChange={handleChange}
          className="w-full p-4 bg-[#D9D9D9] rounded-xl border-[1px] border-[#1E293B]"
        />
      </div>
      <div className="mb-4">
        <h2 className="text-2xl font-bold text-[#1E293B] mb-3">Hora</h2>
        <input
          type="time"
          name="time"
          required
          value={form.time}
          onChange={handleChange}
          className="w-full p-4 bg-[#D9D9D9] rounded-xl border-[1px] border-[#1E293B]"
        />
      </div>
      <div className="mb-4">
        <h2 className="text-2xl font-bold text-[#1E293B] mb-3">Titulo</h2>
        <input
          type="text"
          name="title"
          required
          value={form.title}
          onChange={handleChange}
          className="w-full p-4 bg-[#D9D9D9] rounded-xl border-[1px] border-[#1E293B]"
        />
      </div>
      <div className="mb-20">
        <h2 className="text-2xl font-bold text-[#1E293B] mb-3">Descrição</h2>
        <input
          type="text"
          name="description"
          required
          value={form.description}
          onChange={handleChange}
          className="w-full p-4 bg-[#D9D9D9] rounded-xl border-[1px] border-[#1E293B]"
        />
      </div>
      <Button textBtn="Salvar" type="submit" />
    </form>
  );
}

export default EditFormTask;
