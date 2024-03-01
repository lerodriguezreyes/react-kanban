import KanbanTaskData from "../assets/KanbanData.json";
import { useState } from "react";
import TaskCard from "./TaskCard";

function TaskList() {
  const [tasks, setTasks] = useState(KanbanTaskData);

  const deleteTask = (taskId) => {
    const filteredTasks = tasks.filter((task) => {
      return task.id !== taskId;
    });

    setTasks(filteredTasks);
  };

  return (
    <div>
      <h2> Task List </h2>
      {tasks.map((task) => {
        return <TaskCard key={task.id} task={task} deleteTask = {deleteTask}/>;
      })}
    </div>
  );
}

export default TaskList;
