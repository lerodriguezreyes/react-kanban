import ReducedTaskCard from "./ReducedTaskCard";
import { useContext } from "react";
import { TaskContext } from "../context/tasks.context";

function TaskList() {
  const {tasks, deleteTask, addNewTask} = useContext(TaskContext)

  return (
    <div>
      {tasks.map((task,index) => {
        return <ReducedTaskCard key={task.id} task={task} index={index} deleteTask = {deleteTask} />;
      })}

    

    </div>
  );
}

export default TaskList;
