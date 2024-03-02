import KanbanTaskData from "../assets/KanbanData.json";
import { useState } from "react";
import ReducedTaskCard from "./ReducedTaskCard";
import AddTask from "./AddTask";

function TaskList() {
  const [tasks, setTasks] = useState(KanbanTaskData);
  const addNewTask = (newTask) => {
    let newTasks = [newTask, ...tasks]
    setTasks(newTasks)
  } 
  const deleteTask = (taskId) => {
    const filteredTasks = tasks.filter((task) => {
      return task.id !== taskId;
    });

    setTasks(filteredTasks);
  };

  return (
    <div>
      <h2> Orbiting tasks </h2>
      <AddTask addNewTask = {addNewTask} />
      {tasks.map((task) => {
        return <ReducedTaskCard key={task.id} task={task} deleteTask = {deleteTask}/>;
      })}
    </div>
  );
}

export default TaskList;
