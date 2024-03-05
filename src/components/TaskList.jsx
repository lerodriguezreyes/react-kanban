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
      {tasks.map((task,index) => {
        return <ReducedTaskCard key={task.id} task={task} index={index} deleteTask = {deleteTask} />;
      })}

      <AddTask addNewTask = {addNewTask} />

    </div>
  );
}

export default TaskList;
