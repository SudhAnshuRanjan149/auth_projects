import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

import MongoDBConnection from "./Database/MongoDBConnection.js";

// Routers
import userRouter from "./Routers/userRouter.js";
import customerRouter from "./Routers/customerRouter.js";

// middleware
import { auth } from "./middleware/auth.js";

dotenv.config();

// set up server
const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: ["http://localhost:3000"],
	credentials:true
  })
);

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("<h1>Express server working fine!</h1>");
});

// set up routes
app.use("/auth", userRouter);
app.use("/customer", auth, customerRouter);

app.listen(PORT, function () {
  console.log("listening on port ", PORT);
});

// connect to mongoDB
MongoDBConnection();
