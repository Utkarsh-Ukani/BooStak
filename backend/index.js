import dotenv from 'dotenv';
dotenv.config();

import express from "express";
import cors from "cors";
import connectDB from './config/db.js';

const app = express();
const port = process.env.PORT || 5050

// middleware
app.use(express.json());
app.use(cors({
    origin:[process.env.FRONTEND_URL],
    credentials:true
}))

connectDB().then(()=>{
    console.log("Database connected successfully");
}).catch((e)=>console.log(e))

// routes
import bookRoutes from "./src/books/book.route.js"
import orderRoutes from "./src/orders/order.route.js"
import userRoutes from "./src/users/user.route.js"


app.use("/api/books",bookRoutes)
app.use("/api/orders",orderRoutes)
app.use("/api/auth",userRoutes)


app.get("/",(req,res)=>{
    res.send("Book Server")
})

app.listen(port,()=>{
    console.log(`Server is listening at PORT : ${port}`);
})

