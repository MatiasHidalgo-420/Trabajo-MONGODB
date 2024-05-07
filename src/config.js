import dotenv from "dotenv";
//inicializacion de variables de entorno
dotenv.config();
//acceder a la variable de entorno por: process.env.VARIABLE
export const PORT = process.env.PORT;