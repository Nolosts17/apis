// server.js
const express = require('express');
const app = express();
const port = 3010;

// Middleware para parsear JSON
app.use(express.json());

// Datos de ejemplo
const products = [
  { id: 1, nombre: 'Producto 1', precio: 100, imagen: 'https://via.placeholder.com/100', stock: 10 },
  { id: 2, nombre: 'Producto 2', precio: 150, imagen: 'https://via.placeholder.com/100', stock: 20 },
  // Agrega más productos según sea necesario
];

// Ruta para obtener todos los productos
app.get('/products', (req, res) => {
  res.json(products);
});

// Ruta para obtener un producto por ID
app.get('/products/:id', (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (product) {
    res.json(product);
  } else {
    res.status(404).send('Producto no encontrado');
  }
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`API REST escuchando en http://localhost:${port}`);
});
