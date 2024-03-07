import { useParams, Link} from "react-router-dom";
import { useContext } from "react";
import { TaskContext } from "../context/tasks.context";
import AreYouLost from "../components/AreYouLost";
import FullTaskCard from "../components/FullTaskCard";

function TaskDetailsPage() {

  const { tasks } = useContext(TaskContext)
  
  const { taskId } = useParams();

  const task = tasks.find((task) => task.id === taskId);

  return (
    <div>
      <h1> Celestial Body details </h1>
      {!task && <AreYouLost />}
      {task && ( <FullTaskCard  task={task} />)}
      <div className="buttonContainer">
      <Link to={`/edit/${task.id}`}> <button> Edit Celestial Body details </button> </Link>
      <Link to="/"> <button> Back to MissionBoard </button> </Link>
      </div>
      
    </div>
  );
}

export default TaskDetailsPage;
