import express from "express";
import dotenv from "dotenv";
import MongoDBConnection from "./Database/MongoDBConnection.js";

// Routers
import userRouter from "./Routers/userRouter.js";

dotenv.config();

// set up server
const app = express();
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("<h1>Express server working fine!</h1>");
});

// set up routes
app.use("/auth", userRouter);

app.listen(PORT, function () {
  console.log("listening on port ", PORT);
});

// connect to mongoDB
MongoDBConnection();
