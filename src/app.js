import express from "express";
import bodyParser from "body-parser";
import { connectDB } from "./db.js";
import { PORT } from "./config.js";
import userRoute from "./routes/userRoute.js";
import productRoute from "./routes/productRoute.js";
import categoryRoute from "./routes/categoryRoute.js";

//inicializar express para correr server
const app = express();
//con "use" aplicas dependecias a tu sv 
// bodyParser es un middleware
app.use(bodyParser.json());

//conexion a la db
connectDB();



//Rutas de la aplicacion
//url inicial, ruta base
app.get("/", (req, res) => {
    res.send("hello world");
});

//rutas de usuarios
app.use("/api/user", userRoute);

//rutas de producto
app.use("/api/product", productRoute);

//rutas de category
app.use("/api/category", categoryRoute);

//iniciar el sv
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
