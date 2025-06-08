import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const uri = process.env.MONGO_URI;

if (!uri) {
  throw new Error("Database URI is missing!");
}

const dbConnect = async () => {
  try {
    await mongoose.connect(uri);
    console.log(" DB connected");
  } catch (error) {
    console.error(" DB connection failed:", error.message);
  }
};

export default dbConnect;
