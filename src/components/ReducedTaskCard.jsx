import { milisecondComparison } from "../services/DateUtilities";
import { Link } from "react-router-dom";

function ReducedTaskCard({ task, deleteTask, handleDragStart }) {

  return (
    <div key={task.id} className="TaskCard" draggable onDragStart={(e) => handleDragStart(e, task.id)}>
      <h4 className="cardItem">
        <Link to={`/taskdetails/${task.id}`}>{task.title}</Link>
      </h4>
      <p className="cardItem"> Due Date: {task.dueDate}</p>
      {milisecondComparison(task.dueDate) ? (
        <p className="cardItem">
          {" "}
          <strong>Status: </strong> On Time<span>✔️</span>{" "}
        </p>
      ) : (
        <p className="cardItem">
          {" "}
          <strong>Status: </strong>
          <span>⏰</span>Prioritize task!<span>⏰</span>
        </p>
      )}
      <div id="cardButtonDiv">
        {" "}
        <button onClick={() => deleteTask(task.id)} className="deletebutton">
          {" "}
          Blast it!{" "}
        </button>
      </div>
    </div>
  );
}

export default ReducedTaskCard;
