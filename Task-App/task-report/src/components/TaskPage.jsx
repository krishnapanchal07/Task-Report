import React, { useState, useEffect } from "react";
import TaskList from "./TaskList";
import TaskForm from "./TaskForm";
import API from "../api";

//parent component for show tasks
const TaskPage = () => {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    try {
      const res = await API.get("/tasks/get-task", { withCredentials: true });
      setTasks(res.data.tasks || []);
    } catch (err) {
      console.error("Fetch Error:", err);
    }
  };

  //run after task added so user don't have to refresh the page
  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div>
      <TaskForm onTaskAdded={fetchTasks} />
      <TaskList tasks={tasks} onTasksUpdate={fetchTasks} />
    </div>
  );
};

export default TaskPage;
