import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import toBackIcon from "../assets/icons/toBackIcon.svg";
import EditFormTask from "../layouts/editFormTask";

function EditTask() {
  const navigate = useNavigate();


  return (
    <>
      <Header
        top={
          <img
            className="fixed top-6 left-6"
            src={toBackIcon}
            alt="voltar"
            onClick={() => navigate("/")}
          />
        }
        title="Editar Tarefa"
        bottom={<p>Edite seu item</p>}
      />
      <EditFormTask />
    </>
  );
}

export default EditTask;
