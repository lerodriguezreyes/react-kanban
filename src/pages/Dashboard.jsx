import TaskList from "../components/TaskList";
import { useState } from "react";
import AddTask from "../components/AddTask";
import { useContext } from "react";
import { TaskContext } from "../context/tasks.context";

function Dashboard() {
  const {addNewTask} = useContext(TaskContext)
  const [isVisible, setIsVisible] = useState(false)


  return (
    <>
      <section className="KanbanBoard">
        <div className="kContainer">
        <h1 id="title">Mission Board</h1>
          <div className="kHeaders">
            <h3>A new blimp in the radar!</h3>
            <h3>Currently exploring</h3>
            <h3>Fully scanned</h3>
          </div>
          <div className="dragDropContainer"> 
            <div className="kColumns">
              <TaskList status={'To Do'}/>
            </div>
            <div className="kColumns">
              <TaskList status={'In Progress'}/>
            </div>
            <div className="kColumns">
              <TaskList status={'Done'}/>
            </div>      
          </div>
          <div id="buttonContainer"> 
          <button onClick={() => {setIsVisible(!isVisible)}}>
            {isVisible ? 'Exploration Course Set!' : 'Explore New Celestial Body!'}
            </button>
            { isVisible && (  <AddTask addNewTask = {addNewTask} />) }
          </div>
        </div>
      </section>
    </>
  );
}

export default Dashboard;
