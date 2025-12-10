import { generateToken } from "../data/token.js";

const default_user = {
    email: "test@gmail.com",
    password: "123456",
    id: "1",
};

export const login = async (req, res) => {
    const { id, email, password } = req.body;
    if (email === default_user.email && password === default_user.password) {
        const user = { id: id, email: email };
        const token = generateToken({ id, email });
        res.json({ token });
    } else {
        res.status(401).json({ message: "Credenciales inválidas" });
    }
};
