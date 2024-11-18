// Import dotenv using import
import dotenv from 'dotenv';
// Load the environment variables from the .env file
dotenv.config();

import express from "express"
import connectDB from './config/db.js';


const app = express();
const port = process.env.PORT || 5050

connectDB().then(()=>{
    console.log("Database connected successfully");
})

// routes
app.get("/",(req,res)=>{
    res.send("Book Server")
})

app.listen(port,()=>{
    console.log(`Server is listening at PORT : ${port}`);
})

// 1pR3Y0U3hs2o1Ob8