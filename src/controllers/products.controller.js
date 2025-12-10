import {
    getAllProductsService,
    getProductByIdService,
    addProductService,
    deleteProductService,
} from "../services/products.service.js";

export const getAllProducts = async (req, res) => {
    try {
        const products = await getAllProductsService();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: "Error interno del servidor" });
    }
};

export const getProductById = async (req, res) => {
    try {
        const id = req.params.id;
        const product = await getProductByIdService(id);
        if (!product) {
            res.status(404).json({ message: "Producto no encontrado" });
        } else {
            res.status(200).json(product);
        }
    } catch (error) {
        res.status(500).json({ message: "Error interno del servidor" });
    }
};

export const addProduct = async (req, res) => {
    try {
        const product = req.body;
        const newProduct = await addProductService(product);
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(500).json({ message: "Error interno del servidor" });
    }
};

export const deleteProduct = async (req, res) => {
    try {
        const id = req.params.id;
        if (id) {
            await deleteProductService(id);
            res.status(200).json({
                message: "Producto eliminado correctamente",
            });
        } else {
            res.status(404).json({ message: "Producto no encontrado" });
        }
    } catch (error) {
        res.status(500).json({ message: "Error interno del servidor" });
    }
};

// export const editProduct = async (req, res) => {
//     try {
//         const { id } = req.params;
//         const productData = req.body;

//         if (!id) {
//             return res.status(400).json({ message: "ID requerido" });
//         }

//         delete productData.id; // Para no enviar el ID en la actualización

//         const updatedProduct = await editProductService(id, productData);

//         res.status(200).json({
//             id,
//             ...updatedProduct,
//         });
//     } catch (error) {
//         res.status(500).json({ message: "Error interno del servidor" });
//     }
// };
