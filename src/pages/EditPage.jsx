import React from 'react'

function EditPage() {
  return (
    <div>EditPage</div>
  )
}

export default EditPage


// import { useParams, Link } from "react-router-dom";
// import AreYouLost from "../components/AreYouLost";
// import FullTaskCard from "../components/FullTaskCard";

// function EditPage({ tasks }) {
  
//   const { taskId } = useParams();
  
//   console.log("Task Id ===>", taskId);

//   const task = tasks.find((task) => task.id === taskId);

//   console.log(task);

//   return (
//     <div>
//       {task && (
        
//         <form onSubmit={handleSubmit}>
//             <label>Task title: </label>
//             <input 
//                 type= 'text'
//                 name= 'title'
//                 value={task.title}
//                 onChange={handleTitleInput}
//             />
            
//             <label>Description: </label>
//             <textarea 
//                 type= 'text'
//                 name= 'description'
//                 value={task.description}
//                 onChange={handleDescriptionInput}
//             />
            
//             <label>Assignee: </label>
//             <input 
//                 type= 'text'
//                 name= 'assignee'
//                 value={task.assignee}
//                 onChange={handleAssigneeInput}
//             />
            
//             <label>Date assigned: </label>
//             <input 
//                 type= 'date'
//                 name= 'createdDate'
//                 value={task.createdDate}
//                 onChange={handleCreatedDateInput}
//             />
            
//             <label> Priority: </label>
//             <select  
//                 onChange={handlePriorityInput}
//                 name= 'priority'
//                 value={task.priority}> 
//                     <option value="High">High</option>
//                     <option value="Medium">Medium</option>
//                     <option value="Low">Low</option>
//             </select>

//             <label> Status: </label>
//             <select 
//                 name= 'status'
//                 value={task.status}
//                 onChange={handleStatusInput}>
//                     <option value="To Do">To Do</option>
//                     <option value="In Progress">In Progress</option>
//                     <option value="Done">Done</option>
//             </select>

//             <label>Due date: </label>
//             <input 
//                 type= 'date'
//                 name= 'dueDate'
//                 value={task.dueDate}
//                 onChange={handleDueDateInput}
//             />
//             <br></br>
            
//             <button type="submit"> Edit Blimp </button>                                                                        
//         </form>

//       )}

//       <div className="buttonContainer">
//       <Link to={`/edit/${task.id}`}> <button> Edit Celestial Body details </button> </Link>
//       <Link to="/"> <button> Back to MissionBoard </button> </Link>
//       </div>
      
//     </div>
//   );
// }

// export default EditPage