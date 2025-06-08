import React from "react";
import { useForm } from "react-hook-form";
import API from "../api";
import "../styles/taskForm.css";

const TaskForm = ({ onTaskAdded }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await API.post("/tasks/add-task", data, { withCredentials: true });
      alert("Task submitted successfully!");
      reset();
      if (onTaskAdded) onTaskAdded(); // Notify parent to refresh tasks
    } catch (error) {
      alert("Error submitting task. Please try again.");
      console.error(error);
    }
  };

  return (
    <div className="task-form-container">
      <h2>Daily Task Report</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="task-form">
        <label>Title</label>
        <input
          type="text"
          {...register("title", { required: true })}
          placeholder="Enter task title"
        />
        {errors.title && <p className="error">Title is required</p>}

        <label>Date</label>
        <input type="date" {...register("date", { required: true })} />
        {errors.date && <p className="error">Date is required</p>}

        <label>Task Description</label>
        <textarea
          {...register("description", { required: true })}
          placeholder="Enter task details"
        />
        {errors.description && <p className="error">Description is required</p>}

        <label>Hours Worked</label>
        <input
          type="number"
          {...register("hoursWorked", {
            required: "Hours worked is required",
            min: { value: 1, message: "Hours must be greater than 0" },
          })}
          placeholder="Enter work hours"
        />
        {errors.hoursWorked && (
          <p className="error">{errors.hoursWorked.message}</p>
        )}

        <label>Status</label>
        <select {...register("status", { required: true })}>
          <option value="">Select</option>
          <option value="pending">Pending</option>
          <option value="in progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>
        {errors.status && <p className="error">Status is required</p>}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default TaskForm;
