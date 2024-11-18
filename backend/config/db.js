import mongoose from "mongoose";

const connectDB = async()=>{
    try {
        await mongoose.connect(process.env.DB_URL)
    } catch (error) {
        console.log("Error While Connecting to the database");
    }
}

export default connectDB;