import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";
import TaskList from "../layouts/TaskList";

function Home() {
  const navigate = useNavigate();

  return (
    <main>
      <Header
        title="Tarefas"
        bottom={
          <Button
            textBtn="Nova Tarefa"
            navigation={() => navigate("/create")}
          />
        }
      />
      <TaskList />
    </main>
  );
}

export default Home;
