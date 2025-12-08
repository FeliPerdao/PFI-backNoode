import { db } from "../data/data.js";
import {
    doc,
    getDoc,
    collection,
    getDocs,
    addDoc,
    updateDoc,
    deleteDoc,
} from "firebase/firestore";

// Obtener un producto por ID
export async function getProduct(id) {
    try {
        const docSnap = await getDoc(doc(db, "products", id));
        if (!docSnap.exists()) return null;
        console.log("Document data:", JSON.stringify(docSnap.data(), null, 2));
        return { id: docSnap.id, ...docSnap.data() };
    } catch (error) {
        console.error("Error getting document: ", error);
        throw error;
        resolve({ id: docSnap.id, ...docSnap.data() });
    }
}

// Obtener todos los productos
export async function getAllProducts() {
    try {
        const querySnapshot = await getDocs(collection(db, "products"));
        const allProducts = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));
        console.log("All products:", JSON.stringify(allProducts, null, 2));
        return allProducts;
    } catch (error) {
        console.error("Error getting documents: ", error);
        throw error;
    }
}

// Agregar un nuevo producto
export async function addProduct(product) {
    try {
        const ref = await addDoc(collection(db, "products"), product);
        console.log("Doc ID: ", ref.id);
        console.log("Producto: ", JSON.stringify(product, null, 2));
        return { id: ref.id, ...product };
    } catch (error) {
        console.error("Error adding document: ", error);
        throw error;
    }
}

// Actualizar un producto existente
export async function updateProduct(id, product) {
    try {
        await updateDoc(doc(db, "products", id), product);
        console.log("Producto actualizado: ", JSON.stringify(product, null, 2));
        return {
            id,
            ...product,
        };
    } catch (error) {
        console.error("Error updating document: ", error);
        throw error;
    }
}

// Eliminar un producto por ID
export async function deleteProduct(id) {
    try {
        await deleteDoc(doc(db, "products", id));
        console.log("Producto eliminado: ", id);
        return id;
    } catch (error) {
        console.error("Error deleting document: ", error);
        throw error;
    }
}
