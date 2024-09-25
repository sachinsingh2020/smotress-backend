import mongoose from "mongoose";
// MONGO_URI=mongodb://127.0.0.1/smoketrees
// MONGO_URI=mongodb+srv://sachin891singh:oTMRcRwapHteYgYY@extradatabase.re4xk.mongodb.net/?retryWrites=true&w=majority&appName=extraDatabase
export const connectDB = async () => {
    const { connection } = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB connected with ${connection.host}`);
};
