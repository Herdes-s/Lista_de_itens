import { useContext, useState } from "react";
import { TaskContext } from "../hooks/TaskContext";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

function InfoTask() {
  const { addTask } = useContext(TaskContext);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    date: "",
    time: "",
    title: "",
    description: "",
  });

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit() {
    addTask(form);
    navigate("/");
  }

  return (
    <div className="px-6">
      <div className="mb-4">
        <h2 className="text-2xl font-bold text-[#1E293B] mb-3">Data</h2>
        <input
          type="date"
          name="date"
          className="w-full p-4 bg-[#D9D9D9] rounded-xl border-[1px] border-[#1E293B]"
          onChange={handleChange}
        />
      </div>
      <div className="mb-4">
        <h2 className="text-2xl font-bold text-[#1E293B] mb-3">Hora</h2>
        <input
          type="time"
          name="time"
          className="w-full p-4 bg-[#D9D9D9] rounded-xl border-[1px] border-[#1E293B]"
          onChange={handleChange}
        />
      </div>
      <div className="mb-4">
        <h2 className="text-2xl font-bold text-[#1E293B] mb-3">Titulo</h2>
        <input
        name="title"
          type="text"
          className="w-full p-4 bg-[#D9D9D9] rounded-xl border-[1px] border-[#1E293B]"
          onChange={handleChange}
        />
      </div>
      <div className="mb-20">
        <h2 className="text-2xl font-bold text-[#1E293B] mb-3">Descrição</h2>
        <input
          type="text"
          name="description"
          className="w-full p-4 bg-[#D9D9D9] rounded-xl border-[1px] border-[#1E293B]"
          onChange={handleChange}
        />
      </div>
      <Button
        textBtn="Criar Tarefa"
        submit={handleSubmit}
      />
    </div>
  );
}

export default InfoTask;
