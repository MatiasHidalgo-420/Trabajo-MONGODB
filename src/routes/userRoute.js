import express from "express";
import { create, get } from "../controllers/userController.js";


const userRoute = express.Router();

//endpoints
userRoute.post("/create", create);
userRoute.get("/getAll", get);

export default userRoute;