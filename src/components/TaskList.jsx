import KanbanTaskData from "../assets/KanbanData.json";
import { useState } from "react";
import ReducedTaskCard from "./ReducedTaskCard";

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
      <h2> Orbiting tasks </h2>
      {tasks.map((task) => {
        return <ReducedTaskCard key={task.id} task={task} deleteTask = {deleteTask}/>;
      })}
    </div>
  );
}

export default TaskList;
