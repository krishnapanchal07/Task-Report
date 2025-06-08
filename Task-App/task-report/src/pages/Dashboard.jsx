import React from "react";
import "../styles/dashboard.css";

import TaskPage from "../components/TaskPage";
import API from "../api";
const handleLogout = async () => {
  try {
    await API.post("/user/logout", null, { withCredentials: true });
    localStorage.removeItem("token");
    window.location.href = "/login"; // redirect to login page
  } catch (error) {
    console.error("Logout failed", error);
  }
};

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h2>Dashboard</h2>
        <button onClick={handleLogout}>Logout</button>
      </header>

      <TaskPage />
    </div>
  );
};

export default Dashboard;
