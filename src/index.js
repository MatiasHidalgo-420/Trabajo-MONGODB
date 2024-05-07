/*
import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dontenv from "dotenv"
import userRoute from "./routes/userRoute.js";

//inicializar express para correr server
export const app = express();

//con "use" aplicas dependecias a tu sv 
// bodyParser es un middleware
app.use(bodyParser.json());

//inicializacion de variables de entorno
dontenv.config();

//acceder a la variable de entorno por: process.env.VARIABLE
const PORT = process.env.PORT;
const MONGOURI = process.env.MONGODB_URI;

//conexion de mongo
mongoose
    .connect(MONGOURI)
    .then(() => {
        console.log("Database connected")
        //correr el sv
        app.listen(PORT, () => {
          console.log(`Server is running on port ${PORT}`)
    })
})
.catch(error => console.log(error));

//url inicial, ruta base
app.get("/", (req ,res) => {
    res.send("hello world")
});

//rutas, "use" tmb sirve para rutas
//agrupa los endpoints de la misma entidad
app.use("/api/user", userRoute);

*/



