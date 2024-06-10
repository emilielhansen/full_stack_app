import express from "express";
import dbConnect from "../full_stack_api/db/dbConnect";
import "dotenv/config";
import userRouter from "../full_stack_api/routers/userRouter";
import cors from "cors";

dbConnect();

const app = express();
app.use(cors());
app.use(express.json());
app.use("/users", userRouter);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});