import ReducedTaskCard from "./ReducedTaskCard";
import { useContext, useState, useEffect } from "react";
import { TaskContext } from "../context/tasks.context";

function TaskList({status}) {
  const {tasks, setTasks, deleteTask, addNewTask} = useContext(TaskContext)

  const [theseTasks, setTheseTasks] = useState([])

  const handleDragStart = (e, cardId) => {
   
    e.dataTransfer.setData("text/plain", cardId)
  }

  const handleDrop = (e, targetStatus) => {
    e.preventDefault()

    
   
   const cardId = e.dataTransfer.getData("text/plain")

    let thisCard = tasks.find((task) => task.id === cardId)

    thisCard.status = targetStatus

    let theseTasks = [...tasks.filter((task) => task.id !== cardId), thisCard]
    setTasks(theseTasks)
    
 
   
  }
    
  const handleOnDragOver = (e) => {
    e.preventDefault()
  }

  useEffect(() => {

    let ourTasks = tasks.filter((task) => task.status === status)
    setTheseTasks(ourTasks)

  }, [tasks])

  return (
    <div className="card-container" 
    onDrop={(e) => handleDrop(e, status)} onDragOver={(e)=> handleOnDragOver(e)}
    >
      {theseTasks.map((task,index) => {
        return <ReducedTaskCard key={task.id} task={task} index={index} deleteTask ={deleteTask} draggable handleDragStart={handleDragStart} />;
      })}
    </div>
  );
}

export default TaskList;
