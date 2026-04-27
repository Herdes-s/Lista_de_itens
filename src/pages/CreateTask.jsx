import Header from "../components/Header";

import toBackIcon from "../assets/icons/toBackIcon.svg";

import { useNavigate } from "react-router-dom";
import InfoTask from "../layouts/InfoTask";

function CreateTask() {
  const navigate = useNavigate();

  return (
    <section>
      <Header
        top={
          <img
            className="fixed top-6 left-6"
            src={toBackIcon}
            alt="voltar"
            onClick={() => navigate("/")}
          />
        }
        title="Nova Tarefa"
        bottom={<p>Informe sua nova tarefa</p>}
      />
      <InfoTask />
    </section>
  );
}

export default CreateTask;
