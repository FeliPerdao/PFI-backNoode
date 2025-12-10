import jwt from "jsonwebtoken";
import "dotenv/config";

const secret_key = process.env.SECRET_KEY || "CLAVE_SECRETA_12345";

export const authentication = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({ message: "No token provided" });
    }

    const token = authHeader.split(" ")[1];

    jwt.verify(token, secret_key, (err, decoded) => {
        if (err) return res.status(403).json({ message: "Token inválido" });

        req.user = decoded;
        next();
    });
};
