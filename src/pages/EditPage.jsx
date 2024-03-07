import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { TaskContext } from "../context/tasks.context";

function EditPage() {
  const [editTask, setEditTask] = useState(null);
  const [thisIndex, setThisIndex] = useState(0);

  const { tasks, setTasks } = useContext(TaskContext);

  const { foundId } = useParams();

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setEditTask((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let newTasks = [...tasks];
    newTasks[thisIndex] = editTask;
    setTasks(newTasks);
    navigate(`/taskdetails/${foundId}`);
  };

  useEffect(() => {
    let foundTask = tasks.find((task, i) => {
      setThisIndex(i);
      return task.id === foundId;
    });
    setEditTask(foundTask);
  }, []);

  return (
    <div className="editTaskPage">
      <h2 className="EditTaskHeader">Edit Task</h2>

      {editTask && (
        <form onSubmit={handleSubmit} className="AddTask">
          <label>Task title: </label>
          <input
            type="text"
            name="title"
            value={editTask.title}
            onChange={handleInputChange}
          />

          <label>Description: </label>
          <textarea
            type="text"
            name="description"
            value={editTask.description}
            onChange={handleInputChange}
          />

          <label>Assignee: </label>
          <input
            type="text"
            name="assignee"
            value={editTask.assignee}
            onChange={handleInputChange}
          />

          <label>Date assigned: </label>
          <input
            type="date"
            name="createdDate"
            value={editTask.createdDate}
            onChange={handleInputChange}
          />

          <label> Priority: </label>
          <select
            onChange={handleInputChange}
            name="priority"
            value={editTask.priority}
          >
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>

          <label> Status: </label>
          <select
            name="status"
            value={editTask.status}
            onChange={handleInputChange}
          >
            <option value="To Do">To Do</option>
            <option value="In Progress">In Progress</option>
            <option value="Done">Done</option>
          </select>

          <label>Due date: </label>
          <input
            type="date"
            name="dueDate"
            value={editTask.dueDate}
            onChange={handleInputChange}
          />
          <br/>
          <br/>
          <button type="submit"> Edit Blimp </button>
        </form>
      )}
    </div>
  );
}

export default EditPage;
