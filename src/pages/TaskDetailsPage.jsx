import { useParams, Link } from "react-router-dom"
import AreYouLost from "../components/AreYouLost";
import TaskCard from "../components/TaskCard";

function TaskDetailsPage({tasks}) {
    const { taskId } = useParams();
    console.log("Task Id ===>", taskId);
  
    const found = tasks.find((task) => 
      task.id === taskId);

    console.log(found)
  
    return (
        <div>
        <h1> Celestial Body details </h1>
        {!found && <AreYouLost />}
        {found && <TaskCard/>}
        <Link to="/"> Back to MissionBoard</Link>
      </div>
  )
}

export default TaskDetailsPage