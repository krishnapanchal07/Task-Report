import React, { useState } from "react";
import API from "../api";
import "../styles/taskList.css";

const TaskList = ({ tasks, onTasksUpdate }) => {
  const [editTask, setEditTask] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    date: "",
    hoursWorked: "",
    status: "",
  });

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this task?")) return;

    try {
      await API.delete(`/tasks/delete-task/${id}`, { withCredentials: true });
      if (onTasksUpdate) onTasksUpdate();
    } catch (err) {
      console.error("Delete Error:", err);
    }
  };

  const handleEditClick = (task) => {
    setEditTask(task._id);
    setFormData({
      title: task.title,
      description: task.description,
      date: task.date.slice(0, 10), 
      hoursWorked: task.hoursWorked,
      status: task.status,
    });
  };

  const handleUpdateSubmit = async (e) => {
    e.preventDefault();
    if (Number(formData.hoursWorked) <= 0) {
    alert("Hours worked must be greater than 0.");
    return; // stop submission
  }
    try {
      await API.put(`/tasks/update-task/${editTask}`, formData, {
        withCredentials: true,
      });
      setEditTask(null);
      if (onTasksUpdate) onTasksUpdate();
    } catch (err) {
      console.error("Update Error:", err);
    }
  };

  const handleInputChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  if (!tasks || tasks.length === 0) {
    return <p>No tasks found. Add a new one!</p>;
  }

  return (
    <div className="task-list-container">
      <h2>Your Task Reports</h2>

      <div className="task-cards-wrapper">
        {tasks.map((task) => (
          <div className="task-card" key={task._id}>
            {editTask === task._id ? (
              <form className="edit-form" onSubmit={handleUpdateSubmit}>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  required
                />
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  required
                />
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  required
                />
                <input
                  type="number"
                  name="hoursWorked"
                  value={formData.hoursWorked}
                  onChange={handleInputChange}
                  required
                />
                <select
                  name="status"
                  value={formData.status}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select</option>
                  <option value="Pending">Pending</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Completed">Completed</option>
                </select>
                <button type="submit">Update</button>
                <button
                  type="button"
                  className="cancel"
                  onClick={() => setEditTask(null)}
                >
                  Cancel
                </button>
              </form>
            ) : (
              <>
                <h3>{task.title}</h3>
                <p>
                  <strong>Date:</strong> {task.date.slice(0, 10)}
                </p>
                <p>
                  <strong>Description:</strong> {task.description}
                </p>
                <p>
                  <strong>Hours:</strong> {task.hoursWorked}
                </p>
                <p>
                  <strong>Status:</strong> {task.status}
                </p>
                <div className="action-btns">
                  <button onClick={() => handleEditClick(task)}>Edit</button>
                  <button
                    className="delete"
                    onClick={() => handleDelete(task._id)}
                  >
                    Delete
                  </button>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskList;
