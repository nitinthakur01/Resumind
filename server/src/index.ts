import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/database.js";

dotenv.config();

await connectDB();

const app = express();

app.listen(process.env.PORT, () => {
    console.log(`Server is running at ${process.env.PORT}`)
});