import express from "express";
import { protectRoute } from "../middleware/authMiddleware.js";
import { createTask, deleteTask, getMyTasks, updateTask } from "../Controllers/taskController.js";

const router = express.Router();

//for security
router.use(protectRoute);
//CRUD operation
router.post("/add-task", createTask);
router.get("/get-task", getMyTasks);
router.put("/update-task/:id", updateTask);
router.delete("/delete-task/:id", deleteTask);
export default router;
