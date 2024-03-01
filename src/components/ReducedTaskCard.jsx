import { milisecondComparison } from "../services/DateUtilities";

function ReducedTaskCard({ task, deleteTask }) {
  return (
    <div key={task.id} className="ReducedTaskList">
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
          <strong>Status: </strong><span>⏰</span>Prioritize this task!<span>⏰</span>
        </p>
      )}

      <button onClick={() => deleteTask(task.id)} className="deletebutton">
        {" "}
        Delete task{" "}
      </button>
    </div>
  );
}

export default ReducedTaskCard;