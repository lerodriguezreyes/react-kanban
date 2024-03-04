import { milisecondComparison } from "../services/DateUtilities";

function ReducedTaskCard({ task, deleteTask }) {
  return (
    <div key={task.id} className="ReducedTaskCard">
      <h4>Task: {task.title}</h4>
      <p> Due Date: {task.dueDate}</p>
      {milisecondComparison(task.dueDate) ? (
        <p>
          {" "}
          <strong>Status: </strong> On Time<span>✔️</span>{" "}
        </p>
      ) : (
        <p>
          {" "}
          <strong>Status: </strong><span>⏰</span>Prioritize task!<span>⏰</span>
        </p>
      )}

      <button onClick={() => deleteTask(task.id)} className="deletebutton">
        {" "}
        Blast it!{" "}
      </button>

      <button> Explore it! </button>
    </div>
  );
}

export default ReducedTaskCard;
