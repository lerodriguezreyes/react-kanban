import {createContext, useState} from 'react';
import KanbanTaskData from "../assets/KanbanData.json";

const TaskContext = createContext();

const TaskProvider = ( {children} ) => {
    const [tasks, setTasks] = useState(KanbanTaskData);
    const [tasksIds, setTaskIds] = useState(KanbanTaskData.length + 1)
 
    const addNewTask = (newTask) => {
      newTask.id = String(tasksIds)
      let newTasks = [newTask, ...tasks]
      setTaskIds((prev) => prev + 1)
      setTasks(newTasks)
    }
  
    const deleteTask = (taskId) => {
      const filteredTasks = tasks.filter((task) => {
        return task.id !== taskId;
      })
      setTasks(filteredTasks);
    }

      return (
        <TaskContext.Provider value= {{tasks, setTasks, addNewTask, deleteTask, tasksIds}}>

        {children}

        </TaskContext.Provider>
      )
}

export {TaskContext, TaskProvider};