import { Router } from "express";
import { create, findOne, getAll } from "../controllers/productController.js";

const productRoute = Router();

//endpoints
productRoute.post("/create",create);
productRoute.get("/getAll", getAll);
productRoute.get("/findOne/:name", findOne);

export default productRoute;