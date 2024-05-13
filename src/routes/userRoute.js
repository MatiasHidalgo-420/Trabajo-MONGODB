import express from "express";
import { create, deleteUser, get, update, validate } from "../controllers/userController.js";
import { verifyTokenMiddleware } from "../middlewares/verifyTokenMiddlewares.js";


const userRoute = express.Router();

//endpoints
userRoute.post("/create", create);
userRoute.get("/getAll", verifyTokenMiddleware ,get);
userRoute.put("/update/:id",verifyTokenMiddleware ,update);
userRoute.delete("/deleteUser/:id",verifyTokenMiddleware ,deleteUser);
userRoute.post("/login", validate);

export default userRoute;