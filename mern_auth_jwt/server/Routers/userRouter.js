import express from "express";

// controllers
import { registerUser, loginUser,logoutUser } from "../Controllers/userController.js";

const userRouter = express.Router();

userRouter.post("/", registerUser);
userRouter.post("/login", loginUser);
userRouter.get("/logout", logoutUser);
export default userRouter;
