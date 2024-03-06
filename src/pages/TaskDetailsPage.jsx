import { useParams, Link } from "react-router-dom";
import AreYouLost from "../components/AreYouLost";
import FullTaskCard from "../components/FullTaskCard";

function TaskDetailsPage({ tasks }) {
  
  const { taskId } = useParams();
  
  console.log("Task Id ===>", taskId);

  const task = tasks.find((task) => task.id === taskId);

  console.log(task);

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
