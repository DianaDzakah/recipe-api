import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from"cors"
import recipeRoutes from "./routes/recipes.routes.js";

//load env variables
dotenv.config();

const app = express();

//apply middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(express.static("uploads"));

//use routes
app.use(recipeRoutes);

//Make database connection
await mongoose.connect(process.env.MONGO_URI);

//listeng to port 6000
app.listen(4000, () => {
  console.log("app is running");
});
