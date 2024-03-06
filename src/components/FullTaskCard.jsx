import { milisecondComparison } from "../services/DateUtilities";
function FullTaskCard({ task }) {
  return (
    <div className="TaskCard">
      <h3>Task: {task.title}</h3>
      <p className="cardItem"> Description: {task.description}</p>
      <p className="cardItem"> Assignee: {task.assignee}</p>
      <p className="cardItem"> Priority: {task.priority}</p>
      <p className="cardItem"> Date assigned: {task.createdDate}</p>
      <p className="cardItem"> Date due: {task.dueDate}</p>
      {milisecondComparison(task.dueDate) ? (
        <p className="cardItem">
          {" "}
          On Time<span>✔️</span>{" "}
        </p>
      ) : (
        <p className="cardItem">
          {" "}
          <span>⏰</span>Prioritize this task!<span>⏰</span>
        </p>
      )}
    </div>
  );
}

export default FullTaskCard;
