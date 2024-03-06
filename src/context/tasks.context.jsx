// TO DO
//add / remove task functionality
//task values

import {createContext, useState} from 'react';
import KanbanTaskData from "../assets/KanbanData.json";

const TaskContext = createContext();

const TaskProvider = ( {children} ) => {
    const [tasks, setTasks] = useState(KanbanTaskData);
 
    const addNewTask = (newTask) => {
      let newTasks = [newTask, ...tasks]
      setTasks(newTasks)
    }
  
    const deleteTask = (taskId) => {
      const filteredTasks = tasks.filter((task) => {
        return task.id !== taskId;
      })
      setTasks(filteredTasks);
    }

      return (
        <TaskContext.Provider value= {{tasks, setTasks, addNewTask, deleteTask}}>

        {children}

        </TaskContext.Provider>
      )
}

export {TaskContext, TaskProvider};