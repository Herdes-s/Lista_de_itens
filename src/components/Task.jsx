import pencil from "../assets/icons/pencil.svg"
import symbol from "../assets/icons/symbol.svg"

function Task({ task }) {
  return (
    <div className="flex flex-row justify-between gap-2 bg-blue-200 p-2 rounded-2xl border-[#1E293B] border-[1px]">
      <div className="flex flex-col w-20 h-20 rounded-full bg-[#1E293B] justify-center items-center ">
        <p className="text-xl text-white">{task.time}</p>
        <p className="text-xs text-white">{task.date}</p>
      </div>
      <div className="flex flex-col justify-center gap-1">
        <h3 className="text-2xl text-[#1E293B] font-medium">{task.title}</h3>
        <p className="text-xs text-[#1E293B]">{task.description}</p>
      </div>
      <div className="flex flex-row justify-center items-center gap-2">
        <img src={pencil} alt="edição" />
        <img src={symbol} alt="excluir" />
      </div>
    </div>
  );
}

export default Task;
