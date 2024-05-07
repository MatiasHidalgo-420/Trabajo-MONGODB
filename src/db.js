import mongoose from "mongoose";
import dotenv from "dotenv";

//inicializacion de variables de entorno
dotenv.config();
//acceder a la variable de entorno por: process.env.VARIABLE
const MONGOURI = process.env.MONGODB_URI;

//conexion a db
export const connectDB = async () => {
    try {
        await mongoose.connect(MONGOURI);
        console.log("Database connected")
    } catch (error) {
        console.error("Error connecting to database:", error)
        process.exit(1);
    }
};