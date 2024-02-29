import KanbanTaskData from "../assets/KanbanData.json";
import { useState } from "react";
import { CurrentDate } from "../services/CurrentDate";

function TaskList() {
  const [task, setTask] = useState(KanbanTaskData);

  const deleteTaskElement = (taskElementId) => {
    const filteredTaskArray = task.filter((taskElement) => {
      return taskElement.id !== taskElementId;
    });

    setTask(filteredTaskArray);
  };

  return task.map((taskElement) => {
    return (
      <div key={taskElement.id} className="TaskCard">
        <h3>Task: {taskElement.title}</h3>
        <p> task description: {taskElement.description}</p>
        <p> assignee: {taskElement.assignee}</p>
        <p> priority: {taskElement.priority}</p>
        <p> createdDate: {taskElement.createdDate}</p>
        <p> dueDate: {taskElement.dueDate}</p>

        {taskElement.dueDate < CurrentDate ? (
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
          onClick={() => deleteTaskElement(taskElement.id)}
          className="deletebtn"
        >
          Delete task{" "}
        </button>
      </div>
    );
  });
}

export default TaskList;
