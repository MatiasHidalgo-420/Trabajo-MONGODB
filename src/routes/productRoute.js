import { Router } from "express";
import { create,  deleteProduct,  getAll, getOne, update } from "../controllers/productController.js";

const productRoute = Router();

//endpoints
productRoute.post("/create",create);
productRoute.get("/getAll", getAll);
productRoute.get("/getOne/:name", getOne)
productRoute.delete("/delete/:id",deleteProduct)
productRoute.put("/update/:id", update)
export default productRoute;