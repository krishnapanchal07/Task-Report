import mongoose, { Schema } from "mongoose";

const taskSchema = new Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    hoursWorked: {
      type: Number,
      required: true,
    },
    date: {
      type: Date,
      required: true, 
    },
    status: {
      type: String,
      enum: ["pending", "in progress", "completed"],
      default: "pending",
    },
  },
  { timestamps: true } //adds createdAt automatically
);

const Task = mongoose.model("Task", taskSchema);
export default Task;
