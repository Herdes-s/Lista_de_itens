import { TaskProvider } from "./hooks/TaskContext";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CreateTask from "./pages/CreateTask";

function App() {
  return (
      <TaskProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<CreateTask />} />
        </Routes>
      </TaskProvider>
  );
}

export default App;
