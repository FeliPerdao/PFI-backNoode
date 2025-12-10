# Products API – Node.js + Express + JWT

API REST simple para gestión de productos, con autenticación JWT aplicada únicamente a operaciones de escritura (POST / DELETE).

---

## Stack

- Node.js
- Express
- JWT (jsonwebtoken)
- Firebase Firestore
- CORS
- dotenv

---

## Estructura del proyecto

src/
├── controllers/
│   ├── auth.controller.js
│   └── products.controller.js
├── middlewares/
│   └── auth.middleware.js
├── models/
│   └── products.models.js
├── routes/
│   ├── auth.routes.js
│   └── products.routes.js
├── services/
│   └── products.service.js
├── data/
│   └── tokentest.js
└── index.js

---

## Instalación

1. Clonar el repositorio

git clone <repo-url>
cd <repo>

2. Instalar dependencias

npm install

3. Crear archivo .env

PORT=3000
SECRET_KEY=super_secret_key

4. Ejecutar el servidor

npm run dev

Servidor disponible en:
http://localhost:3000

---

## Autenticación

La API utiliza JWT.

- GET: público
- POST / DELETE: requieren token

Header requerido:

Authorization: Bearer <TOKEN>

---

## Login

POST /api/auth

Body JSON:

{
  "email": "test@gmail.com",
  "password": "123456"
}

Response:

{
  "token": "JWT_TOKEN"
}

---

## Endpoints de productos

Base URL:
/api/products

---

GET /api/products
Obtiene todos los productos (público)

---

GET /api/products/:id
Obtiene producto por ID (público)

---

POST /api/products/create
Crea producto (protegido)

Headers:
Authorization: Bearer <TOKEN>
Content-Type: application/json

Body ejemplo:

{
  "name": "Producto A",
  "price": 100,
  "stock": 10
}

---

DELETE /api/products/:id
Elimina producto (protegido)

Headers:
Authorization: Bearer <TOKEN>

---

## Errores

401 No token

{
  "message": "No token provided"
}

403 Token inválido

{
  "message": "Token inválido"
}

404 Endpoint inexistente

{
  "error": "Endpoint no encontrado",
  "method": "GET",
  "path": "/api/loquesea"
}

---

## Notas

- Autenticación solo para escritura
- Services sin promesas innecesarias
- Firestore usa el ID del documento como identificador único
