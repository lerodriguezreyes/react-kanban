import { milisecondComparison } from "../services/DateUtilities"

function TaskCard({task, deleteTask}) {
  return (
    <div key={task.id} className="TaskCard">
        <h3>Task: {task.title}</h3>
        <p> task description: {task.description}</p>
        <p> assignee: {task.assignee}</p>
        <p> priority: {task.priority}</p>
        <p> createdDate: {task.createdDate}</p>
        <p> dueDate: {task.dueDate}</p>
        {milisecondComparison(task.dueDate) ? (
          <p>
            {" "}
            On Time<span>✔️</span>{" "}
          </p>
        ) : (
          <p>
            {" "}
            <span>⏰</span>Prioritize this task!<span>⏰</span>
          </p>
        )}

        <button
          onClick={() => deleteTask(task.id)}
          className="deletebutton"
        >
          Delete task{" "}
        </button>
      </div>
  )
}

export default TaskCard