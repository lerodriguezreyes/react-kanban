import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import TaskList from "./components/TaskList";

import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import SpaceGallery from "./pages/SpaceGallery";
import MissionBoardPage from "./pages/MissionBoardPage";

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/missionboard" element={<MissionBoardPage/>} />
        {/* <Route path="/gallery" element={<SpaceGallery />} /> */}
        
        <Route path="*" element={<NotFound />} /> 
      </Routes>
      <Sidebar />
      <Footer />
    </>
  );
}

export default App;
 