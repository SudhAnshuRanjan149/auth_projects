import express from "express";

// controllers
import {
  saveCustomer,
  getCustomers,
} from "../Controllers/customerController.js";

const customerRouter = express.Router();

customerRouter.post("/", saveCustomer);
customerRouter.get("/", getCustomers);

export default customerRouter;
