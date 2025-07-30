import "./App.css";
import { Route, Routes } from "react-router-dom";
import MainPage from "./MainPage";
import ProjectsPage from "./ProjectsPage";
import NotFound from "./NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
