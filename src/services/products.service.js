import {
    getProduct,
    getAllProducts,
    addProduct,
    updateProduct,
    deleteProduct,
} from "../models/products.models.js";

export const getAllProductsService = () => {
    return getAllProducts();
};

export const getProductByIdService = (id) => {
    return getProduct(id);
};

export const addProductService = (product) => {
    return addProduct(product);
};

export const deleteProductService = (id) => {
    return deleteProduct(id);
};

export const editProductService = (id, product) => {
    return updateProduct(id, product);
};
