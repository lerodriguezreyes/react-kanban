import { useState } from "react"

function AddTask({addNewTask}) {
  
const [title, setTitle] = useState(""); 
const [description, setDescription] = useState("");
const [assignee, setAssignee] = useState("");
const [status, setStatus] = useState("");
const [priority, setPriority] = useState("");
const [createdDate, setCreatedDate] = useState("");
const [dueDate, setDueDate] = useState("");

const handleTitleInput = (e) => {
    setTitle(e.target.value);
    {console.log("Updating title", title)}
}

const handleDescriptionInput = (e) => {
    setDescription(e.target.value);
    {console.log("Updating description", description)}
}

const handleAssigneeInput = (e) => {
    setAssignee(e.target.value);
    {console.log("Updating assignee", assignee)}
}

const handleStatusInput = (e) => {
    setStatus(e.target.value);
    {console.log("Updating statuss", status)}
}

const handlePriorityInput = (e) => {
    setPriority(e.target.value);
    {console.log("Updating priority", priority)}
}

const handleCreatedDateInput = (e) => {
    setCreatedDate(e.target.value);
    {console.log("Updating created date", createdDate)}
}

const handleDueDateInput = (e) => {
    setDueDate(e.target.value);
    {console.log("Updating due date", dueDate)}
}

const handleSubmit = (e) => {
    e.preventDefault()

const newTask = {title, description, assignee, status, priority, createdDate, dueDate}

addNewTask(newTask)

console.log('Task added =====>>>>>>>>>', newTask)
setTitle('')
setDescription('')
setAssignee('')
setCreatedDate('')
setPriority('')
setStatus('')
setDueDate('')
}

    return (
    <div className="AddTask">
        <h4>AddTask</h4>

        <form onSubmit={handleSubmit}>
            <label>Task title: </label>
            <input 
                type= 'text'
                name= 'title'
                value={title}
                onChange={handleTitleInput}
            />
            
            <label>Description: </label>
            <input 
                type= 'text'
                name= 'description'
                value={description}
                onChange={handleDescriptionInput}
            />
            
            <label>Assignee: </label>
            <input 
                type= 'text'
                name= 'assignee'
                value={assignee}
                onChange={handleAssigneeInput}
            />
            
            <label>Date assigned: </label>
            <input 
                type= 'date'
                name= 'createdDate'
                value={createdDate}
                onChange={handleCreatedDateInput}
            />
            
            <label> Priority: </label>
            <select  
                onChange={handlePriorityInput}
                name= 'priority'
                value={priority}> 
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
            </select>

            <label> Status: </label>
            <select 
                name= 'status'
                value={status}
                onChange={handleStatusInput}>
                    <option value="To Do">To Do</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Done">Done</option>
            </select>

            <label>Due date: </label>
            <input 
                type= 'date'
                name= 'dueDate'
                value={dueDate}
                onChange={handleDueDateInput}
            />
            
            {console.log("after rendering",
            title,description,assignee, createdDate,
             status, priority, dueDate)}
            
            <button type="submit">Add task</button>                                                                        
        </form>

    </div>

  )
}

export default AddTask