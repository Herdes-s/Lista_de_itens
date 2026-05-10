import { useState } from "react";
import pencil from "../assets/icons/pencil.svg";
import symbol from "../assets/icons/symbol.svg";

function Task({ task, removeTask, editTask }) {
  const [visible, setVisible] = useState(false);

  return (
    <div className="w-full">
      <div className="flex w-full justify-between gap-2 bg-blue-200 p-2 rounded-t-2xl border-[#1E293B] border">
        {/* Conteúdo esquerdo */}
        <div className="flex gap-2 flex-1 min-w-0">
          {/* Hora */}
          <div className="flex flex-col w-20 h-20 shrink-0 rounded-full bg-[#1E293B] justify-center items-center">
            <p className="text-xl text-white">{task.time}</p>
            <p className="text-xs text-white">{task.date}</p>
          </div>

          {/* Textos */}
          <div className="flex flex-col justify-center gap-1 flex-1 min-w-0">
            <h3 className="text-2xl text-[#1E293B] font-medium truncate ">
              {task.title}
            </h3>
          </div>
        </div>

        {/* Botões */}
        <div className="flex items-center gap-2 shrink-0">
          <img src={pencil} alt="edição" onClick={() => editTask(task.id)} />
          <img src={symbol} alt="excluir" onClick={() => removeTask(task.id)} />
        </div>
      </div>

      {/* Descrição */}
      <div className="w-full text-center bg-blue-200 border-[#1E293B] border rounded-b-2xl p-2">
        {visible && (
          <p className=" text-[#1E293B] break-words p-2">{task.description}</p>
        )}

        <button onClick={() => setVisible(!visible)}>Ver mais</button>
      </div>
    </div>
  );
}

export default Task;
