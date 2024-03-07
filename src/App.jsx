import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import KanbanTaskData from "./assets/KanbanData.json"
import TaskDetailsPage from "./pages/TaskDetailsPage";
import EditPage from "./pages/EditPage";

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/taskdetails/:taskId" element={<TaskDetailsPage tasks={KanbanTaskData} />} />
        <Route path="/edit/:foundId" element={<EditPage />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} /> 
      </Routes>
      <Footer />
    </>
  );
}

export default App;
 