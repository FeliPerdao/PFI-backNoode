import express from "express";
import cors from "cors";
import rutasProductos from "./src/routes/products.routes.js";
import authRoutes from "./src/routes/auth.routes.js";
import { authentication } from "./src/middlewares/auth.middleware.js";

const app = express();
const PORT = process.env.PORT || 3000; // Puerto configurable mediante variable de entorno

const corsOptions = {
    origin: "http://localhost:3000", // domínimos permitidos
    methods: ["GET", "POST", "PUT", "DELETE"], // metódos permitidos
    allowedHeaders: ["Content-Type", "Authorization"], // cabeceras permitidas
    exposedHeaders: ["Content-Length"], // cabeceras expuestas al cliente
    credentials: true, // permitir el envío de cookies
    maxAge: 600, // tiempo en segundos para cachear las opciones de CORS (cache preflight)
    optionSuccessStatus: 204, // código de estado para respuestas exitosas en OPTIONS  (respuesta preflight)
};

app.use(cors(corsOptions));
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/products", rutasProductos);

app.use((req, res, next) => {
    console.log(`Datos recibidos al: ${req.method} ${req.url}`);
    next();
});

app.use((req, res) => {
    res.status(404).json({
        error: "Endpoint no encontrado",
        method: req.method,
        path: req.originalUrl,
    });
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
