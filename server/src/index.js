import morgan from "morgan";
import dbConnect from "./db/index.js"; //  Load after dotenv
import express from "express";
const app = express();
const port = process.env.PORT || 3000;
import cors from "cors";
import { errorHandler, routeNotFound } from "./middleware/errorMiddleware.js";
import routes from "./routes/index.js";
import cookieParser from "cookie-parser";

dbConnect(); // Connect to MongoDB
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use(
  cors({
    origin: "http://localhost:3001",
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(cookieParser());

app.use("/api", routes);

app.use(routeNotFound);
app.use(errorHandler);

app.listen(port, () => {
  console.log(` Server running at http://localhost:${port}`);
});
