import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import TaskListPage from "./pages/TaskListPage";
import KanbanTaskData from "./assets/KanbanData.json"

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/tasklist" element={<TaskListPage tasks={KanbanTaskData}/>} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} /> 
      </Routes>
      <Footer />
    </>
  );
}

export default App;
 