// server.js
const express = require('express');
const cors = require('cors');  // Asegúrate de instalar este paquete
const app = express();
const port = process.env.PORT || 3010;

// Middleware para parsear JSON
app.use(express.json());

// Habilitar CORS para todas las solicitudes
app.use(cors());


// Datos de ejemplo
const products = [
  { id: 1, nombre: 'Computadora Gaming A', precio: 1200, imagen: 'https://img.freepik.com/vector-gratis/ilustracion-concepto-computadora-escritorio_114360-16232.jpg', stock: 15, categoria: 'Escritorio',categoria: 'Escritorio' },
  { id: 2, nombre: 'Computadora Portátil B', precio: 800, imagen: 'https://th.bing.com/th/id/R.51a369aff58e7db3e909f6d085c78815?rik=2TJVrJz2hRQFag&pid=ImgRaw&r=0', stock: 25, categoria: 'Laptop',categoria: 'Escritorio' },
  { id: 3, nombre: 'Computadora de Oficina C', precio: 600, imagen: 'https://th.bing.com/th/id/OIP.RiNbFxlcbw_REr4NLgdocQHaHa?w=500&h=500&rs=1&pid=ImgDetMain', stock: 10, categoria: 'Escritorio',categoria: 'Escritorio' },
  { id: 4, nombre: 'Computadora Todo en Uno D', precio: 1000, imagen: 'https://th.bing.com/th/id/OIP.1KlfkWYHauKrQBvNZ2oLEAHaE8?rs=1&pid=ImgDetMain', stock: 8, categoria: 'Escritorio'},
  { id: 5, nombre: 'Computadora Mini E', precio: 400, imagen: 'https://static.vecteezy.com/system/resources/previews/002/855/319/original/green-computer-gaming-set-vector.jpg', stock: 30, categoria: 'Laptop' },
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
