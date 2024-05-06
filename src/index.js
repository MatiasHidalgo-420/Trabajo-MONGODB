import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dontenv from "dotenv"
import userRoute from "./routes/userRoute.js";


export const app = express();

app.use(bodyParser.json());

dontenv.config();


const PORT = process.env.PORT;
const MONGOURI = process.env.MONGODB_URI;

mongoose.connect(MONGOURI).then(() => {
    console.log("Database connected")
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`)
    })
})
.catch(error => console.log(error));

app.get("/", (req ,res) => {
    res.send("hello world")
});

app.use("/api/user", userRoute);



