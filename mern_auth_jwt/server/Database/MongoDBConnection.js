import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const MONGODB_URI = process.env.MDB_CONNECT;

const MongoDBConnection = () => {
  mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
  });

  mongoose.connection.on("connected", () => {
    console.log("Database connected successfully");
  });

  mongoose.connection.on("disconnected", () => {
    console.log("Database disconnected");
  });

  mongoose.connection.on("error", (error) => {
    console.log("Error while connecting DB : ", error.message);
  });
};

export default MongoDBConnection;
