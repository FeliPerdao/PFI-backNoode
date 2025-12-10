import express from "express";
import {
    getAllProducts,
    getProductById,
    addProduct,
    deleteProduct,
} from "../controllers/products.controller.js";
import { authentication } from "../middlewares/auth.middleware.js";

const routes = express.Router();

//Públicas
routes.get("/", getAllProducts); // Obtener todos los productos
routes.get("/:id", getProductById); // Obtener un producto por ID

//Protegidas
routes.use(authentication);
routes.post("/create", addProduct); // Agregar un nuevo producto
routes.delete("/:id", deleteProduct); // Eliminar un producto por ID

export default routes;
