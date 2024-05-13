import { Router } from "express";
import { create,  deleteProduct,  getAll, getOne, update } from "../controllers/productController.js";
import { verifyTokenMiddleware } from "../middlewares/verifyTokenMiddlewares.js";

const productRoute = Router();

//endpoints
productRoute.post("/create",verifyTokenMiddleware,create);
productRoute.get("/getAll", verifyTokenMiddleware,getAll);
productRoute.get("/getOne/:name",verifyTokenMiddleware, getOne)
productRoute.delete("/delete/:id",verifyTokenMiddleware,deleteProduct)
productRoute.put("/update/:id",verifyTokenMiddleware, update)
export default productRoute;