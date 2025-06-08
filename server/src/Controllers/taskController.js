import Task from "../models/task.js";

export const createTask = async (req, res) => {
  try {
    const { title, description, hoursWorked, date, status } = req.body;

    // // ✅ Validate required fields
    // if (!title || !description || !hoursWorked || !date) {
    //   return res.status(400).json({
    //     status: false,
    //     message: "Title, description, hoursWorked, and date are required",
    //   });
    // }
    const task = await Task.create({
      user: req.user.userId,
      title,
      description,
      hoursWorked,
      date,
      status,
    });

    res.status(201).json({
      status: true,
      message: "Task created successfully",
      task,
    });
  } catch (error) {
    res.status(500).json({ status: false, message: error.message });
  }
};

export const getMyTasks = async (req, res) => {
  try {
    const tasks = await Task.find({ user: req.user.userId });

    res.status(200).json({ status: true, tasks });
  } catch (error) {
    res.status(500).json({ status: false, message: error.message });
  }
};

export const updateTask = async (req, res) => {
  try {
    const task = await Task.findOneAndUpdate(
      { _id: req.params.id, user: req.user.userId },
      req.body,
      { new: true }
    );

    if (!task) {
      return res.status(404).json({ status: false, message: "Task not found" });
    }

    res.status(200).json({ status: true, message: "Task updated", task });
  } catch (error) {
    res.status(500).json({ status: false, message: error.message });
  }
};

export const deleteTask = async (req, res) => {
  try {
    const task = await Task.findOneAndDelete({
      _id: req.params.id,
      user: req.user.userId,
    });

    if (!task) {
      return res.status(404).json({ status: false, message: "Task not found" });
    }

    res.status(200).json({ status: true, message: "Task deleted" });
  } catch (error) {
    res.status(500).json({ status: false, message: error.message });
  }
};
