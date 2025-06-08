import express from "express";
import userRouter from "./userRouter.js";
import taskRouter from "./taskRouter.js";

const router = express.Router();

router.use("/user", userRouter); 

router.use("/tasks", taskRouter);

export default router;
