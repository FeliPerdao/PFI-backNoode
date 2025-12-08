import express from "express";
import {
    getAllProducts,
    getProductById,
    addProduct,
    deleteProduct,
    editProduct,
} from "../controllers/products.controller.js";

const routes = express.Router();

routes.get("/", getAllProducts); // Obtener todos los productos
routes.get("/:id", getProductById); // Obtener un producto por ID
routes.post("/add", addProduct); // Agregar un nuevo producto
routes.put("/:id", editProduct); // Actualizar un producto existente
routes.delete("/:id", deleteProduct); // Eliminar un producto por ID

export default routes;
