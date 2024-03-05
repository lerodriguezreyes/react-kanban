import { milisecondComparison } from "../services/DateUtilities";

function ReducedTaskCard({ task, deleteTask }) {
  return (
    <div key={task.id} className="ReducedTaskCard">
      <h4 id="cardHeader">Task: {task.title}</h4>
      <p id="cardDueDate"> Due Date: {task.dueDate}</p>
      {milisecondComparison(task.dueDate) ? (
        <p className="cardStatus">
          {" "}
          <strong>Status: </strong> On Time<span>✔️</span>{" "}
        </p>
      ) : (
        <p className="cardStatus">
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
        <button> Delve within! </button>
      </div>
    </div>
  );
}

export default ReducedTaskCard;
